import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { LinkButton } from '../../components/atoms';
import { DefaultLayout } from '../../components/layout';
import { CaseBlock, PersonalContact, Quote, Stage } from '../../components/molecules';
import ArchitectureBig from '../../data/projects/bosw-2019/architektur';
import GraphQLAPI from '../../data/projects/bosw-2019/graphQLAPI';
import GraphQLtoBI from '../../data/projects/bosw-2019/graphQLtoBI';
import GraphQLtoREST from '../../data/projects/bosw-2019/graphQLtoREST';
import GraphQLtoSQL from '../../data/projects/bosw-2019/graphQLtoSQL';

const Fast = () => (
  <div className="col-xs-12 col-sm-12 col-lg-12">
    <div className="remarkable">
      <h2>
        60ms
        <small>Datenlieferung unter normaler Last</small>
      </h2>
      <p />
      <h2>
        300ms
        <small>Datenlieferung am Black Friday</small>
      </h2>
    </div>
  </div>
);

const Better = () => (
  <div className="col-xs-12 col-sm-12 col-lg-12">
    <div className="remarkable">
      <h2>
        8x schneller
        <small>pro Request im Vergleich zur vorherigen Lösung</small>
      </h2>
      <p />

      <h2>
        12% mehr
        <small>Kunden-Engagement im Vergleich zur vorherigen Lösung</small>
      </h2>
      <p />
      <h2>
        80% günstiger
        <small>in Betrieb und Weiterentwicklung im Vergleich zur vorherigen Lösung</small>
      </h2>
      <p />
    </div>
  </div>
);

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
    allQuotesJson(filter: { slug: { regex: "/(philippe-buehler-bosw)/" } }) {
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
      filter: {
        fluid: { originalName: { regex: "/(data-migration|idea|allChannels|widget|community-plattform-reactions)/" } }
      }
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

const MigrosRatingReviewsCase = () => (
  <StaticQuery
    query={migrosReactionsCaseQuery}
    render={({ allStagesJson, allQuotesJson, allImageSharp, allContactsJson }) => {
      const { image: contactImage, ...contact } = allContactsJson.edges[0].node;

      const stageData = allStagesJson.edges[0].node;
      const quotePhilipp = allQuotesJson.edges.filter(({ node }) => node.author.includes('Philipp'))[0].node;
      const dataMigration = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('data-migration'))[0];
      const widget = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('widget'))[0];
      const allChannels = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('allChannels'))[0];
      const idea = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('idea'))[0];
      const reactionsCommunity = allImageSharp.edges.filter(({ node }) =>
        node.fluid.src.includes('community-plattform-reactions')
      )[0];

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

          <CaseBlock title="Technological Innovation Meets" subtitle="Business Value" graphic={<Better />}>
            <p>
              Die Neuentwicklung der Migros-Community zeigt, wie mit innovativen Technologien Business Value geschaffen
              werden kann. Daten von unterschiedlichsten Plattformen fliessen an einer zentralen Stelle zusammen: schnell,
              zuverlässig und flexibel. Einfach erweiterbar und günstig im Betrieb.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Ein zu Hause für alle"
            subtitle="nutzergenerierten Inhalte"
            graphic={<Img fluid={idea && idea.node.fluid} alt="Modernste Technologien im Einsatz: GraphQL und Node" />}
            isReverse
          >
            <p>
              Die neu entwickelte Migros-Community-API ist das zu Hause für alle nutzergenerierten Inhalte der
              Migros-Community. Alle Inhalte gehen durch eine zentrale Prüfung und werden an einem Ort moderiert.
            </p>
            <p>
              Neben Reviews, Fragen, Antworten und Kommentaren können beispielsweise auch Ideen eingereicht werden. Ein
              echter Mehrwert um die Crowd für die Produkteentwicklung zu begeistern!
            </p>
            <p>Zuletzt gingen für neue Raclette-Kreationen über 2000 Ideen von der Crowd ein.</p>
          </CaseBlock>

          <CaseBlock
            title="Geteilte Reviews"
            subtitle="Migros-Community neu auf acht Plattformen"
            graphic={
              <Img
                fluid={allChannels && allChannels.node.fluid}
                alt="User Generated Content verteilt auf alle Plattformen"
              />
            }
          >
            <p>
              Auf <a href="https://www.migipedia.ch">migipedia.ch</a> und{' '}
              <a href="https://produkte.migros.ch">produkte.migros.ch</a> können User bereits seit Jahren bewerten, fragen
              und kommentieren. Über 125 000 Produktebewertungen wurden seitdem abgegeben, 20 000 Fragen gestellt und durch
              die Community beantwortet sowie tausende von Likes vergeben.
            </p>
            <p>
              Nun ist dies auch auf allen Fachmärkten möglich: <a href="https://www.melectronics.ch">melectronics</a>,{' '}
              <a href="https://www.sportxx.ch">SportXX</a>, <a href="https://www.bikeworld.ch">Bike World</a>,{' '}
              <a href="https://www.micasa.ch">Micasa</a>, <a href="https://www.interio.ch">Interio</a>, und{' '}
              <a href="https://www.doitgarden.ch/‎">Do it + Garden</a>.
            </p>
            <p>Eine Community auf acht Plattformen.</p>
          </CaseBlock>

          <CaseBlock
            title="Über 250 000 Bewertungen, Likes, Fragen und Antworten migriert"
            subtitle=""
            graphic={<Img fluid={dataMigration && dataMigration.node.fluid} alt="Datenmigration" />}
            isReverse
          >
            <p>
              Bewertungen, Fragen und Antworten sind ein wertvoller Datenschatz für die Kundinnen und Kunden der Migros.
              Diese Inhalte haben wir erfolgreich in ein neues Format überführt. So bleibt der wertvolle Datenschatz erhalten
              und kann neu einfacher und schneller abgefragt werden.
            </p>
          </CaseBlock>

          <CaseBlock
            title=""
            subtitle="Auf der Suche nach einer Community-Lösung?"
            graphic={<Img fluid={reactionsCommunity && reactionsCommunity.node.fluid} alt="Datenmigration" />}
          >
            <p>
              Mit Reactions – unserer Community-Software – ist das Betreiben einer Online Community für jede Organisation ein
              Kinderspiel. Integrierbar in jede Webseite oder App. Mit Interaktionsformen, die man frei definieren kann.
            </p>
            <LinkButton text="Mehr zu Reactions" url="https://reactions.dev" isPrimary />
          </CaseBlock>

          <Quote
            text={quotePhilipp.quote}
            author={quotePhilipp.author}
            company={quotePhilipp.company}
            url={quotePhilipp.url}
            img={quotePhilipp.image.childImageSharp.fluid}
            imgLarge
            textLarge={false}
          />

          <ArchitectureBig />

          <CaseBlock
            title="React-Widget zum Einbinden"
            subtitle="Schneller am Markt"
            graphic={<Img fluid={widget && widget.node.fluid} alt="Modernste Technologien im Einsatz: GraphQL und Node" />}
            isReverse
          >
            <div>
              <p>
                Ein React-Widget für sechs Migros-Online-Fachmärkte ermöglicht das Bewerten, Kommentieren und Liken im
                Online-Shop. Das Widget wird serverseitig gerendert. Damit ist hohe Performance für Kundinnen und Kunden
                garantiert. Das Widget ist mit individuellem Design auf jede einzelne der sechs Migros-Online-Fachmärkte
                angepasst.
              </p>
              <p>Einmal entwickelt, auf acht Plattformen genutzt.</p>
            </div>
          </CaseBlock>

          <CaseBlock title="GraphQL-API" subtitle="Maximale Flexibilität " graphic={<GraphQLAPI />}>
            <p>
              GraphQL ist eine Sprache zur Abfrage und Manipulation von Daten. Eine leistungsfähigere und flexiblere
              Alternative zu REST. Durch Facebook entwickelt und Open Source.
            </p>
            <p>
              <strong>Kein Under- oder Overfetching mehr:</strong> Clients können die benötigten Daten definieren und
              erhalten bei der Abfrage nur genau diese zurück. Nicht mehr, nicht weniger: Jede Migros-Plattform kann
              abfragen, was sie benötigt.
            </p>
            <p>
              <strong>Schnelles Product Development:</strong> Benötigt ein neuer Client andere Daten, stellt dies unsere
              GraphQL-API meist bereits zur Verfügung. Und wenn nicht, dann kann das GraphQL-Schema einfach erweitert werden.
              Das mühsame Versionieren wie bei REST-APIs entfällt. Die API bleibt rückwärtskompatibel und trotzdem können
              neue Funktionen implementiert werden. Damit sind wir in der Weiterentwicklung massiv schneller und günstiger.
            </p>
          </CaseBlock>

          <CaseBlock title="GraphQL-Caching" subtitle="Speed auch am Black Friday" isReverse graphic={<Fast />}>
            <p>
              GraphQL bietet maximale Flexibilität, womit das Caching von Daten komplexer wird. Deshalb haben wir für unsere
              GraphQL-API ein Application Caching entwickelt.
            </p>
            <p>
              Pro Query-Typ entscheiden wir serverseitig, ob gecached werden soll. Ist eine Query ressourcenintensiv, dann
              wird diese gecached. Bei Änderung der Daten wird der Cache wieder gelöscht. Damit sehen Benutzerinnen und
              Benutzer jederzeit aktuellste Daten – zuverlässig und extrem schnell.
            </p>
          </CaseBlock>

          <CaseBlock title="GraphQL to SQL" subtitle="Schneller in der Entwicklung" graphic={<GraphQLtoSQL />}>
            <div>
              <p>
                Die Daten der Migros-Community liegen in einer MySQL-Datenbank. Damit für jede GraphQL-Abfrage auch die
                richtigen Daten zurückgegeben werden, muss die GraphQL-Query korrekt aufgelöst werden. Dies machen wir nicht
                für jedes Feld separat, denn dafür haben wir einen GraphQL-to-SQL-Connector entwickelt.
              </p>
              <p>
                Der GraphQL-to-SQL-Connector übersetzt «on the fly» GraphQL-Queries in SQL-Statements. So verhindern wir,
                dass für einzelne GraphQL-Felder SQL-Statements erstellt werden müssen. Damit vermeiden wir doppelten Code,
                bleiben sehr flexibel und zukünftig agil.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Keine doppelte Datenhaltung"
            subtitle="Anbindung User- und Produktdaten"
            graphic={<GraphQLtoREST />}
            isReverse
          >
            <p>
              Die User- und Produktedaten werden dynamisch über eine REST-API angebunden. Damit entfällt eine meist
              fehleranfällige doppelte Datenhaltung. Eine GraphQL-Query holt die Daten dynamisch aus unterschiedlichen
              Quellen, aber natürlich nur dann, wenn die Daten vom Client auch angefragt wurden.
            </p>
            <p>
              Ein zusätzliches Caching der REST-APIs in der Community-API garantiert Geschwindigkeit und Zuverlässigkeit.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Business Intelligence"
            subtitle="Analysieren von Nutzer-Aktionen auf acht Plattformen"
            graphic={<GraphQLtoBI />}
          >
            <p>
              Aktionen der Nutzerinnen und Nutzer werden an die zentrale Migros Business Intelligence weitergegeben. Damit
              sind vertiefte Analysen möglich. Haben Kundinnen und Kunden ein Produkt vor dem Bewerten gekauft? Kaufen sie
              ein Produkt eher, wenn sie die Bewertungen vorher gelesen und geliked haben?
            </p>
            <p>
              Sogar Zusammenhänge von Offline-Käufen mit Nutzer-Aktionen in der Migros-Community können detailliert
              analysiert werden.
            </p>
          </CaseBlock>

          <PersonalContact titlePrefix="Unser Experte" contact={contact} img={contactImage.childImageSharp.fluid} />
        </DefaultLayout>
      );
    }}
  />
);

export default MigrosRatingReviewsCase;
