import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, PersonalContact, Quote, Stage } from '../../components/molecules';

// #region
const onlineHilfeFindenCaseQuery = graphql`
  query onlineHilfeFindenCaseQuery {
    allStagesJson(filter: { siteTitle: { eq: "Online Hilfe finden" } }) {
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

    allQuotesJson(filter: { slug: { eq: "fabrina-cerf" } }) {
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
    allFile(
      filter: {
        name: {
          regex: "/(online-hilfe-finden-agile-mindset|online-hilfe-finden-react-widget|online-hilfe-finden-fast-search|online-hilfe-finden-geo-search|online-hilfe-finden-clients|online-hilfe-finden-review)/"
        }
      }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
// #endregion

const onlineHilfeFindenCase = () => (
  <StaticQuery
    query={onlineHilfeFindenCaseQuery}
    render={({ allStagesJson, allQuotesJson, allFile, allContactsJson }) => {
      const stageData = allStagesJson.edges[0].node;
      const { quote, author, company, url, image } = allQuotesJson.edges[0].node;

      const agileImg = allFile.edges[0].node.publicURL;
      const reactWidgetImg = allFile.edges[1].node.publicURL;
      const fastSearchImg = allFile.edges[2].node.publicURL;
      const geoSearchImg = allFile.edges[3].node.publicURL;
      const clientsImg = allFile.edges[4].node.publicURL;
      const reviewImg = allFile.edges[5].node.publicURL;
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

      return (
        <DefaultLayout siteTitle={`${stageData.siteTitle} | Projekte`} siteDescription={stageData.siteDescription}>
          <Stage
            modifiers={['gradient', 'case', 'left-highlighted']}
            image={{ fluid: stageData.imageSrc.childImageSharp.fluid, alt: stageData.imageAlt }}
            title={<h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />}
          >
            <div>
              {stageData.contentBlocks.map(block => (
                <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />
              ))}
            </div>
          </Stage>

          <div className="container">
            <Facts title="Facts & Figures">
              <ul>
                <li>Über 1700 Angebote von 1000 Anbietern</li>
                <li>Kann als React-Widget auf anderen Webseiten eingebunden werden</li>
                <li>Elasticsearch für eine schnelle, fehlertolerante und standortbezogene Suche</li>
                <li>Hohe Datenqualität dank Publikations-Workflow</li>
                <li>Skalierbare Infrastruktur für eine nachhaltige Erweiterung</li>
              </ul>
            </Facts>
          </div>
          <CaseBlock
            title="Agiles Vorgehen führt zum Erfolg"
            subtitle="Iterativer Aufbau einer komplexen Datenbank"
            graphic={<img src={agileImg} alt="Vereinfachter, agiler Workflow" />}
            isReverse
          >
            <p>
              Durch eine iterative Vorgehensweise wurde das Projekt in kleinen Paketen entwickelt, welche durch
              wiederkehrende Test-Iterationen evaluiert und auf ihre Funktionsweise getestet wurden. So konnten neue oder
              veränderte Anforderungen stets miteinbezogen werden. Der Kunde kann so das Produkt stets aktiv mitgestalten und
              Wünsche können im Entwicklungsprozess berücksichtigt werden. Ebenso erfolgt auch die Weiterentwicklung der
              Applikation in der Umsetzung von kleinen Paketen.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Flexibilität durch universelles React Widget"
            subtitle="Gezieltes Ausspielen von Angeboten an Zielgruppen"
            graphic={<img src={reactWidgetImg} alt="React Widget eingebettet in einer Webseite" />}
          >
            <div>
              <p>
                Die Angebote sollen auf möglichst vielen Seiten ausgespielt werden, damit die Kunden die Angebote im
                gegebenen Kontext finden. Durch ein React-Widget lässt sich die Angebotssuche kostengünstig und
                technologieunabhängig auf beliebigen Seiten ausspielen. Das Definieren von Grund-Filtern hilft die Angebote
                perfekt gezielt auf den Besucher der jeweiligen Seite anzupassen. Beispielsweise können nur Angebote aus dem
                Kanton St.Gallen zum Thema Burnout für Erwachsene ausgespielt werden.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Schnelle und fehlertolerante Suche"
            subtitle="Elasticsearch bietet die nötigen Hilfsmittel"
            graphic={<img src={fastSearchImg} alt="Suchbox mit Filtermöglichkeiten" />}
            isReverse
          >
            <div>
              <p>
                Eine schnelle und einfache Suche unterstützt Benutzer dabei, zu den gewünschten Ergebnissen zu kommen. Durch
                Elasticsearch wird sichergestellt, dass Tippfehler kein Problem darstellen und auch Synonyme einfliessen. Der
                Benutzer soll seine Begriffe aller Art verwenden können, auch wenn es sich um lateinische Fachbegriffe
                handelt. Durch Filter werden dem Benutzer zudem die Möglichkeiten geboten, die vielen Angebote für seine
                Bedürfnisse einzuschränken.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Angebote in der Nähe finden"
            subtitle="Standortbezogene Suche für optimale Resultate"
            graphic={<img src={geoSearchImg} alt="Standortabhängig Suche mit Treffern" />}
          >
            <div>
              <p>
                Damit der Benutzer Angebote vor seiner Haustüre findet, fliesst die Distanz zum jeweiligen Angebot in die
                Gewichtung der Suchresultate ein. Wenn der Benutzer seinen Standort angibt, können Angebote im nahen Umkreis
                höher priorisiert werden und somit die lokalen Angebote vorgezogen werden.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Mandantenfähigkeit"
            subtitle="Über mehrere Kantone und Organisationen verteilt"
            graphic={<img src={clientsImg} alt="Mehrere Mandanten greifen auf System zu" />}
            isReverse
          >
            <p>
              Mehrere Kantone und Organisationen sind im Backend aktiv. Jeder Mandant pflegt seine eigenen Anbieter-Kreise,
              was zu einer Vielfalt von Angeboten führt. Jeder Mandant ist für seine Anbieter und somit die Daten und
              Angebote verantwortlich und kann spezifische, auf ihn angepasste Konfigurationen vornehmen.
            </p>
          </CaseBlock>
          <CaseBlock
            title="Hohe Datenqualität durch Publikations-Workflow"
            subtitle="Anbieter pflegen ihre Daten und Angebote selbst"
            graphic={<img src={reviewImg} alt="Publikations-Workflow" />}
          >
            <p>
              Eine hohe Datenqualität der Inhalte ist für das Angebotsverzeichnis entscheidend. Die Anbieter haben die
              Möglichkeit, ihre Daten selber zu pflegen um Aktualität und Attraktivität zu gewährleisten. Der Review-Prozess
              spielt dabei eine zentrale Rolle - die verantworlichen Personen müssen Änderungsanträge prüfen und
              anschliessend mit Hinweisen zur Verbesserung zurückweisen oder direkt freigeben und somit ins Verzeichnis
              aufnehmen.
            </p>
          </CaseBlock>

          <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.fluid} />

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

export default onlineHilfeFindenCase;
