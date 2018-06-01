import React from 'react';
import PropTypes from 'prop-types';

import { TextBlock } from '../../components/atoms';
import { CaseBlock, Facts, Quote, Stage } from '../../components/molecules';
import { MediumTeaser } from '../../components/organisms/medium-teaser';

import aggregationImg from './migros-filialfinder-images/data-aggregation.png';
import frontendImg from './migros-filialfinder-images/filialfinder-frontend.png';
import chartImg from './migros-filialfinder-images/chart.png';

const MigrosFilialfinderCase = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;
  const { quote, author, company, url, image } = data.allQuotesJson.edges[0].node;

  return (<div>
    <Stage
      modifiers={['gradient', 'case']}
      image={{
        src: stageData.imageSrc.childImageSharp.resize.src,
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
      <Facts title="Facts & Figures">
        <ul>
          <li>Mehr als 1000 Filialen aggregiert aus 3 unterschiedlichen Datensystemen</li>
          <li>
            {'Suche in < 0.2 Sekunden'}
          </li>
          <li>Über 33 Filtermöglichkeiten in 3 Sprachen</li>
          <li>5 angebundene APIs</li>
        </ul>
      </Facts>
    </div>

    <CaseBlock
      title="Welche Daten?"
      subtitle="Aggregation und Vereinheitlichung im Backend!"
      graphic={
        <picture>
          <img className="case-img" src={aggregationImg} alt="Infografik Datenaggregation" />
        </picture>
      }
    >
      <div>
        <p>
          Um die Daten und Suchabfragen zu optimieren werden die Filialdaten über eine performante Web-Schnittstelle, basierend auf Elasticsearch und
          Node.js, ausgeliefert.
        </p>
        <p>
          Die Schnittstelle aggregiert und vereinheitlicht Filialdaten aus dem SAP, der Migros-API und weiteren Drittsystemen. Alle relevanten
          Informationen einer Filiale sind dadurch durchsuchbar und die Resultate können effizient über eine JSON REST Schnittstelle ausgespielt werden.
          Um die Latenz der Schnittstelle zu verringern wird die API über Varnish gecached und ausgeliefert.
        </p>
      </div>
    </CaseBlock>

    <CaseBlock
      title="Warum Elasticsearch und Varnish?"
      subtitle="Dynamik und Speed - das Beste von beiden!"
      graphic={
        <picture>
          <img src={chartImg} alt="Performance Vergleich zwischen alt und neu" className="case-img" />{' '}
        </picture>
      }
      isReverse
    >
      <p>
        Durch diese Kombination erreichten wir eine um bis zu 26x schnellere Auslieferung der Daten und eine Verbesserung der Volltextsuche zusammen
        mit Location-based Search mit Geocoding durch Google.
      </p>
      <p>
        Die Erweiterbarkeit und Dynamik der state-of-the-art Suche Elasticsearch, gepaart mit der blitzschnellen Auslieferung durch Varnish ist die
        perfekte Kombination!
      </p>
    </CaseBlock>

    <CaseBlock
      title="Nicht nur Suchen"
      subtitle="sondern Finden!"
      graphic={
        <picture className="is-highlighted">
          <img src={frontendImg} alt="Frontend Screenshot" className="case-img" />
        </picture>
      }
    >
      <p>
        Durch einen starken Fokus auf Suchmaschinenoptimierung (SEO) können auch alle Filialen bei Suchmaschinen inklusive deren Öffnungszeiten
        gefunden werden.
      </p>
      <p>
        Alle Filialinformationen sind als strukturierte Daten mit dem Linked Data Web verknüpft und unterstützen somit die Auffindbarkeit und
        Interpretation durch Suchmaschinen.
      </p>
    </CaseBlock>

    <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.resize.src} />

    <MediumTeaser posts={data.allMediumPost} />

    <TextBlock>
      <p>
        Auf unserem Blog erläutert Nicola Marcacci Rossi in zwei Artikeln unsere
        Erfahrungen und Learnings im Umbau einer komplexen Webapplikation.
      </p>
    </TextBlock>

  </div>);
};

MigrosFilialfinderCase.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default MigrosFilialfinderCase;

export const migrosCaseQuery = graphql`
  query MigrosCaseQuery {
    allStagesJson(filter: {siteTitle: {eq: "Migros Filialfinder"}}) {
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
              resize(width: 1025) {
                src
              }
            }
          }
          imageAlt
        }
      }
    }
    allMediumPost(filter: { id: { regex: "/(5d34a41f108a|ee9125238619)/" } }) {
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
    allQuotesJson(filter: { id: { eq: "corinne-petit-m-filialfinder" } }) {
      edges {
        node {
          quote
          author
          company
          url
          image {
            childImageSharp {
              resize(width: 160) {
                src
              }
            }
          }
        }
      }
    }
  }
`;
