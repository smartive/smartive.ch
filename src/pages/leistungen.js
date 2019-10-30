import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { Service, Stage, PersonalContact } from '../components/molecules';
import { DefaultLayout } from '../components/layout';

const pageQuery = graphql`
  {
    allServicesJson {
      edges {
        node {
          title
          catchline
          lead
          body
          image {
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 800, quality: 92) {
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
    allStagesJson(filter: { siteTitle: { eq: "Leistungen" } }) {
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
  }
`;

const Services = () => (
  <StaticQuery
    query={pageQuery}
    render={({ allStagesJson, allServicesJson, allContactsJson }) => {
      const { siteTitle, siteDescription, imageSrc, imageAlt, title, contentBlocks } = allStagesJson.edges[0].node;
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

      return (
        <DefaultLayout siteTitle={siteTitle} siteDescription={siteDescription}>
          <Stage
            modifiers={['left-highlighted', 'gradient']}
            image={{
              fluid: imageSrc.childImageSharp.fluid,
              alt: imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: title }} />}
          >
            <div>
              {contentBlocks.map(({ id, value }) => (
                <p key={id}>{value}</p>
              ))}
            </div>
          </Stage>
          <div className="container">
            <div className="row">
              {allServicesJson.edges.map(({ node }) => {
                const { title: serviceTitle, catchline, lead, image, body } = node;
                const { extension, publicURL, childImageSharp } = image;

                return (
                  <Service
                    key={serviceTitle}
                    title={serviceTitle}
                    catchline={catchline}
                    lead={lead}
                    image={{
                      ...(extension === 'svg' ? { src: publicURL } : { fluid: childImageSharp.fluid }),
                      alt: serviceTitle,
                    }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                  </Service>
                );
              })}
              <PersonalContact
                name={contactName}
                titlePrefix="Ihr Ansprechpartner"
                text="Haben Sie ein innovatives Vorhaben? Wir freuen uns über Ihre Kontaktaufnahme und beraten Sie gerne persönlich."
                mail={contactMail}
                phone={contactPhone}
                img={contactImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </DefaultLayout>
      );
    }}
  />
);

export default Services;
