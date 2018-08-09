import React from 'react';
import PropTypes from 'prop-types';
import { CaseTeaser, Project, Stage } from '../components/molecules';
import { getSiteHeader } from '../layouts';

const Projects = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;
  const caseImage = data.allImageSharp.edges[0].node.resize.src;

  return (<div>
    {getSiteHeader(stageData.siteTitle, stageData.siteDescription)}

    <Stage
      modifiers={['gradient']}
      image={{
        src: stageData.imageSrc.childImageSharp.original.src,
        alt: stageData.imageAlt,
      }}
      title={
        <h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />
      }
    >
      {stageData.contentBlocks.map(block =>
        <p key={block.id}>{ block.value }</p>,
      )}
    </Stage>

    <CaseTeaser
      modifiers={['right-highlighted', 'image-padded']}
      url="/cases/migros-shared-components"
      title="Components Library für die Migros-Welt"
      subline="Case"
      image={{
        src: caseImage,
        alt: 'Components Library für die Migros-Welt',
      }}
      allProjects
    >
      <p>
        Um eine einheitliche Benutzeroberfläche über die diversen Migros Plattformen sicherstellen zu können, wurden in Zusammenarbeit mit weiteren Migros Partneragenturen die Shared Components ins Leben gerufen.
      </p>
    </CaseTeaser>

    <div className="project-list">
      <div className="container">
        <div className="row">
          {data.allProjectsJson.edges.map(({ node }) =>
            (<Project
              key={node.title}
              title={node.title}
              category={node.category}
              image={{
                src: node.image.childImageSharp.original.src,
                alt: node.title,
              }}
              caseUrl={node.caseUrl}
            >
              <p dangerouslySetInnerHTML={{ __html: node.description }} />
            </Project>),
          )}
        </div>
      </div>
    </div>
  </div>);
};

Projects.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Projects;

export const pageQuery = graphql`
query ProjectsQuery {
  allProjectsJson {
    edges {
      node {
        title
        category
        description
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
        caseUrl
      }
    }
  }
  allStagesJson(filter: {siteTitle: {eq: "Projekte"}}) {
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
            original {
              src
            }
          }
        }
        imageAlt
      }
    }
  }
  allImageSharp(filter: {id: {regex: "/case-study-migros-msc.png/"}}) {
    edges {
      node {
        id
        resize(width: 1025) {
          src
        }
      }
    }
  }
}
`;
