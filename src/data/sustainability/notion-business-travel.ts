import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

const NOTION_BUSINESS_TRAVEL_DB_ID = 'f5599a5e52ab413f9617737906bca81b';

type Filter = Extract<QueryDatabaseParameters, { type: 'filter' }>;

export const getNotionBusinessTravel = async (year?: number): Promise<BusinessTravels[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_BUSINESS_TRAVEL_DB_ID,
    filter: {
      and: [
        year !== undefined && {
          property: 'Year',
          number: {
            equals: year,
          },
        },
      ].filter(Boolean) as Filter[],
    },
  });

  return (results as unknown as NotionBusinessTravel[]).map(({ properties: { EnvironmentalImpact, Year, Kategorie } }) => ({
    scope: 'Scope 3',
    year: Year.number,
    environmentalImpact: EnvironmentalImpact.formula.number,
    category: Kategorie.rollup.array[0].title[0].plain_text,
  }));
};

export type BusinessTravels = {
  year: number;
  environmentalImpact: number;
  category: string;
  scope: string;
};

export interface NotionBusinessTravel {
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

export interface EnvironmentalImpact {
  id: string;
  type: string;
  formula: Formula;
}

export interface Formula {
  type: string;
  number: number;
}

export interface Year {
  id: string;
  type: string;
  number: number;
}

export interface Kategorie {
  id: string;
  type: string;
  rollup: Rollup;
}

export interface Rollup {
  type: string;
  array: Array[];
}

export interface Array {
  type: string;
  title: Title[];
}

export interface Title {
  type: string;
  text: Text;
  annotations: Annotations;
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

export interface Properties {
  Year: Year;
  EnvironmentalImpact: EnvironmentalImpact;
  Kategorie: Kategorie;
}
