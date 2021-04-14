import GhostContentAPI from '@tryghost/content-api';
import { GetStaticProps, NextPage } from 'next';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { Page } from '../../layouts/page';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://smartive.ghost.io',
  key: 'bf5cd3f6a2b60d8bd2b5ad3173',
  version: 'v3',
});

export const Post: NextPage<any> = ({ post }) => (
  <Page>
    <PageHeader markdownTitle={post.title} />

    <PageSection>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PageSection>
  </Page>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug?.toString();
  const post = await api.posts.read({ slug });

  return {
    props: { post },
  };
};

export async function getStaticPaths() {
  const posts = await api.posts.browse();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: true,
  };
}

export default Post;
