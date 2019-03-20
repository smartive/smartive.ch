import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import { DefaultLayout } from '../../components/layout';
import { CaseBlock, Facts, Stage, PersonalContact } from '../../components/molecules';

const archiveBotQuery = graphql`
  query ArchiveBotQuery {
    allStagesJson(filter: { siteTitle: { eq: "Archiv-Bot" } }) {
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
    allImageSharp(filter: { fluid: { originalName: { regex: "/(chatflow|nlp|sdk)/" } } }) {
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

const ArchiveBotCase = () => (
  <StaticQuery
    query={archiveBotQuery}
    render={({ allStagesJson, allImageSharp, allContactsJson }) => {
      const stageData = allStagesJson.edges[0].node;
      const chatFlowImg = allImageSharp.edges[2].node.fluid;
      const nlpImg = allImageSharp.edges[1].node.fluid;
      const sdkImg = allImageSharp.edges[0].node.fluid;
      const {
        name: contactName,
        phone: contactPhone,
        mail: contactMail,
        image: contactImage,
      } = allContactsJson.edges[0].node;

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
              {stageData.contentBlocks.map((block) => (
                <p key={block.id} dangerouslySetInnerHTML={{ __html: block.value }} />
              ))}
            </div>
          </Stage>

          <div className="container">
            <Facts title="Technologie">
              <ul>
                <li>Umsetzung mit TypeScript</li>
                <li>Microsoft Bot Builder SDK für Node.js</li>
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
            graphic={<Img fluid={nlpImg} alt="NLP Framework für ein natürliches Sprachverständnis" />}
            isReverse
          >
            <p>
              Der Bot wird unterstützt durch LUIS - dem Language Understanding Intelligent Service welcher Teil der Microsoft
              Cognitive Services ist. LUIS analysiert Texteingaben von Benutzern mittels Natural Language Processing (NLP)
              und liefert dem Bot einen Intent - also eine Absicht - des Benutzers. Auf diese Absichten kann der Bot wiederum
              reagieren und dem Benutzer antworten. Diese Absichten können in einem Online GUI von Microsoft verwaltet,
              trainiert und veröffentlicht werden.
            </p>
          </CaseBlock>

          <CaseBlock
            title="Microsoft Bot Builder SDK"
            subtitle="Fokus aufs Wesentliche"
            graphic={<Img fluid={sdkImg} alt="Bot Builder SDK als Toolkit" />}
          >
            <p>
              Das Microsoft Bot Builder SDK abstrahiert und vereinheitlicht die Schnittstellen üblicher Chats wie Skype,
              Slack oder auch Chats auf einer Website und erlaubt die Entwicklung von Bots in C# oder Node.js. Somit kann bei
              der Entwicklung der Fokus auf die User Experience und das Dialogdesign - sprich auf die Implementation des Bots
              selbst - gelegt werden.
            </p>
          </CaseBlock>

          <PersonalContact
            name={contactName}
            mail={contactMail}
            phone={contactPhone}
            img={contactImage.childImageSharp.fluid}
          />
        </DefaultLayout>
      );
    }}
  />
);

export default ArchiveBotCase;
