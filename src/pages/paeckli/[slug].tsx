import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { request, gql } from 'graphql-request';
import { Page } from '../../layouts/page';
import { PageHeader, PageHeaderVariants } from '../../compositions/page-header';
import { BlobVariations } from '../../utils/blob-variations';
import { Label } from '../../elements/label';
import { Clock } from '../../identity/icons';
import { Copy } from '../../identity/copy';
import { Paecklis, Paecklis_paecklis } from '../../generated/Paecklis';
import { PaeckliSlugs } from '../../generated/PaeckliSlugs';
import { PageSection } from '../../compositions/page-section';
import { Heading2 } from '../../identity/heading-2';

type Props = {
  paeckli: Paecklis_paecklis;
};

const Paeckli: NextPage<Props> = ({ paeckli }) => {
  console.log(paeckli.content);
  return (
    <Page>
      <PageHeader
        markdownTitle={paeckli.title}
        description={paeckli.description}
        variant={PageHeaderVariants.Card}
        blobs={BlobVariations.cornflower[2]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />
          {paeckli.duration}
        </Label>
        <Copy>{paeckli.description}</Copy>
      </PageHeader>
      <main>
        <PageSection>
          {paeckli.content.map((content) => {
            if (content.__typename === 'ComponentGeneralText') {
              return (
                <>
                  <Heading2>{content.title}</Heading2>
                  <Copy>{content.content}</Copy>
                </>
              );
            }
            if (content.__typename === 'ComponentGeneralBubble') {
              return (
                <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
                  {content.text}
                </div>
              );
            }
          })}
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query PaeckliSlugs {
      paecklis {
        slug
      }
    }
  `;
  const { paecklis } = await request<PaeckliSlugs>('http://api.nmr.io:1337/graphql', query);

  return {
    paths: paecklis.map(({ slug }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params: { slug } }) => {
  const query = gql`
    query Paecklis($slug: String!) {
      paecklis(where: { slug: $slug }) {
        id
        title
        duration
        description
        content {
          __typename
          ... on ComponentGeneralText {
            id
            title
            content
            image {
              url
            }
          }
          ... on ComponentGeneralBubble {
            id
            text
          }
        }
      }
    }
  `;
  const { paecklis } = await request<Paecklis>('http://api.nmr.io:1337/graphql', query, { slug });

  return {
    props: {
      paeckli: paecklis[0],
    },
    revalidate: 300,
  };
};

export default Paeckli;
