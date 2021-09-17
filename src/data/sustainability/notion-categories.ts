import { Client } from '@notionhq/client';
const NOTION_CATEGORIES_ID = '3d33b3eb884d46d7a600a8215523c2fb';

export const getNotionCategories = async (): Promise<Categories[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_CATEGORIES_ID,
  });

  return (results as unknown as NotionCategories[]).map(
    ({ properties: { Titel, Name, ghgCategoryNumber, Icon, Beschreibung } }) => ({
      environmentalImpact: 0,
      title: Titel.rich_text[0].plain_text,
      ghgCategory: Name.title[0].plain_text,
      ghgCategoryNumber: ghgCategoryNumber.number,
      icon: Icon.rich_text[0].plain_text,
      description: Beschreibung.rich_text[0].plain_text,
    })
  );
};

export type Categories = {
  title: string;
  icon: string;
  environmentalImpact: number;
  ghgCategory: string;
  ghgCategoryNumber: number;
  description: string;
};

export interface Properties {
  'Env Impact Scope': EnvImpactScope;
  Titel: Titel;
  ghgCategoryNumber: ghgCategoryNumber;
  Beschreibung: Beschreibung;
  'Env Impact GHG Categorie': EnvImpactGHGCategory;
  Icon: Icon;
  'Env Impact Total': EnvImpactTotal;
  Name: Name;
}

export interface NotionCategories {
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

export interface ghgCategoryNumber {
  type: string;
  number: number;
}

export interface Rollup {
  type: string;
  number: number;
}

export interface EnvImpactScope {
  id: string;
  type: string;
  rollup: Rollup;
}

export interface Titel {
  id: string;
  type: string;
  rich_text: Rich_Text[];
}

export interface Rich_Text {
  id: string;
  type: string;
  plain_text: string;
}

export interface Beschreibung {
  id: string;
  type: string;
  rich_text: Rich_Text[];
}

export interface Rollup2 {
  type: string;
  number: number;
}

export interface EnvImpactGHGCategory {
  id: string;
  type: string;
  rollup: Rollup2;
}

export interface Icon {
  id: string;
  type: string;
  rich_text: Rich_Text2[];
}
export interface Rich_Text2 {
  id: string;
  type: string;
  plain_text: string;
}

export interface Formula {
  type: string;
  number?: number;
}

export interface EnvImpactTotal {
  id: string;
  type: string;
  formula: Formula;
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
