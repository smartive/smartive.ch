import { Client } from '@notionhq/client/build/src';

export const getNotionClient = () =>
  new Client({
    auth: process.env.NOTION_TOKEN,
  });
