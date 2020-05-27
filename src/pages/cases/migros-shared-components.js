import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, PersonalContact, Quote, Stage } from '../../components/molecules';
import { CaseBlogTeaserList } from '../../components/organisms/case-blog-teaser-list';

const sharedComponentsQuery = graphql`
  {
    allStagesJson(filter: { siteTitle: { eq: "Shared Components Library" } }) {
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
    allMediumPost(
      filter: { uniqueSlug: { regex: "/(72f9fe4d9514|bf3874fc3afa)/" } }
      sort: { fields: [firstPublishedAt], order: ASC }
    ) {
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
    allQuotesJson(filter: { slug: { eq: "jason-fellmann-m-components" } }) {
      edges {
        node {
          quote
          author
          company
          url
          image {
            childImageSharp {
              fluid(maxWidth: 200, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    allContactsJson(filter: { slug: { eq: "thilo" } }) {
      edges {
        node {
          name
          phone
          mail
          appointmentLink
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    allFile(filter: { name: { regex: "/(atomic-design|webpack|documentation|tests)/" } }) {
      edges {
        node {
          publicURL
          childImageSharp {
            fluid(maxWidth: 800, quality: 92) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

export const SharedComponentsCase = () => (
  <StaticQuery
    query={sharedComponentsQuery}
    render={({ allStagesJson, allQuotesJson, allFile, allMediumPost, allContactsJson }) => {
      const { imageSrc, imageAlt, title, contentBlocks, siteTitle, siteDescription } = allStagesJson.edges[0].node;
      const { quote, author, company, url, image } = allQuotesJson.edges[0].node;
      const documentationImg = allFile.edges[0].node.publicURL;
      const testsImg = allFile.edges[1].node.publicURL;
      const webpackImg = allFile.edges[2].node.childImageSharp.fluid;
      const atomicDesignImg = allFile.edges[3].node.childImageSharp.fluid;
      const { image: contactImage, ...contact } = allContactsJson.edges[0].node;

      return (
        <DefaultLayout siteTitle={`${siteTitle} | Projekte`} siteDescription={siteDescription}>
          <Stage
            modifiers={['gradient', 'case', 'left-highlighted']}
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
            </div>
          </Stage>

          <CaseBlock
            title="Atomic Design"
            subtitle="Wiederverwendbare Komponenten Bibliothek"
            graphic={
              <figure>
                <Img fluid={atomicDesignImg} alt="Atomic Design" />
                <figcaption>
                  Atomic Design Konzept. <small>Bild von https://codeburst.io/</small>
                </figcaption>
              </figure>
            }
          >
            <p>
              Die Shared Components sind an das <strong>Atomic Design</strong> angelehnt. Sie werden in drei Hierarchiestufen
              (Atome, Moleküle und Organismen) unterteilt und sind von Natur aus einfach wiederverwendbar. Ein Button wird
              beispielsweise nur einmal als Atom erstellt, und wird dann an allen Orten wiederverwendet. Dadurch wird ein
              einheitliches Look-And-Feel erreicht, auch wenn die Komponenten auf unterschiedlichen Seiten eingebunden
              werden.
            </p>
            <p>
              Mit JavaScript und Benutzerkontext werden die Komponenten erweitert und als interaktive Widgets inklusive
              Single Sign-on zur Verfügung gestellt.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Automatisiertes Testing"
            subtitle="Qualitätssicherung"
            graphic={
              <picture style={{ textAlign: 'center' }}>
                <img style={{ maxWidth: '60%' }} src={testsImg} alt="Visualisierung automatisierter Tests" />
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
              <figure>
                <Img fluid={webpackImg} alt="Webpack build service" />
                <figcaption>
                  Webpack Build Service. <small>Bild von https://webpack.js.org/</small>
                </figcaption>
              </figure>
            }
          >
            <p>
              Webpack stellt sicher, dass nur die auf der Seite wirklich benötigten Komponenten, Bilder und Skripts
              ausgeliefert werden und minimiert somit die Grösse der zu ladenden CSS und JS Dateien massiv.
            </p>
            <p>
              Mit dem <strong>Tree-shaking</strong> genannten Algorithmus von Webpack konnte in diesem Fall die Grösse der
              geladenen Skripte auf einer Seite um bis zu 56% reduziert werden.
            </p>
            <p>
              Die Module werden in fachspezifische Pakete gekapselt und via <strong>npm</strong> in einer Registry
              publiziert, sodass sie einfach wiederverwendet werden können.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Dokumentation"
            subtitle="Essentiell im grossen Ökosystem"
            graphic={
              <picture style={{ textAlign: 'center' }}>
                <img style={{ maxWidth: '80%' }} src={documentationImg} alt="Visualisierung der Dokumentation" />
              </picture>
            }
            isReverse
          >
            <p>
              In einem heterogenen Umfeld mit diversen Entwicklungspartnern und Technologien ist die{' '}
              <strong>Dokumentation</strong> essentiell. Dank einigen massgeschneiderten <strong>Webpack</strong> Loadern und
              Buildscripts kann diese automatisch aus JS Docs und <strong>Handlebars</strong> Templates generiert werden und
              ist dadurch immer aktuell. In der Dokumentation stehen die Module auch zur Vorschau zur Verfügung.
            </p>
          </CaseBlock>

          <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.fluid} />

          <PersonalContact titlePrefix="Unser Experte" contact={contact} img={contactImage.childImageSharp.fluid} />

          <CaseBlogTeaserList posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default SharedComponentsCase;
