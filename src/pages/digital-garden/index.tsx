import { Client } from '@notionhq/client';
import { GetPageResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { BrandColor, ContentCard, Grid, useSSRSafeRandomNumber } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { FC } from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { Block, getBlocks, getNotionClient } from '../../services/notion';
import { renderBlocks } from '../../utils/notion-block-renderers';

const DIGITAL_GARDEN_PAGE_ID = '264d5bf5cd9b4e63b07a05bd2422da78';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type Props = {
  page: GetPageResponse;
  blocks: Block[];
  seeds: QueryDatabaseResponse['results'];
};

const DigitalGarden: NextPage<Props> = ({ page, blocks, seeds }) => {
  const name =
    'properties' in page &&
    page.properties.title.type === 'title' &&
    page.properties.title?.title.reduce((acc, cur) => `${acc}${cur.plain_text}`, '');

  return (
    <Page>
      <PageHeader markdownTitle={name} />

      <main>
        {renderBlocks(blocks)}
        <Section>
          <Grid cols={3}>
            {seeds.map((seed) => {
              if ('properties' in seed) {
                const slug =
                  (seed.properties.Slug.type === 'rich_text' && seed.properties.Slug.rich_text[0]?.plain_text) || '';

                const title =
                  (seed.properties.Name.type === 'title' &&
                    seed.properties.Name.title.reduce((acc, cur) => `${acc}${cur.plain_text}`, '')) ||
                  '';

                return <SeedComponent key={seed.id} title={title} slug={slug} />;
              }

              return null;
            })}
          </Grid>
        </Section>
      </main>
    </Page>
  );
};

const SeedComponent: FC<{ title: string; slug: string }> = ({ title, slug }) => {
  const colors = ['cornflower', 'mint', 'apricot'] as BrandColor[];
  const colorIndex = useSSRSafeRandomNumber(0, colors.length - 1);

  return (
    <ContentCard
      title={title}
      link={{ label: 'Mehr dazu', href: `/digital-garden/${slug}` }}
      background={colors[colorIndex]}
    />
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { results: seeds } = await notion.databases.query({
    database_id: 'e08c1a01295a4e99a3a93c675e9c8789',
  });

  const page = await getNotionClient().pages.retrieve({ page_id: DIGITAL_GARDEN_PAGE_ID });
  const blocks = await getBlocks(DIGITAL_GARDEN_PAGE_ID);

  return {
    props: {
      page,
      blocks,
      seeds,
    },
    revalidate: 60,
  };
};

export default DigitalGarden;
