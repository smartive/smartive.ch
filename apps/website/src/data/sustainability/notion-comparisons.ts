import { Client } from '@notionhq/client';

const NOTION_COMPARISON_DB_ID = '48ed782d8898499ea6afcfde982b0e1e';

export const getNotionComparisons = async (): Promise<ComparisonTexts> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_COMPARISON_DB_ID,
    filter: {
      and: [
        {
          property: 'EmissionenProEinheit',

          number: {
            is_not_empty: true,
          },
        },
        {
          property: 'Name',

          text: {
            is_not_empty: true,
          },
        },
      ],
    },
  });

  return (results as unknown as NotionComparisons[]).map(({ properties: { Name, EmissionenProEinheit, Emoji } }) => ({
    name: Name.title[0].plain_text,
    emissionPerUnit: EmissionenProEinheit.number,
    emoji: Emoji.rich_text[0].plain_text,
  }));
};

export type ComparisonTexts = {
  name: string;
  emissionPerUnit: number;
  emoji: string;
}[];

export interface NotionComparisons {
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

export interface EmissionenProEinheit {
  id: string;
  type: string;
  number: number;
}

export interface Properties {
  EmissionenProEinheit: EmissionenProEinheit;
  Name: Name;
  Emoji: Emoji;
}

export interface Emoji {
  id: string;
  type: string;
  rich_text: Rich_Text[];
}
export interface Rich_Text {
  id: string;
  type: string;
  plain_text: string;
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

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}
