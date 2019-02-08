import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Quote, Stage, PersonalContact } from '../../components/molecules';

// #region
const migrosReactionsCaseQuery = graphql`
  query MigrosRatingReviewsCase {
    allStagesJson(filter: { siteTitle: { eq: "Migros-Produkte bewerten" } }) {
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
    allQuotesJson(filter: { slug: { regex: "/(philippe-buehler|roland-hunziker)/" } }) {
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
    allContactsJson(filter: { slug: { eq: "peter" } }) {
      edges {
        node {
          name
          phone
          mail
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
    allImageSharp(filter: { fluid: { originalName: { regex: "/(before-after|microservice|new-tech|data-migration)/" } } }) {
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

const MigrosRatingReviewsCase = () => (
  <StaticQuery
    query={migrosReactionsCaseQuery}
    render={({ allStagesJson, allQuotesJson, allImageSharp, allContactsJson }) => {
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

      const stageData = allStagesJson.edges[0].node;

      const quotePhilipp = allQuotesJson.edges.filter(({ node }) => node.author.includes('Philipp'))[0].node;
      const quoteRoland = allQuotesJson.edges.filter(({ node }) => node.author.includes('Roland'))[0].node;

      const beforeAfter = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('before-after'))[0];
      const microService = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('microservice'))[0];
      const newTech = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('new-tech'))[0];
      const dataMigration = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('data-migration'))[0];

      return (
        <DefaultLayout>
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
                <li>8 Mal schneller und 15 Mal günstiger im laufenden Betrieb</li>
                <li>Migration von über 200 000 Bewertungen, Likes, Fragen und Antworten</li>
                <li>Modernste Technologien im Einsatz: GraphQL und Node.js</li>
                <li>Modular erweiterbar dank Microservices-Architektur</li>
              </ul>
            </Facts>
          </div>

          <CaseBlock
            title="8 mal schneller"
            subtitle="15 mal günstiger"
            graphic={<Img fluid={beforeAfter && beforeAfter.node.fluid} alt="8 Mal schneller, 15 mal günstiger" />}
            isReverse
          >
            <p>
              Dank klarer Zielorientierung und agilem Vorgehen konnten wir eine etwas ältere Applikation on Time und on
              Budget ablösen. Der Gewinn für die Migros: Wegfallende Lizenzkosten reduzieren die Betriebskosten um den Faktor
              15.
            </p>
            <p>
              Der Einsatz modernster Technologien macht die neue Applikation massiv schneller. Der Gewinn für die Nutzer:
              Eine um den Faktor 8 schnellere Anzeige von Bewertungen, Fragen und Antworten.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Über 200 000 Bewertungen, Likes, Fragen und Antworten migriert"
            subtitle=""
            graphic={<Img fluid={dataMigration && dataMigration.node.fluid} alt="Datenmigration" />}
          >
            <p>
              Über die letzten Jahre wurden Produkte von Migros über 100 000 bewertet. Zudem wurden über 15 000 Fragen
              gestellt und beantwortet und 100 000 Likes verteilt. Diese Inhalte haben wir erfolgreich in ein neues Format
              überführt. So bleibt der wertvolle Datenschatz erhalten und kann neu einfacher und schneller abgefragt werden.
            </p>
          </CaseBlock>

          <Quote
            text={quotePhilipp.quote}
            author={quotePhilipp.author}
            company={quotePhilipp.company}
            url={quotePhilipp.url}
            img={quotePhilipp.image.childImageSharp.fluid}
          />

          <CaseBlock
            title="Modernste Technologien im Einsatz"
            subtitle="Mehr Flexibilität und Performance dank GraphQL und Node.js"
            graphic={<Img fluid={newTech && newTech.node.fluid} alt="Modernste Technologien im Einsatz: GraphQL und Node" />}
            isReverse
          >
            <div>
              <p>
                Acht unterschiedliche Webseiten, Online-Shops und Apps zeigen Bewertungen, Fragen und Antworten. Jede
                Plattform benötigt bei der Implementierung möglichst grosse Flexibilität. Deswegen setzen wir auf GraphQL.
                Mit GraphQL kann jede Plattform genau jene Inhalte abfragen, welche auch angezeigt werden sollen. Dies führt
                zudem zu verbesserter Performance, da nur benötigte Daten übermittelt werden.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Microservices-Architektur"
            subtitle="Modular und einfach erweiterbar"
            graphic={<Img fluid={microService && microService.node.fluid} alt="Microservices-Architektur" />}
          >
            <p>
              Bei der Entwicklung unserer Lösung haben wir darauf geachtet, dass diese auch in Zukunft einfach wartbar und
              erweiterbar ist. Deswegen besteht diese aus vier voneinander losgekoppelten Modulen, sogenannten Microservices.
            </p>
            <p>
              Der erste Microservice liefert die Daten aus. Ein zweiter Microservice ist zuständig für das Versenden von
              E-Mails. Ein drittes Modul übernimmt Hintergrundarbeiten, wie beispielsweise das Aufarbeiten von Daten. Und ein
              vierter Service transferiert die Daten in ein spezielles Format, welches von einem älteren System noch benötigt
              wird.
            </p>
            <p>
              Mit dieser Architektur können wir das vierte Modul - das nur temporär benötigt wird - zukünftig ganz einfach
              entfernen, ohne die anderen zu tangieren.
            </p>
          </CaseBlock>

          <Quote
            text={quoteRoland.quote}
            author={quoteRoland.author}
            company={quoteRoland.company}
            url={quoteRoland.url}
            img={quoteRoland.image.childImageSharp.fluid}
          />

          <PersonalContact
            name={contactName}
            mail={contactMail}
            phone={contactPhone}
            img={contactImage.childImageSharp.fluid}
          />
        </DefaultLayout>
      );
    }}
  />
);

export default MigrosRatingReviewsCase;
