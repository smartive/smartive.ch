import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';
import { Map, Stage } from '../components/molecules';

const pageQuery = graphql`
  {
    allStagesJson(filter: { siteTitle: { eq: "Kontakt" } }) {
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
              fluid(maxWidth: 800) {
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

const Contact = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson }) => {
      const { siteTitle, siteDescription, imageSrc, imageAlt, contentBlocks } = allStagesJson.edges[0].node;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Stage
            modifiers={['left-highlighted', 'contact', 'gradient']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
          >
            <h1>
              {contentBlocks.map(({ id, value }) => (
                <p key={id} dangerouslySetInnerHTML={{ __html: value }} />
              ))}
            </h1>
          </Stage>
          <Map />
        </DefaultLayout>
      );
    }}
  />
);

export default Contact;
