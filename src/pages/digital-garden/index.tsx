import { Client } from '@notionhq/client';
import { GetPageResponse, ListBlockChildrenResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { BrandColor, ContentCard, Grid } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getBlocks, getNotionClient } from '../../services/notion';
import { getLexer } from '../../utils/notion';
import { blockRenderers } from '../../utils/notion-block-renderers';

const DIGITAL_GARDEN_PAGE_ID = '264d5bf5cd9b4e63b07a05bd2422da78';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type Props = {
  page: GetPageResponse;
  blocks: ListBlockChildrenResponse['results'];
  seeds: QueryDatabaseResponse['results'];
};

const DigitalGarden: NextPage<Props> = ({ page, blocks, seeds }) => {
  const name =
    'properties' in page &&
    page.properties.title.type === 'title' &&
    page.properties.title?.title.reduce((acc, cur) => `${acc}${cur.plain_text}`, '');

  const iterator = blocks[Symbol.iterator]();
  const { lex } = getLexer(iterator);
  const parsedBlocks = lex();

  return (
    <Page>
      <PageHeader markdownTitle={name} />

      <main>
        {parsedBlocks.map((block) =>
          'type' in block && blockRenderers[block.type] ? blockRenderers[block.type](block) : null
        )}
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
                const colors = ['cornflower', 'mint', 'apricot'] as BrandColor[];
                const color = colors[Math.floor(Math.random() * colors.length)];

                return (
                  <Fragment key={seed.id}>
                    <ContentCard
                      title={title}
                      link={{ label: 'Mehr dazu', href: `/digital-garden/${slug}` }}
                      background={color}
                    />
                  </Fragment>
                );
              }

              return null;
            })}
          </Grid>
        </Section>
      </main>
    </Page>
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
