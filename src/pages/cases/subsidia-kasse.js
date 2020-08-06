import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Quote, Stage, PersonalContact } from '../../components/molecules';

// #region
const subsidiaCaseQuery = graphql`
  query SubsidiaCaseQuery {
    allStagesJson(filter: { siteTitle: { eq: "Kasse als Progressive Web App" } }) {
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
              fluid(maxWidth: 1025, quality: 92) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          imageAlt
        }
      }
    }
    allQuotesJson(filter: { slug: { eq: "diego-goldener" } }) {
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
    allContactsJson(filter: { slug: { eq: "robert" } }) {
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
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/(technology-cloud|automated-cloud|design-pattern|pwa-react)/" } } }
    ) {
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
// #endregion

const SubsidiaCase = () => (
  <StaticQuery
    query={subsidiaCaseQuery}
    render={({ allStagesJson, allQuotesJson, allImageSharp, allContactsJson }) => {
      const { image: contactImage, ...contact } = allContactsJson.edges[0].node;

      const stageData = allStagesJson.edges[0].node;
      const { quote, author, company, url, image } = allQuotesJson.edges[0].node;
      const automated = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('automated-cloud'))[0];
      const techCloud = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('technology-cloud'))[0];
      const pwa = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('pwa-react'))[0];
      const designPattern = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('design-pattern'))[0];

      return (
        <DefaultLayout siteTitle={`${stageData.siteTitle} | Projekte`} siteDescription={stageData.siteDescription}>
          <Stage
            modifiers={['gradient', 'case', 'left-highlighted']}
            image={{ fluid: stageData.imageSrc.childImageSharp.fluid, alt: stageData.imageAlt }}
            title={<h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />}
          >
            <div>
              {stageData.contentBlocks.map((block) => (
                <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />
              ))}
            </div>
          </Stage>

          <div className="container">
            <Facts title="Facts & Figures">
              <ul>
                <li>Beratung und Technologiewahl</li>
                <li>DevOps Setup mit GitLab in Google Cloud Plattform</li>
                <li>Kasse als Progressive Web App mit React</li>
                <li>Einfach erweiterbare Design Pattern Library</li>
              </ul>
            </Facts>
          </div>

          <CaseBlock
            title="Beratung und Technologiewahl"
            subtitle="Mit modernen Technologien schneller am Markt"
            graphic={<Img fluid={techCloud && techCloud.node.fluid} alt="Welche Technologie eignet sich?" />}
            isReverse
          >
            <p>
              Mit welchen Technolgien soll ein Kassen- und Warenwirtschaftssystem heute entwickelt werden? Welche
              Technologien bringen welche Chancen und Risiken mit sich? Wo soll der Code gehostet und wie sollen Deployments
              automatisiert werden? Mit unserer Erfahrung konnten wir Subsidia in der Wahl eines idealen und
              zukunfsorientierten Technologie-Stacks unterstützen. Alles was unsicher war, haben wir mit einem Proof of
              Concept untermauert. Die Investitionssumme wird so zielgerichtet eingesetzt.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Kasse als Progressive Web App"
            subtitle="Schneller, einfacher, zukunftstauglich"
            graphic={<Img fluid={pwa && pwa.node.fluid} alt="Progressive Web App mit React" />}
          >
            <div>
              <p>
                Mobile Android und iOS-Devices verfügen mit Chrome und Safari über moderne Browser. So lässt sich das
                Kassensystem komplett im Browser entwickeln: Die Kamera liest den Barcode, das angeschlossene Six Payment
                Terminal übernimmt die Zahlung, der Kassendrucker das Drucken der Quittung. Und sollte das WLAN einmal nicht
                erreichbar sein, funktioniert alles auch komplett Offline. Was bis vor kurzem nur mit nativen iOS oder
                Android Apps möglich war, kann heute mit dem Browser umgesetzt werden. Das Resultat: Schneller und günstiger
                entwickelt sowie einfacher wartbar.
              </p>
              <p>
                Mehr dazu in unserem{' '}
                <a href="https://blog.smartive.ch/the-why-what-and-how-of-progressive-web-apps-5c884d8d2be7">Blog-Eintrag</a>{' '}
                über den Einsatz von Progressive Web Apps.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Design als Pattern Library"
            subtitle="Klarheit in Design mit hoher Usability"
            graphic={<Img fluid={designPattern && designPattern.node.fluid} alt="Design Pattern" />}
            isReverse
          >
            <p>
              Unser UX- und UI-Partner hat für Subsidia eine Designsprache entwickelt, welche durch Klarheit eine einfache
              Bedienung ermöglicht. Wir erstellten daraus eine Pattern Library, welche die einzelnen Elemente wie Legoteile
              wiederverwendbar macht. Die Design Pattern Library verhindert Inkonsistenzen, Wildwuchs und unnötige
              Doppelarbeit.
            </p>
          </CaseBlock>

          <CaseBlock
            title="DevOps Setup in der Cloud"
            subtitle="Einfach und komplett automatisiert"
            graphic={<Img fluid={automated && automated.node.fluid} alt="Automatisierte CI-Umgebung" />}
          >
            <p>
              Für Subsidia haben wir eine Umgebung aufgesetzt, die agiles Arbeiten einfach macht. Dabei setzen wir auf
              Continuous Integration mit GitLab, Docker und Kubernetes. Alles läuft in der Google Cloud Platform. Pro Feature
              wird automatisiert eine Vorschau-Umgebung erstellt. Somit haben alle Zugriff auf die neuesten Funktionen. Vom
              Projektleiter über den Designer bis hin zum Entwickler wird die Kommunikation vereinfacht. Schnelles
              Vorwärtskommen ist garantiert.
            </p>
          </CaseBlock>

          <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.fluid} />

          <PersonalContact titlePrefix="Unser Experte" contact={contact} img={contactImage.childImageSharp.fluid} />
        </DefaultLayout>
      );
    }}
  />
);

export default SubsidiaCase;
