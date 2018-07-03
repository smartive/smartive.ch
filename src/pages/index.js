import React from 'react';
import PropTypes from 'prop-types';
import { CaseTeaser, Stage, Teaser } from '../components/molecules';
import { MediumTeaser, TeaserList } from '../components/organisms';

const teasers = [
  {
    title: 'Die akkurate Daten­aufbereitung.',
    subline: 'API-Entwicklung',
    description:
      'Machen Sie das Beste aus Ihren Daten. Wir aggregieren und vereinheitlichen Ihre Systeme und machen sie so zu einer standardisierten Schnittstelle für die Verwendung im Web.',
  },
  {
    title: 'Eine grossartige Präsen­tation.',
    subline: 'Webapplikationen',
    description:
      'Da wir mit massgeschneiderten Applikationen, CRMs und interaktiven Visualisierungen arbeiten, können wir Ihnen genau die Lösung anbieten, die vollkommen an Ihre Bedürfnisse angepasst ist.',
  },
  {
    title: 'Mit kompetenter Unter­stützung.',
    subline: 'Konzeption und Beratung',
    description:
      'Profitieren Sie von unseren fundierten Ausbildungen und von unserer langjährigen Erfahrung. Wir unterstützen Sie in der Konzeption und der Umsetzung und begleiten Ihr Projekt von Ihrer ersten Idee bis zur fertigen Umsetzung im Web.',
  },
];

const Index = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;
  const caseImage = data.allImageSharp.edges[0].node.resize.src;

  return (<div>
    <Stage
      modifiers={['landing-page', 'left-highlighted']}
      image={{
        src: stageData.imageSrc.childImageSharp.original.src,
        alt: stageData.imageAlt,
      }}
      title={
        <h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />
      }
    >
      {stageData.contentBlocks.map(block =>
        <p key={block.id}>{block.value}</p>,
      )}
    </Stage>

    <TeaserList>
      {teasers.map(teaser =>
        (<Teaser key={teaser.title} title={teaser.title} subline={teaser.subline}>
          <p>
            {teaser.description}
          </p>
        </Teaser>),
      )}
    </TeaserList>

    <CaseTeaser
      url="/cases/migros-filialfinder"
      title="Auf der Suche nach der nächsten Migros Filiale"
      subline="Case"
      image={{
        src: caseImage,
        alt: 'Auf der Suche nach der nächsten Migros Filiale',
      }}
      allProjects
    >
      <p>
        Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den
        neuen Filialfinder umgesetzt.
      </p>
    </CaseTeaser>

    <MediumTeaser posts={data.allMediumPost} />
  </div>);
};

Index.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
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
    allStagesJson(filter: {siteTitle: {eq: "Index"}}) {
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
    allImageSharp(filter: {id: {regex: "/case-study-migros.png/"}}) {
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
