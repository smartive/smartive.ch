import { Client } from '@notionhq/client';
import {
  MultiSelectPropertyValue,
  RichTextPropertyValue,
  TitlePropertyValue,
  URLPropertyValue,
} from '@notionhq/client/build/src/api-types';

export type NotionCustomer = {
  name: string;
  description: string;
  logo: string;
  caseLink: string;
  tags: string[];
};

export const getNotionCustomers = async (): Promise<NotionCustomer[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'publizieren',
      checkbox: {
        equals: true,
      },
    },
  });

  return results.map(({ properties }) => ({
    name: (properties.Name as TitlePropertyValue).title.map((t) => t.plain_text).join(' '),
    description: (properties.Ausschnitt as RichTextPropertyValue).rich_text.map((t) => t.plain_text).join(' ') || '',
    logo: (properties.Logo as RichTextPropertyValue).rich_text.map((t) => t.plain_text).join(' ') || '',
    caseLink: (properties.CaseLink as URLPropertyValue)?.url || '',
    tags: (properties.Kategorie as MultiSelectPropertyValue).multi_select.map((tag) => tag.name) || [],
  }));
};
