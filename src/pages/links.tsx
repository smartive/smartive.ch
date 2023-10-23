import { Client } from '@notionhq/client';
import { Button } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { usePlausible } from 'next-plausible';
import { Page } from '../../components/layouts/page';
import { Section } from '../../components/layouts/section';
import { PlausibleEvents } from '../../utils/tracking';
import { PageHeader } from '../compositions/page-header';

type Seed = {
  url: string;
  title: string;
  id: string;
};

type Props = {
  seeds: Seed[];
};

const Links: NextPage<Props> = ({ seeds }) => {
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <Page>
      <PageHeader markdownTitle="Links" metaOnly></PageHeader>
      <main>
        <Section>
          <div className="mx-auto max-w-screen-sm lg:px-4">
            {seeds.map(({ url, title, id }) => {
              return (
                <div key={id} className="mb-8">
                  <Button
                    width="full"
                    as="a"
                    href={url}
                    onClick={() => {
                      plausible('Link Click', {
                        props: {
                          currentUrl: window?.location.toString(),
                          targetUrl: url,
                          title,
                        },
                      });
                    }}
                  >
                    {title}
                  </Button>
                </div>
              );
            })}
          </div>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_LOOMLY_DB_ID || '',
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  });

  const seeds = results
    .map((seed) => {
      if (!('properties' in seed)) {
        return null;
      }

      const { title, url } = seed.properties;

      if (!title || !url) {
        return null;
      }

      const getValue = (value: typeof url) => {
        if (value?.type === 'formula' && 'type' in value.formula) {
          return value.formula?.type === 'string' && value.formula.string;
        }

        return '';
      };

      return {
        id: seed.id,
        title: getValue(title),
        url: getValue(url),
      };
    })
    .filter(Boolean) as Seed[];

  return {
    props: {
      seeds,
    },
    revalidate: 60,
  };
};

export default Links;
