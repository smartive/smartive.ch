import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { LinkButton } from '../components/atoms';
import { DefaultLayout } from '../components/layout';
import { Stage } from '../components/molecules';

const pageQuery = graphql`
  {
    allStagesJson(filter: { siteTitle: { eq: "Einweihung" } }) {
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

const Einweihung = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson }) => {
      const { imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;

      return (
        <DefaultLayout>
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
                <p key={id} dangerouslySetInnerHTML={{ __html: value }} />
              ))}
              <LinkButton url="https://forms.gle/Xh9bnNjcLJeTmUEC9" text="Zum Einweihungs-Apéro anmelden" isPrimary />
            </div>
          </Stage>
        </DefaultLayout>
      );
    }}
  />
);

export default Einweihung;
