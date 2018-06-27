import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../components/atoms';
import { CaseTeaser, Stage, Teaser } from '../components/molecules';
import { MediumTeaser, TeaserList } from '../components/organisms';

const teasers = [
  {
    title: 'Zukunftsweisende Technologien',
    subline: 'Langjährige Erfahrung',
    description:
      'Wir verfügen über viel Erfahrung, inbesondere in Node.js, React, Angular, D3.js, GraphQL, Symfony, .NET Core, Docker, Kubernetes und Elasticsearch.',
    link: 'https://blog.smartive.ch',
    linkText: 'Blog',
  },
  {
    title: 'Ein kompetenter Ansprechpartner',
    subline: 'Ein Projekt, ein Team',
    description:
      'An einem Projekt arbeiten immer mehrere Entwickler. Ein Entwickler mit langjähriger Projektleitungserfahrung übernimmt den Lead und garantiert die direkte Kommunikation mit viel technischem Know-How.',
    link: '/projekte',
    linkText: 'Projekte',
  },
  {
    title: 'Alle sind beteiligt',
    subline: 'Am Erfolg jedes Projektes interessiert',
    description:
      'Wir kennen keine klassischen Hierarchien. Alle sind am Erfolg jedes einzelnen Projektes beteiligt. Auch langfristig: Zwei Drittel der Belegschaft sind Aktionäre.',
    link: '/agentur',
    linkText: 'Agentur',
  },
];

const Index = ({ data }) => {
  const stageData = data.allStagesJson.edges[0].node;
  const caseImage = data.allImageSharp.edges[0].node.resize.src;

  return (<div>
    <Stage
      modifiers={['landing-page', 'left-highlighted']}
      image={{
        src: stageData.imageSrc.childImageSharp.original.src,
        alt: stageData.imageAlt,
      }}
      title={
        <h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />
      }
    >
      {stageData.contentBlocks.map(block =>
        <p key={block.id}>{block.value}</p>,
      )}
      {console.log(stageData)}
      <Button url={stageData.link} text={stageData.linkText} isPrimary />
    </Stage>

    <TeaserList>
      {teasers.map(teaser =>
        (<Teaser key={teaser.title} title={teaser.title} subline={teaser.subline}>
          <p>
            {teaser.description}
          </p>
          <Button url={teaser.link} text={teaser.linkText} />
        </Teaser>),
      )}
    </TeaserList>

    <CaseTeaser
      url="/cases/migros-filialfinder"
      title="Auf der Suche nach der nächsten Migros Filiale"
      subline="Case"
      image={{
        src: caseImage,
        alt: 'Auf der Suche nach der nächsten Migros Filiale',
      }}
      allProjects
    >
      <p>
        Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den
        neuen Filialfinder umgesetzt.
      </p>
    </CaseTeaser>

    <MediumTeaser posts={data.allMediumPost} />
  </div>);
};

Index.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
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
    allStagesJson(filter: {siteTitle: {eq: "Index"}}) {
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
              original {
                src
              }
            }
          }
          imageAlt
          link
          linkText
        }
      }
    }
    allImageSharp(filter: {id: {regex: "/case-study-migros.png/"}}) {
      edges {
        node {
          id
          resize(width: 1025) {
            src
          }
        }
      }
    }
  }
`;
