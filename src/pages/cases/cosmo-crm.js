import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Quote, Stage } from '../../components/molecules';

const cosmoCrmQuery = graphql`
  {
    allStagesJson(filter: { siteTitle: { eq: "Cosmo Crm" } }) {
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
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          imageAlt
        }
      }
    }
    allQuotesJson(filter: { slug: { eq: "stefan-bischofberger" } }) {
      edges {
        node {
          quote
          author
          company
          url
          image {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    allImageSharp(filter: { fluid: { originalName: { regex: "/(cosmo-tech-stack|feature-stack-cosmo)/" } } }) {
      edges {
        node {
          id
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`;

const CosmoCrmCase = () => (
  <StaticQuery
    query={cosmoCrmQuery}
    render={({ allStagesJson, allQuotesJson, allImageSharp }) => {
      const { imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const { quote, author, company, url, image } = allQuotesJson.edges[0].node;
      const techImg = allImageSharp.edges[0].node.fluid;
      const featureImg = allImageSharp.edges[1].node.fluid;

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
            graphic={<Img fluid={featureImg} alt="Funktionalitäten der CRM Applikation" />}
          >
            <p>
              Dank des professionellen Requirement Engineerings wurden die Bedürfnisse und Anforderungen der Benutzer von
              Anfang an in die Konzeption miteinbezogen. Das agile Vorgehen und der modulare Aufbau des CRM haben dazu
              beigetragen, das System zielgerichtet auf die Bedürfnisse des Kunden anzupassen. So kann die Applikation stetig
              weiterentwickelt und verbessert werden, zum Beispiel durch die Anbindung des E-Bankings zur
              Datensynchronisation. Dies hilft die Prozesse noch weiter zu automatisieren und zu vereinfachen.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Technologische Übersicht"
            subtitle="Lose Koppelung"
            graphic={<Img fluid={techImg} alt="Performance Vergleich zwischen alt und neu" />}
            isReverse
          >
            <p>
              Durch eine stabile Architektur ist die Skalier-, und Verfügbarkeit der Applikation gewährleistet und einfach
              erweiterbar. Zusätzliche Drittsysteme können problemlos in die Anwendung eingebunden werden.
            </p>
          </CaseBlock>

          <Quote text={quote} author={author} company={company} url={url} img={image.childImageSharp.fluid} />
        </DefaultLayout>
      );
    }}
  />
);

export default CosmoCrmCase;
