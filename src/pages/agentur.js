import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';
import { Member, Stage } from '../components/molecules';
import { MediumTeaser } from '../components/organisms';
import { replaceCount } from '../utils/count';

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
    allMembersJson {
      edges {
        node {
          img {
            childImageSharp {
              fluid(maxWidth: 800, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          job
          name
          education
          description
          links {
            text
            url
          }
        }
      }
    }
    allStagesJson(filter: { siteTitle: { eq: "Agentur" } }) {
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

const Agency = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allMembersJson, allMediumPost }) => {
      const { siteTitle, siteDescription, imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const members = allMembersJson.edges;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Stage
            modifiers={['gradient', 'right-highlighted']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            {contentBlocks.map(({ id, value }) => (
              <p key={id}>{replaceCount(value, members.length)}</p>
            ))}
          </Stage>

          <div className="container">
            <div className="row">
              {members.map(({ node }) => (
                <Member
                  key={node.name}
                  name={node.name}
                  job={node.job}
                  image={{
                    fluid: node.img.childImageSharp.fluid,
                    alt: node.name,
                  }}
                  education={node.education}
                  links={node.links}
                >
                  <p dangerouslySetInnerHTML={{ __html: node.description }} />
                </Member>
              ))}
            </div>
          </div>

          <MediumTeaser posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default Agency;
