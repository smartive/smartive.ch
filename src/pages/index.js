import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../components/layout';
import { CaseTeaser, PersonalContact, Stage } from '../components/molecules';
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
      filter: {
        fluid: {
          originalName: {
            regex: "/case-study-migros-reactions-bronze.png|case-study-cosmo.jpg|case-study-subsidia.jpg|community-plattform-reactions.png/"
          }
        }
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

const Index = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allMediumPost, allImageSharp, allMembersJson, allContactsJson }) => {
      const { imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

      const caseImage1 = allImageSharp.edges.filter(({ node }) => node.fluid.src.includes('case-study-migros-reactions'))[0];
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
            url="/cases/migros-ratings-reviews"
            title="Von Migipedia zur Migros-Community"
            subline="GraphQL API und React"
            image={{
              fluid: caseImage1 && caseImage1.node.fluid,
              alt: 'Migipedia Webseite auf einem iPad',
            }}
          >
            <p>
              Die Applikation für User Generated Content, das Herz von Migipedia, haben wir komplett neu entwickelt.
              Migipedia nutzt jetzt Reactions - unserer Community-Software. Nun ist Migipedia nicht mehr nur eine Plattform,
              sondern eine Community über acht Websites hinweg.
            </p>
          </CaseTeaser>

          <CaseTeaser
            modifiers={['left-highlighted', 'image-padded', 'bright']}
            url="/cases/cosmo-crm"
            title="Digitale Geschäftsprozesse als Herzstück"
            subline="CRM als Webapplikation"
            image={{
              fluid: caseImage2 && caseImage2.node.fluid,
              alt: 'CRM Formular auf einem Laptop',
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
              alt: 'PWA Kassen-App auf einem Smartphone',
            }}
          >
            <p>
              Gemeinsam mit Subsidia erstellen wir ein Warenwirtschaftssystem und eine Kassensoftware (POS-System) mit
              nahtloser Integration ins Kunden-Marketing. smartive unterstützte mit Beratung, Technologiewahl, Setup und
              verstärkt nun das Entwicklerteam bei der Umsetzung. Agil und unter Einbezug der neuesten Technologien.
            </p>
          </CaseTeaser>

          <PersonalContact
            name={contactName}
            titlePrefix={`Ihr Ansprechpartner`}
            text={`Haben Sie ein innovatives Vorhaben? Wir freuen uns über Ihre Kontaktaufnahme und beraten Sie gerne persönlich.`}
            mail={contactMail}
            phone={contactPhone}
            img={contactImage.childImageSharp.fluid}
          />

          <MediumTeaser posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default Index;
