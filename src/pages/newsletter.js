import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';
import { Stage, NewsletterSignup } from '../components/molecules';
import { MediumTeaser } from '../components/organisms';

const pageQuery = graphql`
  {
    allMediumPost(limit: 2, sort: { fields: [firstPublishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          uniqueSlug
          author {
            name
          }
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
    allStagesJson(filter: { siteTitle: { eq: "Newsletter" } }) {
      edges {
        node {
          id
          siteTitle
          siteDescription
          title
          contentBlocks {
            id
            value
          }
          imageSrc {
            childImageSharp {
              fluid(maxWidth: 800, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          imageAlt
        }
      }
    }
  }
`;

const Newsletter = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allMediumPost }) => {
      const { siteTitle, siteDescription, imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Stage
            modifiers={['landing-page', 'left-highlighted']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            <div>
              {contentBlocks.map(({ id, value }) => (
                <p key={id}>{value}</p>
              ))}
              <NewsletterSignup outline />
            </div>
          </Stage>

          <MediumTeaser posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default Newsletter;
