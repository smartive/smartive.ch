import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Stage } from '../../components/molecules';

const barBotQuery = graphql`
  query BarBotQuery {
    allStagesJson(filter: { siteTitle: { eq: "BARBot" } }) {
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
              resize(width: 1025) {
                src
              }
            }
          }
          imageAlt
        }
      }
    }
    allImageSharp(filter: { fluid: { originalName: { regex: "/(chatflow|nlp|sdk)/" } } }) {
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

const BarBotCase = () => (
  <StaticQuery
    query={barBotQuery}
    render={({ allStagesJson, allImageSharp }) => {
      const stageData = allStagesJson.edges[0].node;
      const chatFlowImg = allImageSharp.edges[2].node.fluid;
      const nlpImg = allImageSharp.edges[1].node.fluid;
      const sdkImg = allImageSharp.edges[0].node.fluid;

      return (
        <DefaultLayout>
          <Stage
            modifiers={['gradient', 'case']}
            image={{
              src: stageData.imageSrc.childImageSharp.resize.src,
              alt: stageData.imageAlt,
            }}
            title={<h1 dangerouslySetInnerHTML={{ __html: stageData.title }} />}
          >
            <div>
              {stageData.contentBlocks.map((block) => (
                <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />
              ))}
            </div>
          </Stage>

          <div className="container">
            <Facts title="Technologie">
              <ul>
                <li>Umsetzung mit TypeScript 2.6</li>
                <li>Microsoft Bot Builder SDK 3 für Node.js</li>
                <li>Continuous Integration und Continuous Deployment mit GitLab CI</li>
                <li>Cloud - Infrastruktur auf Microsoft Azure</li>
              </ul>
            </Facts>
          </div>

          <CaseBlock
            title="Dialoggestützte Benutzerführung"
            subtitle="Für einen klaren Navigationsfluss"
            graphic={<Img fluid={chatFlowImg} alt="Chatbot Navigationsfluss" />}
          >
            <p>
              Der Bot leitet Besucher der Webseite mittels geführten Dialogen zu ihrem Ziel und ist eine benutzerfreundliche
              Alternative zu überwältigenden Suchmasken. Dafür stellt der Bot gezielte Fragen und bietet vorgefertigte
              Antwortmöglichkeiten um den Navigationsfluss so einfach wie möglich zu halten.
            </p>
          </CaseBlock>

          <CaseBlock
            title="LUIS"
            subtitle="Natürliches Sprachverständnis"
            graphic={<Img fluid={nlpImg} alt="Funktionalitäten der CRM Applikation" />}
            isReverse
          >
            <p>
              Der Bot wird unterstützt durch LUIS - dem Language Understanding Intelligent Service welcher Teil der Microsoft
              Cognitive Services. LUIS analysiert Texteingaben von Benutzern mittels Natural Language Processing(NLP) und
              liefert dem Bot einen Intent - also eine Absicht - des Benutzers. Auf diese Absichten kann der Bot wiederum
              reagieren und dem Benutzer antworten. Diese Absichten können in einem Online GUI von Microsoft verwaltet,
              trainiert und veröffentlicht werden.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Microsoft Bot Builder SDK"
            subtitle="Fokus aufs Wesentliche"
            graphic={<Img fluid={sdkImg} alt="Funktionalitäten der CRM Applikation" />}
          >
            <p>
              Das Microsoft Bot Builder SDK abstrahiert und vereinheitlicht die Schnittstellen üblicher Chats wie Skype,
              Slack oder auch Chats auf einer Website und erlaubt die Entwicklung von Bots in C# oder Node.js. Somit kann bei
              der Entwicklung der Fokus auf die User Experience und das Dialogdesign - sprich auf die Implementation des Bots
              selbst - gelegt werden.
            </p>
          </CaseBlock>
        </DefaultLayout>
      );
    }}
  />
);

export default BarBotCase;
