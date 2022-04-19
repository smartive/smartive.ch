import { Client } from '@notionhq/client';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { Button } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { usePlausible } from 'next-plausible';
import { PageHeader } from '../compositions/page-header';
import { Page } from '../layouts/page';
import { Section } from '../layouts/section';
import { PlausibleEvents } from '../utils/tracking';

type Props = {
  seeds: QueryDatabaseResponse['results'];
};

const Links: NextPage<Props> = ({ seeds }) => {
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <Page>
      <PageHeader markdownTitle="Links" metaOnly></PageHeader>
      <main>
        <Section>
          <div className="max-w-screen-sm mx-auto lg:px-4">
            {seeds.map((seed) => {
              if ('properties' in seed) {
                const title =
                  (seed.properties.title.type === 'formula' &&
                    seed.properties.title.formula.type === 'string' &&
                    seed.properties.title.formula.string) ||
                  '';

                const url =
                  (seed.properties.url.type === 'formula' &&
                    seed.properties.url.formula.type === 'string' &&
                    seed.properties.url.formula.string) ||
                  '';

                if (!title || !url) {
                  return;
                }

                return (
                  <div key={seed.id} className="mb-8">
                    <Button
                      width="full"
                      as="a"
                      href={url}
                      onClick={() => {
                        plausible('Link Click', {
                          props: {
                            currentUrl: window?.location.toString(),
                            targetUrl: url,
                            title: title,
                          },
                        });
                      }}
                    >
                      {title}
                    </Button>
                  </div>
                );
              }

              return null;
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

  const { results: seeds } = await notion.databases.query({
    database_id: process.env.NOTION_LOOMLY_DB_ID,
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  });

  return {
    props: {
      seeds,
    },
    revalidate: 60,
  };
};

export default Links;
