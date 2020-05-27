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
      const { image: contactImage, ...contact } = allContactsJson.edges[0].node;

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
                text="Wir ❤️ digitale Produkte – und wir sprechen gerne darüber! Vielleicht bei einem unverbindlichen und kostenlosen Kaffee?"
                contact={contact}
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
