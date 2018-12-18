import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Quote, Stage, PersonalContact } from '../../components/molecules';
import { CaseBlogTeaserList } from '../../components/organisms/case-blog-teaser-list';

const migrosCaseQuery = graphql`
  {
    allStagesJson(filter: { siteTitle: { eq: "Migros Filialfinder" } }) {
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
    allMediumPost(filter: { uniqueSlug: { regex: "/(5d34a41f108a|ee9125238619)/" } }) {
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
    allQuotesJson(filter: { slug: { eq: "corinne-petit" } }) {
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
    allContactsJson(filter: { slug: { eq: "moreno" } }) {
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
    allImageSharp(filter: { fluid: { originalName: { regex: "/(chart|data-aggregation|filialfinder-frontend)/" } } }) {
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

const MigrosFilialfinderCase = () => (
  <StaticQuery
    query={migrosCaseQuery}
    render={({ allStagesJson, allQuotesJson, allImageSharp, allMediumPost, allContactsJson }) => {
      const { imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const { quote, author, company, url, image } = allQuotesJson.edges[0].node;
      const aggregationImg = allImageSharp.edges[0].node.fluid;
      const chartImg = allImageSharp.edges[1].node.fluid;
      const frontendImg = allImageSharp.edges[2].node.fluid;
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

      return (
        <DefaultLayout>
          <Stage
            modifiers={['gradient', 'case']}
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

          <div className="container">
            <Facts title="Facts & Figures">
              <ul>
                <li>Mehr als 1000 Filialen aggregiert aus 3 unterschiedlichen Datensystemen</li>
                <li>{'Suche in < 0.2 Sekunden'}</li>
                <li>Über 33 Filtermöglichkeiten in 3 Sprachen</li>
                <li>5 angebundene APIs</li>
              </ul>
            </Facts>
          </div>

          <CaseBlock
            title="Welche Daten?"
            subtitle="Aggregation und Vereinheitlichung im Backend!"
            graphic={<Img fluid={aggregationImg} alt="Infografik Datenaggregation" />}
          >
            <div>
              <p>
                Um die Daten und Suchabfragen zu optimieren werden die Filialdaten über eine performante Web-Schnittstelle,
                basierend auf Elasticsearch und Node.js, ausgeliefert.
              </p>
              <p>
                Die Schnittstelle aggregiert und vereinheitlicht Filialdaten aus dem SAP, der Migros-API und weiteren
                Drittsystemen. Alle relevanten Informationen einer Filiale sind dadurch durchsuchbar und die Resultate können
                effizient über eine JSON REST Schnittstelle ausgespielt werden. Um die Latenz der Schnittstelle zu verringern
                wird die API über Varnish gecached und ausgeliefert.
              </p>
            </div>
          </CaseBlock>

          <CaseBlock
            title="Warum Elasticsearch und Varnish?"
            subtitle="Dynamik und Speed - das Beste von beiden!"
            graphic={<Img fluid={chartImg} alt="Performance Vergleich zwischen alt und neu" />}
            isReverse
          >
            <p>
              Durch diese Kombination erreichten wir eine um bis zu 26x schnellere Auslieferung der Daten und eine
              Verbesserung der Volltextsuche zusammen mit Location-based Search mit Geocoding durch Google.
            </p>
            <p>
              Die Erweiterbarkeit und Dynamik der state-of-the-art Suche Elasticsearch, gepaart mit der blitzschnellen
              Auslieferung durch Varnish ist die perfekte Kombination!
            </p>
          </CaseBlock>

          <CaseBlock
            title="Nicht nur Suchen"
            subtitle="sondern Finden!"
            graphic={<Img className="is-highlighted" fluid={frontendImg} alt="Frontend Screenshot" />}
          >
            <p>
              Durch einen starken Fokus auf Suchmaschinenoptimierung (SEO) können auch alle Filialen bei Suchmaschinen
              inklusive deren Öffnungszeiten gefunden werden.
            </p>
            <p>
              Alle Filialinformationen sind als strukturierte Daten mit dem Linked Data Web verknüpft und unterstützen somit
              die Auffindbarkeit und Interpretation durch Suchmaschinen.
            </p>
          </CaseBlock>

          <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.fluid} />

          <PersonalContact
            name={contactName}
            mail={contactMail}
            phone={contactPhone}
            img={contactImage.childImageSharp.fluid}
          />

          <CaseBlogTeaserList posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default MigrosFilialfinderCase;
