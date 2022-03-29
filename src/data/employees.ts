import { getNotionClient } from '../services/notion';
import { getPlaceholder, ImageWithPlaceholder } from '../utils/image-placeholders';

const NOTION_EMPLOYEE_DB_ID = '7c40115e5a974b6db68e607a94b3a6ee';

export const getNotionEmployees = async (): Promise<Employee[]> => {
  const { results } = await getNotionClient().databases.query({
    database_id: NOTION_EMPLOYEE_DB_ID,
    filter: {
      property: 'Status',
      select: {
        equals: 'Completed ✓',
      },
    },
    sorts: [
      {
        property: 'Name',
        direction: 'ascending',
      },
    ],
  });
  return Promise.all(
    (results as unknown as NotionEmployee[]).map(
      async ({
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
        },
      }) => {
        const name = Name.title[0].plain_text.split(/\s+/);
        return {
          id,
          name: Name.title[0].plain_text,
          firstname: name[0],
          lastname: name.pop(),
          job: Jobbezeichnung.rich_text[0].plain_text,
          bio: Summary.rich_text[0].plain_text,
          email: Mail.email,
          tel: Telefon.phone_number,
          booking: Booking.url,
          github: GitHub.url,
          linkedin: LinkedIn.url,
          twitter: Twitter.url,
          image: await getPlaceholder(PhotoMain.files[0].file.url || getFallbackImage()),
          closeup: await getPlaceholder(PhotoCloseup.files[0].file.url || getFallbackImage()),
          portrait: await getPlaceholder(PhotoPortrait.files[0].file.url || getFallbackImage()),
        };
      }
    )
  );
};

export type Employee = {
  name: string;
  firstname: string;
  lastname: string;
  job: string;
  bio: string;
  email: string;
  tel: string;
  booking: string;
  github: string;
  linkedin: string;
  twitter: string;
  image: ImageWithPlaceholder;
  closeup: ImageWithPlaceholder;
  portrait: ImageWithPlaceholder;
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

export const transformEmployee = async (employee): Promise<Employee> => ({
  ...employee,
  image: await getPlaceholder(employee.image || getFallbackImage()),
  portrait: await getPlaceholder(employee.portrait || getFallbackImage()),
  closeup: await getPlaceholder(employee.closeup || getFallbackImage()),
});

const getFallbackImage = () =>
  `/images/portrait-fallback-${['apricot', 'mint', 'cornflower'][Math.floor(Math.random() * 3)]}.svg`;
