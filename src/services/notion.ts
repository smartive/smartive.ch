import { Client } from '@notionhq/client/build/src';
import {
  BlockObjectResponse,
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse,
  GetBlockResponse,
  ImageBlockObjectResponse,
  ToggleBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import sizeOf from 'image-size';
import fetch from 'node-fetch';

type RemoveTypes = Extract<GetBlockResponse, { type: 'column' | 'column_list' | 'toggle' | 'image' }>;
type AnyBlock = Extract<Exclude<GetBlockResponse, RemoveTypes> | NestedBlock | ImageBlock, { type: string }>;
export type BlockType = AnyBlock['type'];
export type Block<Type extends BlockType = BlockType> = Extract<AnyBlock, { type: Type }>;

type ImageBlock = ImageBlockObjectResponse & {
  image: ImageBlockObjectResponse['image'] & {
    meta: {
      width: number;
      height: number;
    };
  };
};

type NestedBlock =
  | {
      id: string;
      type: 'unordered_list';
      children: Block<'bulleted_list_item'>[];
    }
  | {
      id: string;
      type: 'ordered_list';
      children: Block<'numbered_list_item'>[];
    }
  | (ToggleBlockObjectResponse & {
      children: Block[];
    })
  | (ColumnBlockObjectResponse & {
      children: Block[];
    })
  | (ColumnListBlockObjectResponse & {
      children: Block[];
    });

export const getNotionClient = () =>
  new Client({
    auth: process.env.NOTION_TOKEN,
  });

const nestedBlocks = ['column', 'column_list', 'toggle'];
const isImageBlock = (block: BlockObjectResponse): block is Block<'image'> => block.type === 'image';
const isNestedBlock = (block: any): block is NestedBlock => 'type' in block && nestedBlocks.includes(block.type);

/**
 * Why hello there! Because Next.js needs the image size/ration for rendering, and the
 * Notion API doesn't provide this, we need to figure it out. Therefore we start to download
 * the image. The image dimensions are in the file header, so we only download the first 32kb
 * and then cancel the download.
 *
 * This is a lovely and really well written solution and I wish you luck touching it.
 */
const read = async (body: NodeJS.ReadableStream) => {
  // First we allocate a buffer we can write stuff into.
  let buffer = Buffer.alloc(0);
  let dimensions = null;

  // Yeah this is 32kb
  const MAX_BUFFER_SIZE_IN_BIT = 32000;

  // We start asynchronously downloading the image
  for await (const chunk of body) {
    // We add chunks into the buffer
    buffer = Buffer.concat([buffer, chunk as Buffer]);
    // When we (think we) have enough data, we read the dimensions and return the data
    // (and therefore cancel the download)
    if (buffer.length > MAX_BUFFER_SIZE_IN_BIT) {
      dimensions = sizeOf(buffer);

      return dimensions;
    }
  }

  // If there's no data, we return null
  return null;
};

export async function getBlocks(id: string): Promise<Block[]> {
  const blocks = [];
  let cursor;
  const client = getNotionClient();

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { results, next_cursor } = await client.blocks.children.list({
      start_cursor: cursor,
      block_id: id,
    });

    const enrichedResults = [];

    for (let i = 0; i < results.length; i++) {
      const block = results[i];

      if ('type' in block) {
        if (isNestedBlock(block)) {
          const { id } = block;
          block.children = await getBlocks(id);
        }

        if (isImageBlock(block)) {
          const imageUrl = block.image.type === 'external' ? block.image.external.url : block.image.file.url;

          // If the image is hosted on cloudinary, we use the cloudinary API to get the image dimensions.
          // We also exclude gifs, because the cloudinary API doesn't return anything for them.
          if (imageUrl.includes('cloudinary') && !imageUrl.includes('.gif')) {
            const infoUrl = `https://res.cloudinary.com/smartive/image/upload/fl_getinfo/${imageUrl.replace(
              'https://res.cloudinary.com/smartive/image/upload/',
              ''
            )}`;
            const res = (await (await fetch(infoUrl)).json()) as { input: { width: number; height: number } };
            block.image.meta = {
              width: res.input.width,
              height: res.input.height,
            };
          } else {
            // So. Here's some fun with downloading images again. We need to ensure the buffer size so we
            // can (in theory because we'll cancel this) download the image. This limit is set to 50MB, after that things could crash.
            const BUFFER_SIZE_IN_BYTES = 1000 * 1000 * 50;
            const response = await fetch(imageUrl, { highWaterMark: BUFFER_SIZE_IN_BYTES });

            const dimensions = await read(response.body);

            block.image.meta = {
              width: dimensions?.width ?? 0,
              height: dimensions?.height ?? 0,
            };

            if (block.image.type === 'file') {
              block.image.file.url = getSignedUrl(block.image.file.url, block.id);
            }
          }
        }
        enrichedResults.push(block);
      }
    }

    blocks.push(...enrichedResults);

    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }

  return Array.from(parseBlocks(blocks.values()));
}

const getSignedUrl = (src: string, id: string) => {
  const table = 'block';

  const proxyUrl = `https://www.notion.so/image/${encodeURIComponent(src)}`;

  const url = new URL(proxyUrl);
  url.searchParams.set('table', table);
  url.searchParams.set('id', id);
  url.searchParams.set('cache', 'v2');

  return url.toString();
};

const parseBlocks = function* (it: IterableIterator<GetBlockResponse>): IterableIterator<Block> {
  let current = it.next();

  while (!current.done) {
    switch (current.value.type) {
      case 'numbered_list_item': {
        const list: Block = {
          type: 'ordered_list',
          id: current.value.id.substring(0, 6) + 'parent',
          children: [],
        };
        while (!current.done && current.value.type === 'numbered_list_item') {
          list.children.push(current.value);
          current = it.next();
        }

        yield list;
        continue;
      }
      case 'bulleted_list_item': {
        const list: Block = {
          type: 'unordered_list',
          id: current.value.id.substring(0, 6) + 'parent',
          children: [],
        };
        while (!current.done && current.value.type === 'bulleted_list_item') {
          list.children.push(current.value);
          current = it.next();
        }

        yield list;
        continue;
      }
      default:
        yield current.value;
        break;
    }

    current = it.next();
  }
};
