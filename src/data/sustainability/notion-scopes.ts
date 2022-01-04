import { Client } from '@notionhq/client';

const NOTION_SCOPES_ID = 'def848ab84484cf3b1fa79610d046632';

export const getNotionScopes = async (): Promise<Scopes[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_SCOPES_ID,
  });

  return (results as unknown as NotionScopes[]).map(({ properties: { Titel, Name, Beschreibung } }) => ({
    title: Titel.rich_text[0].plain_text,
    environmentalImpact: 0,
    ghgCategory: Name.title[0].plain_text,
    description: Beschreibung.rich_text[0].plain_text,
  }));
};

export type Scopes = {
  title: string;
  environmentalImpact: number;
  ghgCategory: string;
  description: string;
};

export interface Properties {
  Titel: Titel;
  Beschreibung: Beschreibung;
  Label: Label;
  Name: Name;
}

export interface NotionScopes {
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

export interface EnvImpactGHGCategorie {
  id: string;
  type: string;
  rollup: Rollup2;
}

export interface Label {
  id: string;
  type: string;
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
