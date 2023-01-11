import { UrlPropertyItemObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { getNotionClient } from '../services/notion';

const NOTION_WEBPROFILE_DB_ID = 'a128e46920e94bb48fc2baa77e6bf8c7';
const NOTION_EMPLOYEES_DB_ID = '7c40115e5a974b6db68e607a94b3a6ee';

export const getEmployeeByName = async (name: string): Promise<Employee> => {
  const {
    results: [result],
  } = await getNotionClient().databases.query({
    database_id: NOTION_WEBPROFILE_DB_ID,
    filter: {
      property: 'Name',
      title: {
        equals: name,
      },
    },
  });

  if (!result) {
    throw new Error(`Employee with name "${name}" not found.`);
  }

  return mapBlockToEmployee(result as unknown as NotionEmployee);
};

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const result = await getNotionClient().pages.retrieve({
    page_id: id,
  });

  if (!result) {
    throw new Error(`Employee with id "${id}" not found.`);
  }

  return mapBlockToEmployee(result as unknown as NotionEmployee);
};

export const getAllEmployees = async (): Promise<Employee[]> => {
  const { results } = await getNotionClient().databases.query({
    database_id: NOTION_WEBPROFILE_DB_ID,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Status',
          rollup: {
            any: {
              select: {
                equals: 'Completed ✓',
              },
            },
          },
        },
      ],
    },
  });

  return (results as unknown as NotionEmployee[]).map(mapBlockToEmployee);
};

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
    properties: { Name, Todos, Mail },
  } = block;

  const name = Name.title[0].plain_text.split(/\s+/);

  const mapped = {
    id,
    name: Name.title[0].plain_text,
    email: Mail.email,
    firstname: name[0],
    lastname: name.pop(),
    todosUrl: Todos.url,
  };

  return mapped;
};

const mapBlockToEmployee = (block: NotionEmployee): Employee => {
  const {
    id,
    properties: {
      Name,
      Jobbezeichnung,
      Summary,
      Mail,
      GitHub,
      LinkedIn,
      Twitter,
      PhotoPortrait,
      PhotoCloseup,
      PhotoMain,
      Telefon,
      Booking,
      Start,
    },
  } = block;

  const name = Name.title[0].plain_text.split(/\s+/);

  const mapped = {
    id,
    name: Name.title[0].plain_text,
    firstname: name[0],
    lastname: name.pop(),
    job: Jobbezeichnung.rich_text[0]?.plain_text || '',
    bio: Summary.rich_text[0]?.plain_text || '',
    email: Mail.email,
    tel: Telefon.phone_number,
    booking: Booking.url,
    github: GitHub.url,
    linkedin: LinkedIn.url,
    twitter: Twitter.url,
    image: PhotoMain.files.length > 0 ? getNotionUrl(PhotoMain.files[0].file.url, block) : '',
    closeup: PhotoCloseup.files.length > 0 ? getNotionUrl(PhotoCloseup.files[0].file.url, block) : '',
    portrait: PhotoPortrait.files.length > 0 ? getNotionUrl(PhotoPortrait.files[0].file.url, block) : '',
    start: Start.number,
  };

  return mapped;
};

export const getNotionUrl = (image: string, block: NotionEmployee) => {
  const table = 'block';

  const proxyUrl = `https://www.notion.so/image/${encodeURIComponent(image)}`;

  const url = new URL(proxyUrl);
  url.searchParams.set('table', table);
  url.searchParams.set('id', block.id);
  url.searchParams.set('cache', 'v2');

  return url.toString();
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
  twitter?: string;
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
};

interface Properties {
  Name: Name;
  Jobbezeichnung: RichText;
  Summary: RichText;
  Mail: Mail;
  Telefon: Phone;
  GitHub: URL;
  LinkedIn: URL;
  Twitter: URL;
  Booking: URL;
  PhotoMain: Files;
  PhotoCloseup: Files;
  PhotoPortrait: Files;
  Start: NotionNumber;
}

interface NotionEmployee {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

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
  };
  url: string;
}

interface Parent {
  type: string;
  database_id: string;
}

interface RichText {
  id: string;
  type: string;
  rich_text: { type: string; text: { content: string }; plain_text: string }[];
}

interface Mail {
  type: string;
  email: string;
}

interface Phone {
  type: string;
  phone_number: string;
}

interface Files {
  type: string;
  files: { name: string; type: string; file: { url: string } }[];
}

interface URL {
  type: string;
  url: string;
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

interface NotionNumber {
  type: string;
  number: number;
}
