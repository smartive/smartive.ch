import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { Button } from '../components/atoms';
import { DefaultLayout } from '../components/layout';
import { CaseTeaser, Stage, Teaser } from '../components/molecules';
import { MediumTeaser, TeaserList } from '../components/organisms';
import { replaceCount } from '../utils/count';

const teasers = [
  {
    title: 'Zukunftsweisende Technologien',
    subline: 'Langjährige Erfahrung',
    description:
      'Wir verfügen über viel Erfahrung, inbesondere mit Node.js, React, Angular, D3.js, GraphQL, Symfony, .NET Core, Docker, Kubernetes und Elasticsearch.',
    link: 'https://blog.smartive.ch',
    linkText: 'Unser Blog',
  },
  {
    title: 'Ein kompetenter Ansprechpartner',
    subline: 'Ein Projekt, ein Team',
    description:
      'Ein Entwickler mit langjähriger Projektleitungserfahrung übernimmt im Projekt den Lead und garantiert die direkte Kommunikation mit viel technischem Know-How.',
    link: '/projekte',
    linkText: 'Unsere Projekte',
  },
  {
    title: 'Alle sind beteiligt',
    subline: 'Am Erfolg jedes Projektes interessiert',
    description:
      'Wir kennen keine klassischen Hierarchien. Alle sind am Erfolg jedes einzelnen Projektes beteiligt. Auch langfristig: Zwei Drittel der Belegschaft sind Aktionäre.',
    link: '/agentur',
    linkText: 'Über uns',
  },
];

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
    allImageSharp(filter: { fluid: { originalName: { regex: "/case-study-barbot.png/" } } }) {
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
    render={({ allStagesJson, allMediumPost, allImageSharp, allMembersJson }) => {
      const { imageSrc, imageAlt, title, contentBlocks, link, linkText } = allStagesJson.edges[0].node;
      const caseImage = allImageSharp.edges[0].node.fluid;
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
            <Button url={link} text={linkText} isPrimary />
          </Stage>

          <TeaserList>
            {teasers.map((teaser) => (
              <Teaser key={teaser.title} title={teaser.title} subline={teaser.subline}>
                <p>{teaser.description}</p>
                <Button url={teaser.link} text={teaser.linkText} isWhite hasBorder />
              </Teaser>
            ))}
          </TeaserList>

          <CaseTeaser
            url="/cases/bar-bot"
            title="Das Schweizerische Bundesarchiv als Chatbot"
            subline="Chatbot Case"
            image={{
              src: caseImage,
              alt: 'Schweizerisches Budnesarchiv',
            }}
            allProjects
          >
            <p>
              {`Für das Schweizerische Bundesarchiv haben wir in Zusammenarbeit mit Microsoft einen Chatbot entwickelt,
welcher Webseitenbesucher bei der Recherche im Bundesarchiv unterstützen soll.`}
            </p>
          </CaseTeaser>

          <MediumTeaser posts={allMediumPost} />
        </DefaultLayout>
      );
    }}
  />
);

export default Index;
