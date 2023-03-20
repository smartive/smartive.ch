import { Button, Copy, Grid, Heading3, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';

import { Image } from '../../../../../components/image';
import { Testimonial } from '../../../../../components/testimonial';
import { PageHeader } from '../../../../../compositions/page-header';
import { Quote } from '../../../../../data/quotes';
import Quotes from '../../../../../data/quotes.json';
import { LandingPage } from '../../../../../layouts/landing-page';
import { Section } from '../../../../../layouts/section';

type Props = {
  quote: Quote;
};

const Page: NextPage<Props> = ({ quote }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Vermögensverwaltung like it’s 2023"
        description="Vermögensverwaltung like it’s 2023"
        tags={[
          { short: 'BOSW23', full: 'Eingabe Best of Swiss Web 2023' },
          { short: 'Productivity', full: 'Kategorie Productivity' },
        ]}
      >
        <Copy>
          <strong>ZWEI ist der Missing Link zwischen Vermögen und Lebenszielen.</strong> Die neuartige digitale Plattform
          verbindet Anleger*innen, Berater*innen von ZWEI Wealth und Vermögensverwalter*innen und stellt allen Werkzeuge zur
          Verfügung, um schneller und transparenter an ihr Ziel zu kommen:
        </Copy>

        <Copy as="div">
          <UnorderedList
            items={[
              <>
                Anleger*innen{' '}
                <span className="font-normal">
                  können das beste Angebot auswählen, behalten den Überblick über ihre Finanzen und gewinnen Transparanz und
                  saubere Planung – unabhängig davon, welche Banken und Asset Manager dieses verwalten.
                </span>
              </>,
              <>
                Berater*innen{' '}
                <span className="font-normal">
                  haben Zugriff auf alle Ressourcen, werden dadurch speditiver beim Ausüben ihrer Matching-Magie.
                </span>
              </>,
              <>
                Vermögensverwalter*innen{' '}
                <span className="font-normal">
                  publizieren ihre Offerten über ein einfaches Interface und kriegen wertvolles Feedback zu ihrem Angebot.
                </span>
              </>,
            ]}
          />
        </Copy>

        <div className="mt-20">
          <Image
            priority
            src="/images/awards/bosw/2023/zwei-keyvisual.jpg"
            alt="ZWEI Wealth Vermögensplattform"
            width={1504}
            height={667}
          />
        </div>
      </PageHeader>

      <main>
        <Section>
          <Copy>
            Die digitale Plattform für Kund*innen und Asset Manager ermöglicht reibungslose Abläufe, von denen alle
            Beteiligten profitieren.
          </Copy>

          <Grid cols={4}>
            <TextBlock title="" number={5} unit="Mrd.">
              CHF optimierte Vermögenswerte
            </TextBlock>
            <TextBlock title="" number={67} unit="%">
              durchschnittlich erzielte Rendite-Verbesserungen
            </TextBlock>
            <TextBlock title="" number={34} unit="%">
              durchschnittliche Kosteneinsparungen
            </TextBlock>
            <TextBlock title="" number={436}>
              geprüfte Banken und Vermögensverwalter
            </TextBlock>
          </Grid>
        </Section>

        <Section title="In ZWEI mal ZWEI Schritten zum Erfolg">
          <Copy>
            <strong>Eva steht Mitten im Leben.</strong> Das Business läuft und sie hat zwei Kinder. Also wenig Zeit. Sie
            möchte ihr Vermögen und ihre Lebensplanung in Einklang bringen: Der Lebensunterhalt soll gesichert, den Kindern
            eine finanzielle Starthilfe ermöglicht werden, aber auch für den Kauf einer Liegenschaft und karitative Zwecke
            soll genügend Liquidität vorhanden sein.
          </Copy>

          <video controls className="w-full rounded">
            <source src="/images/awards/bosw/2023/zwei-explained.mp4" type="video/mp4" />
          </video>

          <Grid cols={2} className="!auto-rows-auto !mt-16">
            <div>
              <Heading3>1</Heading3>
              <Copy>
                <strong>Eva klopft bei ZWEI Wealth an.</strong> Die Expertin von ZWEI Wealth hilft Eva, ihre Ziele zu
                definieren, woraus sich die Charakteristiken der Portfolios ergeben.
              </Copy>
              <Copy>
                <strong>Der Clou:</strong> Die Portfolios werden nicht mit teuren Finanzprodukten bestückt (wovon die Bank am
                meisten profitiert), sondern auf dem Marktplatz der ZWEI Wealth Plattform ausgeschrieben.{' '}
              </Copy>
            </div>
            <div>
              <Heading3>2</Heading3>
              <Copy>
                <strong>Auf dem ZWEI Marktplatz</strong> tummeln sich 400 Banken und Vermögensverwalter. Diese bewerben sich
                nun um die Portfolios der Kundin.
              </Copy>
              <Copy>
                <strong>It’s a match!</strong> Eva wählt ihre Favoriten (Nr. 2, weil sie an die Zukunft von Schweizer Firmen
                glaubt, und Nr. 3, weil die nachhaltigere Herangehensweise sie überzeugt). Sie legen Evas Geld deutlich
                günstiger an, als wenn sie zur nächstbesten Bank gegangen wäre.
              </Copy>
            </div>
            <div>
              <Image
                src="/images/awards/bosw/2023/zwei-portfolios.jpg"
                alt="ZWEI Wealth Portfolio Screen"
                width={720}
                height={453}
              />
            </div>
            <div>
              <Image
                src="/images/awards/bosw/2023/zwei-cost-overview.jpg"
                alt="ZWEI Wealth Mobile App"
                width={720}
                height={453}
              />
            </div>
            <div>
              <Heading3>3</Heading3>
              <Copy>
                <strong>Alles so übersichtlich hier!</strong> Auf der Plattform kann sich Eva jederzeit einloggen und sehen,
                wie es um ihr Vermögen steht – und zwar komplett unabhängig davon, wie viele Banken und Vermögensverwalter
                ihre Portfolios verwalten und inklusive ihrer Liegenschaften und Unternehmensanteile. Endlich alles an einem
                Ort!
              </Copy>
            </div>
            <div>
              <Heading3>4</Heading3>
              <Copy>
                <strong>Continuous improvement:</strong> Die Anlagestrategie des Gesamt-Vermögens wird regelmässig von der
                ZWEI Expertin überprüft und bei Bedarf angepasst. Und sollte ein Vermögensverwalter nicht mehr passen, wird
                das Portfolio erneut ausgeschrieben.
              </Copy>
            </div>
          </Grid>
          <Copy>
            <strong>Die ZWEI Plattform ist der Schlüssel zur passenden Anlagestrategie, vom Ziel her gedacht.</strong> Sie
            macht Eva unanbhägig von einzelnen Banken und verschafft ihr die nötige Gesamtsicht. Sie profitiert von einer
            qualitativ hochwertigeren und günstigeren Dienstleistung. Dafür sorgt die Wettbewerbssituation auf dem
            Marktplatz. So lässt es sich auch in turbulenten Phasen ruhig schlafen.
          </Copy>
        </Section>

        <Section>
          <Testimonial background="apricot" quote={quote} />
        </Section>

        <Section title="Massgeschneidert verbunden">
          <Copy>
            ZWEI Wealth hat ein steiles Wachstum hinter sich. Als klar war, dass digitale Hausmittel wie Excel und Mails an
            ihre Grenzen stossen, hat smartive für ZWEI eine Plattform entwickelt, die alle Beteiligten verbindet:
            Anleger*innen, Expert*innen von ZWEI und externe Asset Manager.
          </Copy>
          <Copy>
            Damit können interne und externe Abläufe vereinfacht und beschleunigt werden. Statt 30–40 Kunden kann eine
            Beraterin von ZWEI nun 50-60 Kunden betreuen – und gleichzeitig Fehler vermeiden. Die Plattform kümmert sich
            darum, dass alle Beteiligten Zugriff auf die relevanten Daten haben.
          </Copy>
          <Copy>
            Die zentrale, strukturierte Verfügbarkeit von Daten erschliesst auch neue Use Cases. So werden verschiedene Cases
            vergleichbar und Asset Manager können sich gegenseitig messen.
          </Copy>
          <UnorderedList
            items={[
              'Statt 30–40 Kunden kann eine Beraterin von ZWEI nun 50-60 Kunden betreuen',
              'Viel weniger Fehleranfällig als vorher mit handgestrickten Tabellen',
              'Asset Manager haben immer den Überblick und müssen Daten für die Ausschreibung nicht immer wieder neu eingeben',
              'Import aller Finanzinformation zu Benchmarking über Schnittstelle',
              'Die Plattform dient auch als Dokumentenablage – alle Berechtigten haben Zugriff auf die Informationen, die für sie relevant sind',
              'Zentrale Verfügbarkeit von Daten eröffnet neue Use Cases',
            ]}
          />
        </Section>

        <Section>
          <div className="text-center">
            <Button as="a" href="/awards/bosw/2023">
              zurück zur Übersicht
            </Button>
          </div>
        </Section>
      </main>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      quote: Quotes['pascal-zwei-bosw'],
    },
  };
};

export default Page;
