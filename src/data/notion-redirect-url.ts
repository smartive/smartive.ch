import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

const NOTION_SLUG_ID = '9e33d9d1cb95486fbe08609c2b7edc1c';

type Filter = Extract<QueryDatabaseParameters, { type: 'filter' }>;

export const getNotionRedirectUrls = async (): Promise<string[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_SLUG_ID,
    filter: {
      and: [
        {
          property: 'Url',
          title: {
            is_not_empty: true,
          },
        },
        {
          property: 'Title',
          title: {
            is_not_empty: true,
          },
        },
        {
          property: 'Description',
          rich_text: {
            is_not_empty: true,
          },
        },
      ].filter(Boolean) as Filter[],
    },
  });

  return (results as unknown as NotionRedirectUrls[]).map(({ properties: { Url } }) => Url?.title[0]?.plain_text);
};

export const getNotionRedirectUrlData = async (slug: string): Promise<RedirectUrlData> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_SLUG_ID,
    filter: {
      and: [
        {
          property: 'Url',
          title: {
            is_not_empty: true,
          },
        },
        {
          property: 'Url',
          title: {
            contains: slug,
          },
        },
      ].filter(Boolean) as Filter[],
    },
  });

  return (results as unknown as NotionRedirectUrls[]).map(
    ({ properties: { Title, Description, Url, Image, Language } }) => ({
      title: Title?.rich_text[0]?.plain_text ?? '',
      description: Description?.rich_text[0]?.plain_text ?? '',
      url: Url?.title[0]?.plain_text,
      language: Language?.select?.name ?? 'en',
      image: Image?.files[0]?.file?.url ?? null,
    })
  )[0];
};

export type RedirectUrlData = {
  title: string;
  url: string;
  image?: string;
  language: string;
  description: string;
};

interface SelectField {
  id: string;
  name: string;
  type: string;
  select: { name: string };
}

export interface Properties {
  Language: SelectField;
  Url: Url;
  Image: Files;
  Title: Title;
  Description: Description;
}

export interface NotionRedirectUrls {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Text {
  content: string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface RichText {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
}

export interface Url {
  id: string;
  type: string;
  title: RichText[];
}

interface Files {
  type: string;
  files: { name: string; type: string; file?: { url: string }; external?: { url: string } }[];
}

export interface Description {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface Title {
  id: string;
  type: string;
  rich_text: RichText[];
}
