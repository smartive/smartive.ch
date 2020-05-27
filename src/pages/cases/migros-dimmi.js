import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Quote, Stage, PersonalContact } from '../../components/molecules';
import { CaseBlogTeaserList } from '../../components/organisms/case-blog-teaser-list';

// #region
const migrosDimmiCaseQuery = graphql`
  query MigrosDimmiCaseQuery {
    allStagesJson(filter: { siteTitle: { eq: "Migros Intranet Social Network" } }) {
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
    allMediumPost(filter: { uniqueSlug: { regex: "/(607cdd1f5247|959c6b5ed3a3)/" } }) {
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
    allQuotesJson(filter: { slug: { eq: "danijela-nikolic" } }) {
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
      filter: { fluid: { originalName: { regex: "/(agile-mindset|automated-build|same-code-base|really-fast)/" } } }
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

const MigrosDimmiCase = () => (
  <StaticQuery
    query={migrosDimmiCaseQuery}
    render={({ allStagesJson, allQuotesJson, allMediumPost, allImageSharp, allContactsJson }) => {
      const stageData = allStagesJson.edges[0].node;
      const { quote, author, company, url, image } = allQuotesJson.edges[0].node;
      const agileImg = allImageSharp.edges[0].node.fluid;
      const codeBaseImg = allImageSharp.edges[2].node.fluid;
      const ciCdImg = allImageSharp.edges[1].node.fluid;
      const reallyFast = allImageSharp.edges[3].node.fluid;
      const { image: contactImage, ...contact } = allContactsJson.edges[0].node;

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
                <li>Social Network für über 100 000 Benutzer aus über 50 unterschiedlichen Unternehmen</li>
                <li>Verfügbar im Web, sowie als iOS und Android App</li>
                <li>Code-Sharing zwischen React und React Native</li>
                <li>Hohe Performance dank Optimistic Updates und Elasticsearch</li>
                <li>Automatisierte Deployments auf alle Zielplattformen</li>
              </ul>
            </Facts>
          </div>
          <CaseBlock
            title="Agiles Vorgehen führt zum Erfolg"
            subtitle="Wie baut man ein Soziales Netzwerk in einem halben Jahr?"
            graphic={<Img fluid={agileImg} alt="Vereinfachter, agiler Workflow" />}
            isReverse
          >
            <p>
              Mittels iterativer Projektumsetzung wurden die Anforderungen in testbare und auf sich aufbauende Teilpakete
              gegliedert. Sehr komplexe Themen wie Gruppenmitgliedschaften, Berechtigungen oder Benachrichtigungen wurden
              weiter aufgeteilt und gemäss Priorisierung umgesetzt. Dieses agile Vorgehen stellte sicher, dass die Kundin
              jederzeit den Fortschritt der Arbeiten mitverfolgen konnte. Durch gezielte Aktivierung und Darstellung pro
              Unternehmen ist eine phasenweise Live-Schaltung möglich.
            </p>
          </CaseBlock>

          <CaseBlock
            title="iOS, Android und Web App mit gemeinsamer Code-Basis"
            subtitle="Günstiger in der Entwicklung und einfacher wartbar"
            graphic={<Img fluid={codeBaseImg} alt="Eine Code Base, mehrere Build Targets" />}
          >
            <div>
              <p>
                Die Web-Version wurde mit React, die iOS und Android App mit React Native umgesetzt. Der Frontend-Code für
                User Interface (UI) und Business Logik ist klar getrennt: Das UI wurde für Apps und Web-Version separat
                erstellt. Die Business Logik wiederum kann dank React von allen Plattformen verwendet werden. 35% des Codes
                wird plattformübergreifend genutzt. Weniger Code ist günstiger, sowohl beim Entwickeln, als auch beim Testen
                und Warten.
              </p>
              <p>
                Mehr dazu in unserem{' '}
                <a href="https://blog.smartive.ch/how-were-sharing-code-between-react-and-react-native-607cdd1f5247">
                  Blog-Eintrag
                </a>{' '}
                über Code Sharing in React Projekten.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Hohe Performance"
            subtitle="Optimistic Updates im Frontend, Elasticsearch im Backend"
            graphic={<Img fluid={reallyFast} alt="Hohe Performance" />}
            isReverse
          >
            <p>
              100 000 Mitarbeitende sollen schnell und einfach miteinander kommunizieren können. Eine hohe Performance ist
              dabei zentral. Beim Ausliefern der Daten über die API verwenden wir daher Elasticsearch. Die durchschnittliche
              Antwortzeit liegt bei weniger als 0.3 Sekunden. Beim Erstellen oder Ändern von Kommentaren, Beiträgen oder
              Gruppen setzen wir konsequent auf sogenannte Optimistic Updates: Ein Kommentar wird damit beispielsweise nach
              dem Speichern im User Interface sichtbar, ohne Feedback vom Server, ob der Kommentar bereits gespeichert wurde.
              Die gefühlte Performance wird damit so schnell, dass man von der Client-Server-Kommunikation kaum mehr etwas
              merkt.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Komplett automatisierte Releases und Deployments"
            subtitle="Per Knopfdruck in Apple TestFlight und Google Play Store Beta Testing"
            graphic={<Img fluid={ciCdImg} alt="Automatisierte Build- und Deployment Pipelines" />}
          >
            <p>
              Seit längerem setzen wir auf automatisierte Releases und Deployments. Um diese Vorteile innerhalb der gesamten
              Entwicklungsumgebung zu nutzen, haben wir unsere Deployments auch für Apps komplett automatisiert. Innert
              Minuten nach einem neuen Release stehen die Apps auf iOS und Android zum Testen bereit. Dies garantiert
              schnellere Iterationen und eine hohe Qualität in der App-Entwicklung und verhindert manuelle Fehler beim
              deployen.
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

export default MigrosDimmiCase;
