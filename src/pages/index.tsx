import { GetStaticProps, NextPage } from 'next';
import { PrismicPage } from '../compositions/prismic-page';
import { Page } from '../layouts/page';
import { getPrismicClient, PRISMIC_PAGE_QUERY } from '../services/prismic';
import { PageBodyPage_Header, PrismicPageQuery, PrismicPageQueryVariables } from '../types/generated/prismic';

type Props = {
  data: PrismicPageQuery;
};

const Home: NextPage<Props> = ({ data }) => {
  const blocks = data?.page?.body || [];
  const pageHeader = blocks.find(({ __typename }) => __typename === 'PageBodyPage_header') as PageBodyPage_Header;

  return (
    <Page>
      <PrismicPage header={pageHeader} blocks={blocks} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = await getPrismicClient();
  const data = await client.request<PrismicPageQuery, PrismicPageQueryVariables>(PRISMIC_PAGE_QUERY, {
    uid: 'landing-page',
  });

  return {
    props: {
      data,
    },
  };
};

export default Home;
