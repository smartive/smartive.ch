import { Client } from '@notionhq/client';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

type Filter = Extract<QueryDatabaseParameters, { type: 'filter' }>;

const NOTION_EXPENSES_ID = 'dc4e4aa586be4caeb29d1222042a70f1';

export const getNotionExpenses = async (year?: number): Promise<Expenses[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_EXPENSES_ID,
    filter: {
      and: [
        {
          property: 'Preis',
          number: {
            does_not_equal: 0,
          },
        },
        year !== undefined && {
          property: 'Jahr',
          number: {
            equals: year,
          },
        },
        {
          property: 'WelcheKategorie',
          relation: {
            is_not_empty: true,
          },
        },
      ].filter(Boolean) as Filter[],
    },
  });

  return (results as unknown as NotionExpenses[]).map(
    ({ properties: { Preis, Einheit, Art, Jahr, EnvironmentalImpact, Kategorie } }) => ({
      scope: 'Scope 3',
      year: Jahr.number,
      price: Preis.number,
      type: Art.select.name,
      unit: Einheit.rich_text[0].plain_text,
      environmentalImpact: EnvironmentalImpact.formula.number,
      category: Kategorie.rollup.array[0].title[0].plain_text,
    })
  );
};

export type Expenses = {
  price: number;
  unit: string;
  type: string;
  year: number;
  category: string;
  scope: string;
  environmentalImpact: number;
};

export interface NotionExpenses {
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

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface Type {
  id: string;
  type: string;
  select: Select;
}

export interface Select2 {
  id: string;
  name: string;
  color: string;
}

export interface Jahr {
  id: string;
  type: string;
  number: number;
}

export interface Preis {
  id: string;
  type: string;
  number: number;
}

export interface Einheit {
  id: string;
  type: string;
  rich_text: RichText3[];
}

export interface Text2 {
  content: string;
}

export interface Annotations2 {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface RichText2 {
  type: string;
  text: Text2;
  annotations: Annotations2;
  plain_text: string;
}

export interface RichText3 {
  type: string;
  text: Text2;
  annotations: Annotations4;
  plain_text: string;
}

export interface Name {
  id: string;
  type: string;
  rich_text: RichText2[];
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

export interface Annotations4 {
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

export interface Konto {
  id: string;
  type: string;
  title: Title[];
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
  title: Title2[];
}

export interface Title2 {
  type: string;
  text: Text;
  plain_text: string;
}

export interface WelcheKategorie {
  type: string;
  relation: Relation[];
}
export interface Relation {
  id: string;
}

export interface Properties {
  Art: Type;
  Jahr: Jahr;
  Preis: Preis;
  Einheit: Einheit;
  Name: Name;
  Konto: Konto;
  Kategorie: Kategorie;
  WelcheKategorie: WelcheKategorie;
  EnvironmentalImpact: EnvironmentalImpact;
}
