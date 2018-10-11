import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { CaseTeaser, Project, Stage } from '../components/molecules';
import { DefaultLayout } from '../components/layout';

const pageQuery = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          category
          description
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          caseUrl
        }
      }
    }
    allStagesJson(filter: { siteTitle: { eq: "Projekte" } }) {
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
    allImageSharp(filter: { fluid: { originalName: { regex: "/case-study-migros-msc.png/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 800, quality: 92) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;

const Projects = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allImageSharp, allProjectsJson }) => {
      const { siteTitle, siteDescription, imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const caseImage = allImageSharp.edges[0].node.fluid;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Stage
            modifiers={['gradient']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            {contentBlocks.map(({ id, value }) => (
              <p key={id}>{value}</p>
            ))}
          </Stage>

          <CaseTeaser
            modifiers={['right-highlighted', 'image-padded']}
            url="/cases/migros-shared-components"
            title="Components Library für die Migros-Welt"
            subline="Case"
            image={{
              fluid: caseImage,
              alt: 'Components Library für die Migros-Welt',
            }}
            allProjects
          >
            <p>
              Um eine einheitliche Benutzeroberfläche über die diversen Migros Plattformen sicherstellen zu können, wurden in
              Zusammenarbeit mit weiteren Migros Partneragenturen die Shared Components ins Leben gerufen.
            </p>
          </CaseTeaser>

          <div className="project-list">
            <div className="container">
              <div className="row">
                {allProjectsJson.edges.map(({ node }) => (
                  <Project
                    key={node.title}
                    title={node.title}
                    category={node.category}
                    image={{
                      fluid: node.image.childImageSharp.fluid,
                      alt: node.title,
                    }}
                    caseUrl={node.caseUrl}
                  >
                    <p dangerouslySetInnerHTML={{ __html: node.description }} />
                  </Project>
                ))}
              </div>
            </div>
          </div>
        </DefaultLayout>
      );
    }}
  />
);

export default Projects;
