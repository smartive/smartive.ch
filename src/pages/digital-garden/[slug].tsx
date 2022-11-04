import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';
import { Block, getBlocks, getNotionClient } from '../../services/notion';
import { renderContent } from '../../utils/notion-block-renderers';

type Props = { blocks: Block[] };

export const SeedPage: NextPage<Props> = ({ blocks = [] }) => {
  return (
    <Page>
      <PageHeader markdownTitle={'TODO'} />

      <main>{renderContent(blocks)}</main>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getNotionClient().databases.query({
    database_id: 'e08c1a01295a4e99a3a93c675e9c8789',
  });
  const { results } = response;
  const paths = results
    .map((page) => {
      if ('properties' in page && page.properties.Slug?.type === 'rich_text') {
        const richTextItem = page.properties.Slug?.rich_text[0];

        if (richTextItem && 'text' in richTextItem) {
          return { params: { slug: richTextItem.text.content } };
        }
      }
      return null;
    })
    .filter(Boolean);

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await getNotionClient().databases.query({
    database_id: 'e08c1a01295a4e99a3a93c675e9c8789',
    filter: {
      property: 'Slug',
      rich_text: {
        equals: params.slug.toString(),
      },
    },
  });

  const [entry] = response.results;

  const blocks = await getBlocks(entry.id);

  return {
    props: {
      blocks,
    },
    revalidate: 60,
  };
};

export default SeedPage;
