import { BlobVariations, Copy, Grid, Link, PageSection, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import { Testimonial } from '../components/testimonial';
import { PageHeader } from '../compositions/page-header';
import Employees from '../data/employees.json';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Page } from '../layouts/page';

const textBlocks = [
  {
    title: 'Advice Process',
    content:
      'Bei smartive können alle Entscheide treffen – zu jedem Thema. Vorausgesetzt, sie hören sich zuerst das Feedback der betroffenen Personen an und übernehmen die Verantwortung für die Entscheidung. Dafür nutzen wir den Advice Process.',
  },
  {
    title: 'Weiterbildung',
    content:
      'Digitale Technologien sind unsere Leidenschaft. Darum stehen allen Mitarbeitenden jährlich 12.5 Tage oder 12’500 Fr. für Fortbildung zur freien Verfügung. Einmal im Monat lassen wir uns von einer Kollegin oder einem Kollegen etwas vorstellen – sei es ein neues Frontend-Framework oder Meditationstechniken.',
  },
  {
    title: 'Code Retreat',
    content:
      'Einmal im Jahr ziehen wir uns ein paar Tage zurück, um uns mit Themen auseinanderzusetzen, die uns am Herzen liegen – von AI bis Bierbrauen, von Supernova bis Design Sprint, von technisch über alltäglich bis hin zu wissenschaftlich. Der Code Retreat bietet Raum für Diskussionen und ermöglicht das Zusammensein ausserhalb des Büros.',
  },
  {
    title: 'Lohn & Bonus',
    content:
      'Wir verhandeln keine Löhne, sondern setzen auf ein transparentes, faires Lohnsystem: Lohn = Basislohn + Ausbildung + Erfahrung + Firmentreue. Dazu kommt mindestens ein Drittel des Gewinns zu gleichen Teilen allen Mitarbeitenden zugute.',
  },
  {
    title: 'Organisiert auf Augenhöhe',
    content:
      'Wir pflegen eine Kommunikation auf Augenhöhe. Eine offene Feedback-Kultur schafft Raum für Innovation und Kreativität. ',
  },
  {
    title: 'Vaterschaftsurlaub',
    content:
      'Zwei Wochen Vaterschaftsurlaub sind schön. Besser finden wir allerdings vier Wochen, wie es bei uns gehandhabt wird. ',
  },
];

type Props = {
  quote: Quote;
};

const Agentur: NextPage<Props> = ({ quote }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Wir sind _smartive_. Wir stehen für digitale Lösungen und eine bizli andere Firmenkultur."
        description="Wir wollen einen Ort schaffen, an dem wir nicht nur arbeiten, sondern auch Freundschaft und Freiheit leben. Mit Platz für verschiedene Persönlichkeiten, Interessen und Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres Potenzials."
      >
        <Copy>
          Chefgehabe ist uns so fremd wie komplexe Hierarchien und Gärtchendenken. Herausforderungen werden gemeinsam
          angegangen, Probleme offen angesprochen und gelöst. Wir wollen einen Ort schaffen, an dem wir nicht nur arbeiten,
          sondern auch Freundschaft und Freiheit leben. Mit Platz für verschiedene Persönlichkeiten, Interessen und
          Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres Potenzials.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded bg-mint-200"
              src="/images/mood/dominique-lab-finger.jpg"
              alt="smartive Mitarbeiter mit einem Schild auf dem smartive beworben wird"
              objectFit="cover"
              width={720}
              height={380}
            />
            <div className="hidden md:block md:col-start-2 md:row-span-2 relative">
              <Image
                className="rounded bg-mint-200"
                src="/images/mood/YB_06742.jpg"
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="block md:hidden">
              <Image
                className="rounded bg-mint-200"
                src="/images/mood/YB_06742.jpg"
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                width={720}
                height={500}
              />
            </div>
            <Image
              className="rounded bg-mint-200"
              src="/images/mood/robert-dife-close-up.jpg"
              alt="smartive Mitarbeiter hält einen Vortrag vor mehreren Leuten"
              objectFit="cover"
              width={720}
              height={500}
            />
          </Grid>
          <Grid cols={3}>
            {textBlocks.map(({ title, content }) => (
              <TextBlock key={title} title={title}>
                {content}
              </TextBlock>
            ))}
          </Grid>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[0]} quote={quote} />
          <Grid cols={2}>
            <Image
              className="rounded bg-mint-200"
              src="/images/mood/code-retreat-hackday.jpg"
              alt="smartive Team am arbeiten an einem Tisch im freien mit dem Valle Verzasca im Hintergrund"
              objectFit="cover"
              width={720}
              height={380}
            />
            <Image
              className="rounded bg-mint-200"
              src="/images/mood/aescher-gruppenbild.jpg"
              alt="smartive Team bei einer Wanderung mit dem Gasthaus Aescher-Wildkirchli im Hintergrund"
              objectFit="cover"
              width={720}
              height={380}
            />
            <Image
              className="rounded bg-mint-200"
              src="/images/mood/code-retreat-terrasse.jpg"
              alt="smartive Team sitzt auf einer Bank mit blauem Himmel und Thunersee im Hintergrund"
              objectFit="cover"
              width={720}
              height={500}
            />
            <Image
              className="rounded bg-mint-200"
              src="/images/mood/code-retreat-fussball.jpg"
              alt="smartive Team beim Fussballspielen auf einer grünen Wiese"
              objectFit="cover"
              width={720}
              height={380}
            />
            <div className="md:col-span-2">
              <Image
                className="rounded bg-mint-200"
                src="/images/mood/code-retreat-lunch.jpg"
                alt="smartive Team beim Mittagessen im Freien"
                objectFit="cover"
                width={1504}
                height={800}
              />
            </div>
          </Grid>

          <Grid cols={2}>
            <TextBlock title="Fast eine Dekade" number={9}>
              smartive wurde 2012 gegründet. Die Firma ist gewachsen, die Kernidee geblieben: Ein Ort, an dem wir uns alle
              einbringen und so arbeiten, wie es uns entspricht.
            </TextBlock>
            <TextBlock title="Zwölf Teilhaber*innen" number={12} highlightNumber>
              Darauf sind wir stolz: Zwölf unserer {Object.values(Employees).length} Mitarbeitenden besitzen smartive-Aktien.
              Es gibt keine externen Aktionärinnen oder Stakeholder.
            </TextBlock>
            <TextBlock title="Anderthalb Dutzend" number={Object.values(Employees).length}>
              Heute kommen {Object.values(Employees).length} Mitarbeitende in Zürich zusammen und bringen ihre Fähigkeiten
              und ihre Persönlichkeit ein – in Software-Entwicklung, Projektleitung, Design und User Experience.
            </TextBlock>
            <TextBlock title="Erfolgreiche Projekte: dreistellig" number={300}>
              In den letzten Jahren haben wir über 300 Projekte erfolgreich gemeistert. Sowohl in Zusammenarbeit mit{' '}
              <NextLink href="/projekte/subsidia" passHref>
                <Link>Start-Ups</Link>
              </NextLink>{' '}
              als auch mit der{' '}
              <NextLink href="/projekte/migipedia/" passHref>
                <Link>grössten Arbeitgeberin der Schweiz</Link>
              </NextLink>
              .
            </TextBlock>
            <TextBlock title="Aufsteiger des Jahres" number={20}>
              Unsere Projekte werden regelmässig ausgezeichnet. Bei den Best of Swiss Web Awards rangieren wir in den Top 20
              der vergangenen 5 Jahre.
            </TextBlock>
          </Grid>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      quote: Quotes['dominique-kultur'],
    },
  };
};

export default Agentur;
