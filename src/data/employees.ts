import { UrlPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { getNotionClient } from '../services/notion';

const NOTION_EMPLOYEES_DB_ID = '7c40115e5a974b6db68e607a94b3a6ee';

export const getFullEmployeeByMail = async (mail: string): Promise<FullEmployee> => {
  const {
    results: [result],
  } = await getNotionClient().databases.query({
    database_id: NOTION_EMPLOYEES_DB_ID,
    filter: {
      property: 'Mail',
      title: {
        equals: mail,
      },
    },
  });

  if (!result) {
    throw new Error(`Employee with mail "${mail}" not found.`);
  }

  return mapBlockToFullEmployee(result as unknown as NotionFullEmployee);
};

export const getAllFullEmployees = async (): Promise<FullEmployee[]> => {
  const { results } = await getNotionClient().databases.query({
    database_id: NOTION_EMPLOYEES_DB_ID,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending',
      },
    ],
    filter: {
      property: 'Status',
      select: { equals: 'Completed ✓' },
    },
  });

  return (results as unknown as NotionFullEmployee[]).map(mapBlockToFullEmployee);
};

const mapBlockToFullEmployee = (block: NotionFullEmployee): FullEmployee => {
  const {
    id,
    properties: { Name, Todos, Mail, AktionärIn },
  } = block;

  const name = Name.title[0].plain_text.split(/\s+/);

  const mapped = {
    id,
    name: Name.title[0].plain_text,
    email: Mail.email,
    firstname: name[0],
    lastname: name.pop() ?? '',
    todosUrl: Todos.url ?? '',
    shareholder: AktionärIn.checkbox,
  };

  return mapped;
};

export type Employee = {
  name?: string;
  firstname: string;
  lastname: string;
  job: string;
  bio: string;
  email: string;
  tel: string;
  booking: string;
  github?: string;
  linkedin?: string;
  image: string;
  closeup: string;
  portrait: string;
  start: number;
};

export type FullEmployee = {
  name?: string;
  firstname: string;
  lastname: string;
  email: string;
  todosUrl: string;
  shareholder: boolean;
};

interface NotionFullEmployee {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  parent: Parent;
  archived: boolean;
  properties: {
    Name: Name;
    Mail: Mail;
    Todos: UrlPropertyItemObjectResponse;
    AktionärIn: Checkbox;
  };
  url: string;
}

interface Parent {
  type: string;
  database_id: string;
}

interface Mail {
  type: string;
  email: string;
}

interface Title {
  type: string;
  text: { content: string };
  plain_text: string;
}

interface Name {
  id: string;
  type: string;
  title: Title[];
}

interface Checkbox {
  id: string;
  type: 'checkbox';
  checkbox: boolean;
}
