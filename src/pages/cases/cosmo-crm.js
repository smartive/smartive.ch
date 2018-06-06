import React from 'react';
import PropTypes from 'prop-types';

import { CaseBlock, Facts, Quote, Stage } from '../../components/molecules';

import featureImg from './cosmo-crm-images/feature-stack-cosmo.png';
import techImg from './cosmo-crm-images/cosmo-tech-stack.png';

const CosmoCrmCase = ({ data }) => {
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
      <Facts title="Insights">
        <ul>
          <li>Intelligente Suche</li>
          <li>Dynamische Kundenprofile</li>
          <li>Über 20 digitale Geschäftsprozesse</li>
          <li>Automatisierung von komplexen und zeitintensiven Abläufen</li>
          <li>Aufbereitung von Reports mittels Mausklick</li>
          <li>Datenexporte für Drittsysteme</li>
          <li>Automatisierte Datenkontrollen</li>
        </ul>
      </Facts>
    </div>

    <CaseBlock
      title="Digitale Transformation"
      subtitle="Automatisierung"
      graphic={
        <picture>
          <img className="case-img" src={featureImg} alt="Funktionalitäten der CRM Applikation" />
        </picture>
      }
    >
      <p>
        Dank des professionellen Requirement Engineerings wurden die Bedürfnisse und Anforderungen der Benutzer von Anfang an in die Konzeption
        miteinbezogen. Das agile Vorgehen und der modulare Aufbau des CRM haben dazu beigetragen, das System zielgerichtet auf die Bedürfnisse des
        Kunden anzupassen. So kann die Applikation stetig weiterentwickelt und verbessert werden, zum Beispiel durch die Anbindung des E-Bankings zur
        Datensynchronisation. Dies hilft die Prozesse noch weiter zu automatisieren und zu vereinfachen.
      </p>
    </CaseBlock>

    <CaseBlock
      title="Technologische Übersicht"
      subtitle="Lose Koppelung"
      graphic={
        <picture>
          <img src={techImg} alt="Performance Vergleich zwischen alt und neu" className="case-img" />{' '}
        </picture>
      }
      isReverse
    >
      <p>
        Durch eine stabile Architektur ist die Skalier-, und Verfügbarkeit der Applikation gewährleistet und einfach erweiterbar. Zusätzliche
        Drittsysteme können problemlos in die Anwendung eingebunden werden.
      </p>
    </CaseBlock>

    <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.resize.src} />
  </div>);
};

CosmoCrmCase.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default CosmoCrmCase;

export const cosmoCrmQuery = graphql`
query CosmoCrmQuery {
  allStagesJson(filter: {siteTitle: {eq: "Cosmo Crm"}}) {
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
  allQuotesJson(filter: { id: { eq: "stefan-bischofberger" } }) {
    edges {
      node {
        quote
        author
        company
        url
        image {
          childImageSharp {
            resize(width: 200) {
              src
            }
          }
        }
      }
    }
  }
}
`;
