import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';
import { CaseTeaser, Stage, PersonalContact } from '../components/molecules';
import { MediumTeaser } from '../components/organisms';
import { replaceCount } from '../utils/count';

const pageQuery = graphql`
  {
    allMediumPost(limit: 2, sort: { fields: [firstPublishedAt], order: DESC }) {
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
    allStagesJson(filter: { siteTitle: { eq: "Index" } }) {
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
          link
          linkText
        }
      }
    }
    allMembersJson {
      edges {
        node {
          name
        }
      }
    }
    allImageSharp(
      filter: { fluid: { originalName: { regex: "/case-study-dimmi.png|case-study-cosmo.jpg|case-study-subsidia.jpg/" } } }
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

const Index = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allMediumPost, allImageSharp, allMembersJson, allContactsJson }) => {
      const { imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const { name, phone, mail, image: contactImage } = allContactsJson.edges[0].node;

      const caseImage1 = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('case-study-dimmi'))[0];
      const caseImage2 = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('case-study-cosmo'))[0];
      const caseImage3 = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('case-study-subsidia'))[0];

      const members = allMembersJson.edges;

      return (
        <DefaultLayout>
          <Stage
            modifiers={['landing-page', 'left-highlighted']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            {contentBlocks.map(({ id, value }) => (
              <p key={id}>{replaceCount(value, members.length)}</p>
            ))}
          </Stage>

          <CaseTeaser
            modifiers={['right-highlighted', 'image-padded', 'dark']}
            url="/cases/migros-dimmi"
            title="Migros Intranet als Social Network"
            subline="Webapplikation, iOS und Android App"
            image={{
              fluid: caseImage1 && caseImage1.node.fluid,
              alt: 'Migros Intranet als Social Network',
            }}
          >
            <p>
              Für den Migros-Genossenschafts-Bund haben wir ein internes soziales Netzwerk umgesetzt. 100 000 Mitarbeitende
              können Gruppen erstellen und gemeinsame Interessen teilen. So rücken die Mitarbeitenden über das gesamte
              Unternehmen hinweg näher zusammen.
            </p>
          </CaseTeaser>

          <CaseTeaser
            modifiers={['left-highlighted', 'image-padded', 'bright']}
            url="/cases/cosmo-crm"
            title="Digitale Geschäftsprozesse als Herzstück"
            subline="CRM als Webapplikation"
            image={{
              fluid: caseImage2 && caseImage2.node.fluid,
              alt: 'CRM als Webapplikation',
            }}
          >
            <p>
              Für die Cosmopolitan Vermögensverwaltungs AG konzipierten und entwickelten wir ein CRM System, welches die
              spezifischen Geschäftsprozesse genau abbildet. Der Wunsch, die Daten von einigen Excel Files in eine
              ausgereifte Datenstruktur zu überführen, hat zu einer Webapplikation geführt, welche mittlerweile das Herzstück
              der Firma bildet - alle Daten werden zentral und einheitlich verwaltet.
            </p>
          </CaseTeaser>

          <CaseTeaser
            modifiers={['right-highlighted', 'image-padded', 'dark']}
            url="/cases/subsidia-kasse"
            title="Dank agilem Ansatz schnell am Markt"
            subline="Kasse als Progressive Web App"
            image={{
              fluid: caseImage3 && caseImage3.node.fluid,
              alt: 'Dank agilem Ansatz schnell am Markt',
            }}
          >
            <p>
              Gemeinsam mit Subsidia erstellen wir ein Warenwirtschaftssystem und eine Kassensoftware (POS-System) mit
              nahtloser Integration ins Kunden-Marketing. smartive unterstützte mit Beratung, Technologiewahl, Setup und
              verstärkt nun das Entwicklerteam bei der Umsetzung. Agil und unter Einbezug der neuesten Technologien.
            </p>
          </CaseTeaser>

          <PersonalContact
            name={`Ihr Ansprechpartner: ${name}`}
            text={`Haben Sie ein innovatives Vorhaben? Wir freuen uns über Ihre Kontaktaufnahme und beraten Sie gerne.`}
            mail={mail}
            phone={phone}
            img={contactImage.childImageSharp.fluid}
          />

          <MediumTeaser posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default Index;
