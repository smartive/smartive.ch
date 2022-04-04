import { gql, GraphQLClient } from 'graphql-request';

let prismicClient: GraphQLClient | null = null;

export const getPrismicClient = async () => {
  if (!prismicClient) {
    // Prismic uses so called prismic refs for content versioning and idiotically requires us to provide a ref
    // which forces us to first request the current ref from their api to get the most current content
    const versionResponse = await (
      await fetch('https://smartive.cdn.prismic.io/api/v2', {
        headers: { Authorization: `Token ${process.env.PRISMIC_TOKEN}` },
      })
    ).json();

    const currentRef = versionResponse.refs?.find((ref) => ref.id === 'master')?.ref || '';

    prismicClient = new GraphQLClient('https://smartive.cdn.prismic.io/graphql', {
      method: 'GET',
      headers: { Authorization: `Token ${process.env.PRISMIC_TOKEN}`, 'prismic-ref': currentRef },
      jsonSerializer: { stringify: JSON.stringify, parse: JSON.parse },
    });
  }

  return prismicClient;
};

export const PRISMIC_PAGE_QUERY = gql`
  query PrismicPage($uid: String!) {
    page(uid: $uid, lang: "de-CH") {
      body {
        __typename
        ... on PageBodyPage_header {
          primary {
            title
            intro
          }
          fields {
            linklabel
            link
          }
        }
        ... on PageBodyHero_image {
          primary {
            image
          }
        }
        ... on PageBodyTestimonial {
          primary {
            quote
            credit
            portrait
          }
        }
        ... on PageBodyCards {
          primary {
            title
            description
          }
          fields {
            image
            title
            label
            description
            link
            linklabel
            background
          }
        }
        ... on PageBodyContact {
          primary {
            portrait
            text
            email
            phone
          }
        }
        ... on PageBodyCustomer_logos {
          primary {
            title
          }
          fields {
            logo
          }
        }
        ... on PageBodyNewsletter {
          primary {
            title
          }
        }
      }
    }
  }
`;
