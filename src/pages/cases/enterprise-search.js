import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Stage } from '../../components/molecules';
import { CaseBlogTeaserList } from '../../components/organisms/case-blog-teaser-list';
import { LinkButton } from '../../components/atoms/link-button';
import { PersonalContact } from '../../components/molecules/personal-contact';

const enterpriseSearchQuery = graphql`
  query EnterpriseSearchQuery {
    allStagesJson(filter: { siteTitle: { eq: "Enterprise Search" } }) {
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
    allContactsJson(filter: { slug: { eq: "thilo" } }) {
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
    allMediumPost(
      filter: { uniqueSlug: { regex: "/(813838691a2|bf5370bfd18c)/" } }
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
    allFile(
      filter: {
        name: { regex: "/(enterprise-search-results|enterprise-search-crawling|enterprise-search-structured-data)/" }
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

const EnterpriseSearchCase = () => (
  <StaticQuery
    query={enterpriseSearchQuery}
    render={({ allStagesJson, allContactsJson, allMediumPost, allFile }) => {
      const { name, phone, mail, image: contactImage } = allContactsJson.edges[0].node;
      const stageData = allStagesJson.edges[0].node;
      const searchImg = allFile.edges[0].node.publicURL;
      const crawlerImg = allFile.edges[1].node.publicURL;
      const structuredDataImg = allFile.edges[2].node.publicURL;

      return (
        <DefaultLayout siteTitle={`${stageData.siteTitle} | Projekte`} siteDescription={stageData.siteDescription}>
          <Stage
            modifiers={['gradient', 'case']}
            image={{
              fluid: stageData.imageSrc.childImageSharp.fluid,
              alt: stageData.imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />}
          >
            <div>
              {stageData.contentBlocks.map(block => (
                <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />
              ))}
            </div>
          </Stage>

          <div className="container">
            <Facts title="Features">
              <ul>
                <li>Realtime Suche über 100&#39;000 Seiten und Dokumente</li>
                <li>Indexierung von Excel, PDF, Word und weiteren Dokumentformaten</li>
                <li>Unterstützung für mehrsprachige und dynamische Inhalte</li>
                <li>Spelling Correction, Autocomplete, Filter, Pagination</li>
              </ul>
            </Facts>
          </div>

          <CaseBlock
            title="Indexierung"
            subtitle="Apache Nutch Webcrawler"
            graphic={<img style={{ maxWidth: '80%' }} src={crawlerImg} alt="Chatbot Navigationsfluss" />}
          >
            <p>
              Apache Nutch ist ein einfach erweiterbarer und hochskalierbarer Open Source <strong>Web Crawler</strong>. Er
              ist sowohl für das Indexieren von Seiten im Web, wie auch für Seiten in nicht öffentlich zugänglichen Bereichen
              wie ein Firmen Intranet qualifiziert.
            </p>
            <p>
              Dank der Plugin-Architektur kann er beliebig erweitert werden und erkennt auch Inhalte von{' '}
              <strong>PDF-, Word- oder Excel-</strong>
              Dateien.
            </p>
            <LinkButton text="Mehr über Apache Nutch" url="http://nutch.apache.org/" isWhite />
          </CaseBlock>

          <CaseBlock
            title="High End Out-of-the-Box"
            subtitle="Strukturierte Inhalte und Dynamische Seiten"
            graphic={<img style={{ maxWidth: '80%' }} src={structuredDataImg} alt="Funktionalitäten der CRM Applikation" />}
            isReverse
          >
            <p>
              Der Crawler interpretiert <strong>strukturierte Daten</strong> aus Microformats, RDF und Metadaten, welche
              anschliessend als Suchfilter zur Verfügung stehen, um es so beispielsweise dem Benutzer zu ermöglichen, nur
              Produkte unter einem gewissen Preis zu durchsuchen.
            </p>
            <p>
              Durch Erweiterung des Crawlers können auch <strong>dynamische Inhalte</strong> auf JavaScript-lastigen Seiten,
              wie zum Beispiel Angular oder React Apps gelesen und durchsucht werden.
            </p>
          </CaseBlock>

          <div className="container">
            <Facts title="Technologie">
              <ul>
                <li>Realtime Suche über 100&#39;000 Dokumente in &lt; 100ms</li>
                <li>Skalierbar und ausfallsicher dank Elasticsearch und Lucene</li>
                <li>Erkennt stukturierte Inhalte wie Meta-Tags, OG-Tags und JSON-LD für Filter</li>
                <li>Full Stack Open Source mit Apache Nutch, Elasticsearch und Node.js</li>
              </ul>
            </Facts>
          </div>

          <CaseBlock
            title="Datenhaltung und Suchindex"
            subtitle="Elasticsearch basierend auf Apache Lucene"
            graphic={<img style={{ maxWidth: '80%' }} src={searchImg} alt="Funktionalitäten der CRM Applikation" />}
          >
            <p>
              Seit Jahren setzen wir als unseren primären Suchindex für schnelle Resultate auf <strong>Elasticsearch</strong>
              , so zum Beispiel auch beim <Link to="/cases/migros-filialfinder">Migros Filialfinder</Link>. Elasticsearch ist
              eine Suchengine, aufbauend auf Apache Lucene, die eine gute Volltextsuche, «Meinten Sie...?»-Vorschläge und
              Empfehlungen liefert. Mit Elasticsearch können problemlos mehrsprachige Inhalte unterschieden, zugeordnet und
              auch sprachoptimiert ausgeliefert werden.
            </p>
            <p>
              Mit der Verknüpfung von Apache Nutch als Crawler zur Erkennung und Elasticsearch zur Verwaltung von Inhalten
              haben wir ein ausgezeichnetes Setup, welches skalierbar und zukunftsfähig ist.
            </p>
            <LinkButton text="Mehr über Elasticsearch" url="https://www.elastic.co/products/elasticsearch" isWhite />
          </CaseBlock>

          <PersonalContact
            name={name}
            text={`${name} berät Sie gerne zum Thema Apache Nutch, Elasticsearch und deren Anwendung für Enterprise Search.`}
            mail={mail}
            phone={phone}
            img={contactImage.childImageSharp.fluid}
          />

          <CaseBlogTeaserList posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default EnterpriseSearchCase;
