import React from 'react';
import PropTypes from 'prop-types';

import { CaseBlock, Stage, Quote } from '../../components/molecules';
import { CaseBlogTeaserList } from '../../components/organisms/case-blog-teaser-list';

import documentationImg from './shared-components-images/documentation.svg';
import testsImg from './shared-components-images/tests.svg';
import atomicDesignImg from './shared-components-images/atomic-design.png';
import webpackImg from './shared-components-images/webpack.png';

export const SharedComponentsCase = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;
  const { quote, author, company, url, image } = data.allQuotesJson.edges[0].node;

  return (
    <div>
      <Stage
        modifiers={['gradient', 'case', 'left-highlighted']}
        image={{
          src: stageData.imageSrc.childImageSharp.resize.src,
          alt: stageData.imageAlt,
        }}
        title={<h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />}
      >
        <div>
          {stageData.contentBlocks.map(block => <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />)}
        </div>
      </Stage>

      <CaseBlock
        title="Atomic Design"
        subtitle="Wiederverwendbare Komponenten Bibliothek"
        graphic={
          <picture>
            <img src={atomicDesignImg} alt="Atomic Design" className="case-img" />
            <figcaption>Atomic Design Konzept. <small>Bild von https://codeburst.io/</small></figcaption>
          </picture>
        }
      >
        <p>
          Die Shared Components sind an das <strong>Atomic Design</strong> angelehnt. Sie werden in drei Hierarchiestufen
          (Atome, Moleküle und Organismen) unterteilt und sind von Natur aus einfach wiederverwendbar. Ein Button wird
          beispielsweise nur einmal als Atom erstellt, und wird dann an allen Orten wiederverwendet.
          Dadurch wird ein einheitliches Look-And-Feel erreicht, auch wenn die Komponenten auf unterschiedlichen Seiten eingebunden werden.
        </p>
        <p>
          Mit JavaScript und Benutzerkontext werden die Komponenten erweitert und als interaktive Widgets inklusive Single Sign-on zur Verfügung gestellt.
        </p>
      </CaseBlock>

      <CaseBlock
        title="Automatisiertes Testing"
        subtitle="Qualitätssicherung"
        graphic={
          <picture style={{ textAlign: 'center' }}>
            <img style={{ maxWidth: '60%' }} src={testsImg} alt="Visualisierung automatisierter Tests" className="case-img" />
          </picture>
        }
        isReverse
      >
        <p>
          Die Module werden mit <strong>Jasmine</strong>, <strong>Chai</strong> und <strong>PhantomJS</strong>{' '}
          automatisiert und ausführlich getestet. Mittels Unit, Functional und Regression Tests kann so die erwartete
          Funktionsweise der Module sichergestellt, und Fehler in der Zukunft verhindert werden.
        </p>
      </CaseBlock>

      <CaseBlock
        title="Minimale Skript Grössen"
        subtitle="Webpack Builds"
        graphic={
          <picture>
            <img src={webpackImg} alt="Webpack build service" className="case-img" />
            <figcaption>Webpack Build Service. <small>Bild von https://webpack.js.org/</small></figcaption>
          </picture>
        }
      >
        <p>
          Webpack stellt sicher, dass nur die auf der Seite wirklich benötigten Komponenten, Bilder und Skripts ausgeliefert werden und minimiert somit die Grösse der zu ladenden CSS und JS Dateien massiv.
        </p>
        <p>
          Mit dem <strong>Tree-shaking</strong> genannten Algorithmus von Webpack konnte in diesem Fall die Grösse der geladenen Skripte auf einer Seite um bis zu 56% reduziert werden.
        </p>
        <p>
          Die Module werden in fachspezifische Pakete gekapselt und via <strong>npm</strong> in einer Registry publiziert, sodass sie einfach wiederverwendet werden können.
        </p>
      </CaseBlock>

      <CaseBlock
        title="Dokumentation"
        subtitle="Essentiell im grossen Ökosystem"
        graphic={
          <picture style={{ textAlign: 'center' }}>
            <img style={{ maxWidth: '80%' }} src={documentationImg} alt="Visualisierung der Dokumentation" className="case-img" />
          </picture>
        }
        isReverse
      >
        <p>
          In einem heterogenen Umfeld mit diversen Entwicklungspartnern und Technologien ist die{' '}
          <strong>Dokumentation</strong> essentiell. Dank einigen massgeschneiderten <strong>Webpack</strong> Loadern
          und Buildscripts kann diese automatisch aus JS Docs und <strong>Handlebars</strong> Templates generiert
          werden und ist dadurch immer aktuell. In der Dokumentation stehen die Module auch zur Vorschau zur Verfügung.
        </p>
      </CaseBlock>

      <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.resize.src} />

      <CaseBlogTeaserList posts={data.allMediumPost} />
    </div>
  );
};

SharedComponentsCase.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SharedComponentsCase;

export const sharedComponentsQuery = graphql`
  query SharedComponentsQuery {
    allStagesJson(filter: { siteTitle: { eq: "Shared Components" } }) {
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
    allMediumPost(filter: { id: { regex: "/(72f9fe4d9514|bf3874fc3afa)/" } }, sort: { fields: [firstPublishedAt], order: ASC }) {
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
    allQuotesJson(filter: { id: { eq: "jason-fellmann-m-components" } }) {
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
