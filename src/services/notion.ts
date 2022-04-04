import { Client } from '@notionhq/client/build/src';
import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';
import sizeOf from 'image-size';
import fetch from 'node-fetch';
import { Block, BlockWithMeta } from '../utils/notion';

export const getNotionClient = () =>
  new Client({
    auth: process.env.NOTION_TOKEN,
  });

const nestedBlocks = ['column', 'column_list', 'toggle'];

const isImageBlock = (block: Block): block is Block<'image'> => block.type === 'image';

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

export async function getBlocks(id: string): Promise<ListBlockChildrenResponse['results']> {
  const blocks: Block[] = [];
  let cursor;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { results, next_cursor } = await getNotionClient().blocks.children.list({
      start_cursor: cursor,
      block_id: id,
    });

    const enrichedResults = [];

    for (let i = 0; i < results.length; i++) {
      const block = results[i];

      if ('type' in block) {
        const { type } = block;

        if (nestedBlocks.includes(type)) {
          const { id } = block;
          const nestedBlocks = await getBlocks(id);
          (block as any).children = nestedBlocks;
        }

        if (isImageBlock(block)) {
          const imageUrl = block.image.type === 'external' ? block.image.external.url : block.image.file.url;

          // So. Here's some fun with downloading images again. We need to ensure the buffer size so we
          // can (in theory because we'll cancel this) download the image. This limit is set to 50MB, after that things could crash.
          const BUFFER_SIZE_IN_BYTES = 1000 * 1000 * 50;
          const response = await fetch(imageUrl, { highWaterMark: BUFFER_SIZE_IN_BYTES });

          const dimensions = await read(response.body);

          if (dimensions !== null) {
            (block as unknown as BlockWithMeta).image.meta = {
              width: dimensions.width,
              height: dimensions.height,
            };
          }

          if (block.image.type === 'file') {
            block.image.file.url = getSignedUrl(block.image.file.url, block.id);
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

  return blocks;
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
