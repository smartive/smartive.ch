import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC } from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Copy } from '../../identity/copy';
import { LandingPage } from '../../layouts/landing-page';

const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: '75yg3lco',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'sku3iDuZbwdtUfUzYHm9yUY5LilwJTxYHDRQDHSrP07FyzytDCTCwdsLT737ZT84zZizRfJ0gJH0doX4SXNmkvXjvqvPXGcLNIsxn10mlI0X2wNlOAN7eiMYFDVcQvU75ueqpf8VdVTk7SRAAiCcNwdr8IVXU7iKJFYvVygPwUMjxLK6fchh', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const Brand: FC = ({ post }: any) => (
  <LandingPage>
    <PageHeader markdownTitle="_sanity_ stuff" />
    <Copy>{post.title}</Copy>
    <Copy>{post.slug.current}</Copy>
  </LandingPage>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const posts = await client.fetch(`*[_type == "post" && language=="de" && slug.current ==  "${id}"]`);

  if (posts.length === 1) {
    return {
      props: {
        post: posts[0],
      },
      revalidate: 1,
    };
  } else {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths:
      // [] ||
      (await client.fetch(`*[_type == "post" && language=="de"]{slug}`)).map((p) => {
        return { params: { id: p.slug.current } };
      }),
    fallback: 'blocking',
  };
};

export default Brand;
