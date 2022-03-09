import { Client } from '@notionhq/client/build/src';
import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';
import { BlockWithChildren } from '../utils/notion';

export const getNotionClient = () =>
  new Client({
    auth: process.env.NOTION_TOKEN,
  });

const nestedBlocks = ['column', 'column_list', 'toggle'];

// const isBlockObjectResponse = (block: ListBlockChildrenResponse['results']): block is BlockObjectResponse => 'type' in block;

export async function getBlocks(id: string): Promise<ListBlockChildrenResponse['results']> {
  const blocks = [];
  let cursor;

  //   eslint-disable-next-line no-constant-condition
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
