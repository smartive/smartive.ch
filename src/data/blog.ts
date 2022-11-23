import { Client } from '@notionhq/client';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import dayjs from 'dayjs';

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,
    filter: {
      and: [
        { property: 'State', status: { equals: 'Published' } },
        { property: 'Date', date: { on_or_before: dayjs().format('YYYY-MM-DD') } },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return results.map(
    (page: NotionBlog) =>
      ({
        id: page.id,
        title: page.properties.Title.title[0].text.content,
        abstract: page.properties.Abstract.rich_text,
        date: page.properties.Date.date.start,
        slug: page.properties.Slug.formula.string,
        cover: (page.cover?.file ?? page.cover?.external)?.url ?? null,
      } as BlogPost)
  );
};

export const getBlogPost = async (slug: string): Promise<BlogDetail> => {
  const notion = new Client({ auth: process.env.NOTION_TOKEN });
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,
    filter: { property: 'Slug', formula: { string: { equals: slug } } },
  });

  if (results.length !== 1) {
    throw new Error('not found or not unique');
  }

  const page = results[0] as NotionBlog;

  return {
    id: page.id,
    title: page.properties.Title.title[0].text.content,
    date: page.properties.Date.date?.start ?? null,
    slug: page.properties.Slug.formula.string,
    cover: (page.cover?.file ?? page.cover?.external)?.url ?? null,
    abstract: page.properties.Abstract.rich_text,
    avatar: page.properties.Creator.people[0].avatar_url,
    creator: page.properties.Creator.people[0].name,
    published: page.properties.State.status?.name === 'Published',
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NotionBlog = any;

export type BlogPost = {
  id: string;
  title: string;
  abstract: RichTextItemResponse[];
  slug: string;
  date: string;
  cover: string | null;
};

export type BlogDetail = BlogPost & {
  creator: string;
  avatar: string;
  published: boolean;
};
