import React from 'react';
import PropTypes from 'prop-types';

import { Service, Stage } from '../components/molecules';
import { getSiteHeader } from '../layouts';

const Services = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;

  return (<div>
    {getSiteHeader(stageData.siteTitle, stageData.siteDescription)}

    <Stage
      modifiers={['left-highlighted', 'gradient']}
      image={{
        src: stageData.imageSrc.childImageSharp.original.src,
        alt: stageData.imageAlt,
      }}
      title={
        <h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />
      }
    >
      <div>
        {stageData.contentBlocks.map(block =>
          <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />,
        )}
      </div>
    </Stage>
    <div className="container">
      <div className="row">
        {data.allServicesJson.edges.map(({ node }) =>
          (<Service
            key={node.title}
            title={node.title}
            catchline={node.catchline}
            lead={node.lead}
            image={{
              src: node.image.childImageSharp.original.src,
              alt: node.title,
            }}
            linkedCase={node.linkedCase}
          >
            <div dangerouslySetInnerHTML={{ __html: node.body }} />
          </Service>),
        )}
      </div>
    </div>
  </div>);
};

Services.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Services;

export const pageQuery = graphql`
query ServicesQuery {
  allServicesJson {
    edges {
      node {
        title
        catchline
        lead
        body
        image {
          childImageSharp {
            original {
              src
            }
          }
        }
        linkedCase {
          url
          title
        }
      }
    }
  }
  allStagesJson(filter: {siteTitle: {eq: "Leistungen"}}) {
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
}
`;
