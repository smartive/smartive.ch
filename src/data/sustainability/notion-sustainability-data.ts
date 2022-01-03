import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

type Filter = Extract<QueryDatabaseParameters, { type: 'filter' }>;

const NOTION_SUSTAINABILITY_DB_ID = '3e8b4f5b342f49b7a79ab2981255864d';

export const getNotionSustainabilityData = async (year?: number): Promise<SustainabilityData[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_SUSTAINABILITY_DB_ID,
    filter: {
      and: [
        {
          property: 'Jahr',
          number: {
            is_not_empty: true,
          },
        },
        {
          property: 'WelcherScope',
          relation: {
            is_not_empty: true,
          },
        },
        year !== undefined && {
          property: 'Jahr',
          number: {
            equals: year,
          },
        },
      ].filter(Boolean) as Filter[],
    },
  });

  return (results as unknown as NotionSustainabilityData[]).map(
    ({ id, properties: { Name, Scope, Jahr, Einheit, Kategorie, Umweltauswirkung } }) => {
      return {
        id,
        year: Jahr.number,
        typeOfProd: Name.title[0].plain_text,
        scope: Scope.rollup.array[0].title[0].plain_text,
        environmentalImpact: Umweltauswirkung.formula.number,
        unit: Einheit.rich_text[0] ? Einheit.rich_text[0].plain_text : null,
        category: Kategorie.rollup.array[0] ? Kategorie.rollup.array[0].title[0].plain_text : null,
      };
    }
  );
};

export type SustainabilityData = {
  typeOfProd: string;
  unit: string;
  scope: string;
  category: string;
  year: number;
  id: string;
  environmentalImpact: number;
};

export interface NotionSustainabilityData {
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

export interface Einheit {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface Kommentar {
  id: string;
  type: string;
}

export interface Text2 {
  content: string;
}

export interface Formula {
  type: string;
  number: number;
}

export interface Umweltauswirkung {
  id: string;
  type: string;
  formula: Formula;
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

export interface Jahr {
  type: string;
  number: number;
}

export interface Text3 {
  content: string;
}

export interface Annotations3 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Title {
  type: string;
  text: Text3;
  annotations: Annotations3;
  plain_text: string;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface Scope {
  id: string;
  type: string;
  rollup: Rollup;
}

export interface WelcherScope {
  type: string;
  relation: Relation[];
}
export interface Relation {
  id: string;
}

export interface Properties {
  Einheit: Einheit;
  Umweltauswirkung: Umweltauswirkung;
  Scope: Scope;
  Kategorie: Kategorie;
  WelcherScope: WelcherScope;
  Jahr: Jahr;
  Name: Name;
}
