import { getNotionClient } from '../services/notion';
import { getPlaceholder, ImageWithPlaceholder } from '../utils/image-placeholders';

const NOTION_WEBPROFILE_DB_ID = 'a128e46920e94bb48fc2baa77e6bf8c7';

export const getNotionEmployees = async (): Promise<Employee[]> => {
  const { results } = await getNotionClient().databases.query({
    database_id: NOTION_WEBPROFILE_DB_ID,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending',
      },
    ],
  });

  return Promise.all(
    (results as unknown as NotionEmployee[]).map(async (block) => {
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
        },
      } = block;

      const name = Name.title[0].plain_text.split(/\s+/);

      const mapped = {
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
        image: getNotionUrl(await getPlaceholder(PhotoMain.files[0].file.url || getFallbackImage()), block),
        closeup: getNotionUrl(await getPlaceholder(PhotoCloseup.files[0].file.url || getFallbackImage()), block),
        portrait: getNotionUrl(await getPlaceholder(PhotoPortrait.files[0].file.url || getFallbackImage()), block),
      };

      return mapped;
    })
  );
};

export const getNotionUrl = (image: ImageWithPlaceholder, block: NotionEmployee) => {
  const { src } = image;
  const table = 'block';

  const proxyUrl = `https://www.notion.so/image/${encodeURIComponent(src)}`;

  const url = new URL(proxyUrl);
  url.searchParams.set('table', table);
  url.searchParams.set('id', block.id);
  url.searchParams.set('cache', 'v2');

  return { ...image, src: url.toString() };
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
