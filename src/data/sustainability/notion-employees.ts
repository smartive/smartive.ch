import { Client } from '@notionhq/client';
import { getDistanceFromGoogleMaps, WEEKS_PER_YEAR } from '../../utils/sustainability';

const NOTION_EMPLOYEE_DB_ID = '7c40115e5a974b6db68e607a94b3a6ee';

export const getNotionEmployees = async (year: number): Promise<AllEmployees[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: NOTION_EMPLOYEE_DB_ID,
    filter: {
      and: [
        {
          or: [
            {
              property: 'Status',
              select: {
                equals: 'Completed ✓',
              },
            },
            {
              property: 'Status',
              select: {
                equals: 'Terminated',
              },
            },
          ],
        },
        {
          and: [
            {
              property: 'Start',

              date: {
                on_or_before: `${year.toString()}-01-01`,
              },
            },
            {
              property: 'EndDate',
              date: {
                after: `${year.toString()}-12-31`,
              },
            },
          ],
        },
        {
          property: 'Transportmittel',
          relation: {
            is_not_empty: true,
          },
        },
        {
          property: 'HomeofficeTage',
          number: {
            is_not_empty: true,
          },
        },
        {
          property: 'OfficeTage',
          number: {
            is_not_empty: true,
          },
        },
      ],
    },
  });
  return Promise.all(
    (results as unknown as NotionEmployee[]).map(
      async ({ id, properties: { Ort, Name, Strasse, OfficeTage, EnvImpactHomeOffice, Emissionsfaktor, Kategorie } }) => {
        const distanceToOffice = await getDistanceFromGoogleMaps(
          `${Ort.rich_text[0].plain_text},${Strasse.rich_text[0].plain_text}`
        );
        const officeDays = OfficeTage.number;
        const envImpactHomeOffice = EnvImpactHomeOffice.formula.number;
        const emissionsfactor = Emissionsfaktor.rollup.array[0].number;

        return {
          id,
          distanceToOffice,
          scope: 'Scope 3',
          name: Name.title[0].plain_text,
          category: Kategorie.rollup.array[0].title[0].plain_text,
          environmentalImpact: distanceToOffice * 2 * emissionsfactor * officeDays * WEEKS_PER_YEAR + envImpactHomeOffice,
        };
      }
    )
  );
};

export type AllEmployees = {
  name: string;
  id: string;
  category: string;
  scope: string;
  distanceToOffice: number;
  environmentalImpact: number;
};

export interface Properties {
  Type: Type;
  Postleitzahl: Postleitzahl;
  Start: Start;
  Updated: Updated;
  Ort: Ort;
  Strasse: Strasse;
  Status: Status;
  Name: Name;
  OfficeTage: OfficeTage;
  EndDate: EndDate;
  Kategorie: Kategorie;
  Emissionsfaktor: Emissionsfaktor;
  EnvImpactHomeOffice: EnvImpactHomeOffice;
}

export interface NotionEmployee {
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

export interface Kategorie {
  id: string;
  type: string;
  rollup: Rollup2;
}

export interface Rollup2 {
  type: string;
  array: Array2[];
}

export interface Array2 {
  type: string;
  title: Title2[];
}

export interface Title2 {
  type: string;
  text: Text;
  plain_text: string;
}

export interface Formula {
  type: string;
  number: number;
}

export interface EnvImpactHomeOffice {
  id: string;
  type: string;
  formula: Formula;
}

export interface Array {
  type: string;
  number: number;
}

export interface Rollup {
  type: string;
  array: Array[];
}

export interface Emissionsfaktor {
  id: string;
  type: string;
  rollup: Rollup;
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

export interface Postleitzahl {
  id: string;
  type: string;
  number: number;
}

export interface Date {
  start: string;
}

export interface Start {
  id: string;
  type: string;
  date: Date;
}

export interface EndDate {
  id: string;
  type: string;
  date: Date;
}

export interface Updated {
  id: string;
  type: string;
  last_edited_time: Date;
}

export interface Text {
  content: string;
}

export interface RichText {
  type: string;
  text: Text;
  plain_text: string;
}

export interface Ort {
  id: string;
  type: string;
  rich_text: RichText[];
}

export interface Text2 {
  content: string;
}

export interface RichText2 {
  type: string;
  text: Text2;
  plain_text: string;
}

export interface Strasse {
  id: string;
  type: string;
  rich_text: RichText2[];
}

export interface Select2 {
  id: string;
  name: string;
  color: string;
}

export interface Status {
  id: string;
  type: string;
  select: Select2;
}

export interface Text3 {
  content: string;
}

export interface Title {
  type: string;
  text: Text3;
  plain_text: string;
}

export interface Name {
  id: string;
  type: string;
  title: Title[];
}

export interface OfficeTage {
  id: string;
  type: string;
  number: number;
}
