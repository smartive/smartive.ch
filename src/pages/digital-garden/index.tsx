import { Client } from '@notionhq/client';
import { Copy, Heading2, TextLink } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type Props = {
  seeds: any[];
};
const DigitalGarden: NextPage<Props> = ({ seeds }) => {
  return (
    <Page>
      <PageHeader markdownTitle="Digital Garden" description="Was ist das">
        <Copy>yolo</Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Liste</Heading2>
          <ul>
            {seeds.map((seed) => {
              const slug = seed.properties.Slug.rich_text[0]?.text.content;

              return (
                <li key={seed.id}>
                  <Link href={`/digital-garden/${slug}`} passHref>
                    <TextLink>
                      {seed.properties.Name.title[0]?.text.content} ({slug})
                    </TextLink>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await notion.databases.query({
    database_id: 'e08c1a01295a4e99a3a93c675e9c8789',
  });

  return {
    props: {
      seeds: response.results,
    },
    revalidate: 60,
  };
};

export default DigitalGarden;
