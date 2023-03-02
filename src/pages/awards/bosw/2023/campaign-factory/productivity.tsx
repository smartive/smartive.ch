import { BlobVariations, Card, Copy, Grid, Heading2, Heading3, LinkList, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextImage from 'next/legacy/image';
import { Image } from '../../../../../components/image';
import React, { FC, ReactNode } from 'react';
import { Testimonial } from '../../../../../components/testimonial';
import { PageHeader } from '../../../../../compositions/page-header';
import { Quote } from '../../../../../data/quotes';
import Quotes from '../../../../../data/quotes.json';
import { Link } from '../../../../../elements/link';
import { LandingPage } from '../../../../../layouts/landing-page';
import { Section } from '../../../../../layouts/section';

type Props = {
  quote: Quote;
};

const Page: NextPage<Props> = ({ quote }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Migros Campaign Factory: _Gewinnen_ as a Service"
        description="Migros Campaign Factory: Gewinnen as a Service"
        tags={[
          { short: 'BOSW23', full: 'Eingabe Best of Swiss Web 2023' },
          { short: 'Productivity', full: 'Kategorie Productivity' },
        ]}
      >
        <Copy>
          Das orange M umfasst Alnatura und Denner, Ex Libris und Micasa, Cumulus und M-Budget, Kulturprozent und Klubschule,
          zehn Genossenschaften, den Genossenschafts-Bund und… noch einige mehr. Und alle haben etwas zu bewerben.
        </Copy>
        <Copy>
          Damit nicht jede Kampagne im Migros-Universum wieder bei null beginnen muss (und alle Stadien von Ideation und
          Konzept über Design, Texte, Umsetzung bis Auswertung ein weiteres Mal durchläuft), haben smartive und Migros
          gemeinsam in einem Co-Creation-Team die Campaign Factory aus dem Boden gestampft –{' '}
          <strong>ein Deluxe-Baukasten für Kampagnen aller Art</strong>.
        </Copy>
        <Image
          priority
          src="/images/awards/bosw/2023/mdcf-keyvisual.jpg"
          alt="Eine Kampagne aufsetzen wird zum Spaziergang"
          width={1504}
          height={1003}
        />
        <Copy>
          Die Campaign Factory besticht durch ihre einfache Benutzbarkeit: Aus vorgefertigten Formaten wird mit minimalem
          Aufwand eine hochwertige Kampagne. Programmierkenntnisse sind dafür nicht nötig. Bilder hochladen, Texte punktuell
          anpassen, Preise konfigurieren und los geht’s. Neuentwicklungen und komplizierte Inhaltsaufbereitung werden
          überflüssig.
        </Copy>
        <Copy>
          In nur einem Jahr wurden bereits Dutzende Kampagnen mit Millionen Teilnahmen durchgeführt. So schnell konnte so
          einfach noch nie so günstig eine so hochwertige Kampagne gestartet werden.
        </Copy>
        <Copy as="div">
          <Card background="cornflower">
            <div className="p-4">
              <Heading3 className="!mb-4">Probieren geht über beschreibieren!</Heading3>
              <Copy className="!my-0">
                Lieber selber ausprobieren? Hierlang:{' '}
                <Link href="https://digital-campaign-factory.migros.ch/">Digital Campaign Factory</Link>
              </Copy>
            </div>
          </Card>
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Dezember? Kalender!</Heading2>
          <Copy>
            It was that time of the year. Adventskalender gehören einfach dazu! Famigros hat vorgemacht wie’s geht: Der
            Adventskalender 2022 wurde mit fast zwei Millionen Teilnahmen zum Hit. Vielleicht ja, weil mehr Budget für Preise
            übrig blieb, da der Kalender so einfach aufzusetzen war?
          </Copy>
          <Copy>
            Dank Analytics wissen wir auch: 98% derer, die mit dem Widget interagieren, füllen das Teilnahmeformular aus. Die
            Spiele fangen die Aufmerksamkeit. Und die Preise, im Nu hinzufügt und mit Bild und Sponsorlink aufbereitet,
            animieren zum Mitmachen. An einer komfortablen Gewinnerziehung wird bereits mit Hochdruck gearbeitet.
          </Copy>
          <LinkList
            links={[
              {
                href: 'https://digital-campaign-factory.migros.ch/calendar/yfBCn465ProrolLuUeNt',
                label: 'Selbst ausprobieren und Kalender konfigurieren!',
              },
              {
                href: 'https://corporate.migros.ch/de/wettbewerbe/test-widget-kalender-BOSW.html',
                label: 'Zur Endnutzeransicht',
              },
            ]}
          />
        </Section>

        <Section>
          <Grid cols={3}>
            <TextBlock title="Teilnahmen" number={1.9} unit="Mio.">
              Den Rekord hält der Famigros-Adventskalender
            </TextBlock>
            <TextBlock title="neue Newsletter-Abos" number={65000}>
              In nur einem Jahr so viele Abos wie Leute in Lugano leben
            </TextBlock>
            <TextBlock title="Conversion Rate" number={98} unit="%">
              KPI heaven! 3% mehr und es wäre Betrug.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quote} />
        </Section>

        <Section>
          <Grid cols={3}>
            <div>
              <Heading3>No code, full control</Heading3>
              <Copy>
                Programmierkenntnisse sind nicht nötig – Texte übernehmen oder abändern, Bilder hochladen, Startdatum
                eintragen,{' '}
                <Link href="https://digital-campaign-factory.migros.ch/calendar/yfBCn465ProrolLuUeNt/code">
                  Kauderwelsch kopieren
                </Link>{' '}
                – Kampagne läuft.
              </Copy>
            </div>
            <div>
              <Heading3>Sehen wie’s aussieht…</Heading3>
              <Copy>
                Was wird das, wenn’s fertig ist? Kein Geheimnis: Mit einem Klick auf{' '}
                <Link href="https://digital-campaign-factory.migros.ch/calendar/yfBCn465ProrolLuUeNt/preview">Vorschau</Link>{' '}
                kann jederzeit die Enduser-Sicht eingenommen und alle Szenarien durchgespielt werden.
              </Copy>
            </div>
            <div>
              <Heading3>…und wie’s ankommt</Heading3>
              <Copy>
                Analytics inbegriffen: Die Campaign Factory wertet auch gleich aus, wie die Kampagne gelaufen ist (
                <Link href="https://digital-campaign-factory.migros.ch/calendar/yfBCn465ProrolLuUeNt">
                  im Tab «Auswertung»
                </Link>
                ). Und Product Manager sehen sogar eine Auswertung über alle Kampagnen.
              </Copy>
            </div>
            <div>
              <Heading3>Style stimmt standardmässig</Heading3>
              <Copy>
                Blau, fett, Helvetica – oder orange mit Schnörkeln: Das passende Theme für über ein Dutzend Plattformen ist
                schon drin. Das Design System der Migros ist mit von der Partie und garantiert eine klare Linie.
              </Copy>
            </div>
            <div>
              <Heading3>Ein Spielchen spricht alle an</Heading3>
              <Copy>
                Wer sagt schon nein zu Spass und Spiel? Ein Dreh am Glücksrad, ein Tic Tac Toe gegen den Computer oder ein
                Memory gegen das eigene Gedächtnis zieht alle in den Bann.
              </Copy>
            </div>
            <div>
              <Heading3>Vieles möglich, alles einfach</Heading3>
              <Copy>
                Für alle, gross und klein, tralalala ist was dabei: Ein kleines Quiz, ein grosser Fotowettbewerb oder gleich
                ein Kalender mit Tictactoe und iPad im Türchen? Konfiguriert sind alle in Minuten.
              </Copy>
            </div>
          </Grid>
        </Section>

        <Section title="Das Foto-Quiz-Kalender-Spiel-Paket">
          <Copy>
            Die Campaign Factory ist zwar produktiv wie eine Fabrik, dabei aber so vielfältig wie das Migros-Sortiment.
            Verschiedene Widget-Typen decken verschiedene Use Cases ab – als Herzstück der Kampagne oder zusätzliches
            Schmankerl. Aber alle animieren die User zur Teilnahme und machen es einfach, Conversions zu generieren.
          </Copy>

          <Grid cols={2} className="gap-12 lg:20">
            {[
              {
                headline: 'Quiz/Umfrage',
                copy: 'Preise für die Besten oder Feedback mit einer Meinungsumfrage',
                widgetType: 'quiz',
              },
              { headline: 'Kalender', copy: 'Täglich ein neuer Wettbewerb mit Games und Gewinnen', widgetType: 'calendar' },
              {
                headline: 'Memory',
                copy: 'Das klassische Gedächtnisspiel, inkl. Zeitmessung oder Countdown',
                widgetType: 'memory',
              },
              {
                headline: 'Fotowettbewerb',
                copy: <>User laden Fotos hoch, Kampagnen&shy;verantwortliche geben sie frei, dann wird gevotet.</>,
                widgetType: 'photo',
              },
              {
                headline: 'Code einlösen',
                copy: 'Vom Warenkorb via QR-Code in den Preisziehungstopf, plus Sofortpreise',
                widgetType: 'code',
              },
              { headline: 'Glücksrad', copy: 'Wer landet auf dem güldnen Feld mit dem Hauptpreis?', widgetType: 'wheel' },
              {
                headline: 'Tic Tac Toe',
                copy: 'Simpel, aber unterhaltam – Gewinnst du gegen den Computer?',
                widgetType: 'tictactoe',
              },
            ].map((data) => (
              <Widget {...data} key={data.widgetType} />
            ))}
          </Grid>
        </Section>

        <Section title="Lego und Migros? Logo!">
          <Copy>
            Das Lego-Taxi direkt in die Migros-Welt hat ordentlich Fahrt aufgenommen: 900 Familien haben ein Migros-Produkt
            mit Lego nachgebaut. Dank Fotowettbewerb-Widget war das Aufsetzen des Wettbewerbs ein Legospiel: Famigros-Theme
            ausgewählt, Texte angepasst, Optionen festgelegt und ab die Legos.
          </Copy>
          <Copy>
            Jackpot! Einen weniger aufwendigen Weg, um Gross und Klein anzusprechen, Kreativität freizusetzen und den eigenen
            Brand mit Spiel und Spass zu verbinden, gibt es wohl kaum. Und der User Generated Content kann sich sehen lassen:
          </Copy>

          <div className="mt-16 lg:mt-24">
            <Image
              src="/images/awards/bosw/2023/mdcf-lego.jpg"
              alt="Einsendungen des Lego-Fotowettbewerbs"
              width={1504}
              height={851}
            />
          </div>
        </Section>

        <Section title="Spart Zeit. Und Geld.">
          <Copy>
            <strong>Zeitsparen zahlt sich aus!</strong> Mit der Campaign Factory sparen Kampagnen&shy;verantwortliche in der
            Migros nicht nur Zeit, sondern auch Geld (und Nerven). Und das ohne Abstriche bei Zielgruppenorientierung und
            Qualität der Kampagnen.
          </Copy>
          <Image
            src="/images/awards/bosw/2023/mdcf-saves-time.svg"
            alt="Campaign Factory spart Zeit"
            width={1504}
            height={560}
          />
          <Copy>
            <strong>Alles drin:</strong> Die Campaign Factory bündelt alles, was eine gute Kampagne ausmacht, zu einem
            attraktiven Paket. Kreieren und Konfigurieren, Monitoring und Anpassungen während der Kampagne, Kundenkontakte
            und Auswertung nach Abschluss laufen zu einem grossen Teil über ein einziges Tool.
          </Copy>
          <UnorderedList
            markerColor="apricot"
            items={[
              <>
                Lass das Übersetzungsbüro ausschlafen:
                <span className="font-normal">
                  {' '}
                  Stimmige Vorlagentexte inkl. Übersetzungen in vier Sprachen bereits vorhanden
                </span>
              </>,
              <>
                Ausgereiftes Nutzererlebnis
                <span className="font-normal"> – für Kampagnen&shy;verantwortliche und Enduser</span>
              </>,
              <>
                Technische Herausforderungen? Einmal gelöst für alle.
                <span className="font-normal">
                  {' '}
                  Über Datenhaltung, Anbindung ans Migros-Login und E-Mail-Versand für Benachrichtigungen müssen sich
                  Kampagnen&shy;verantwortliche keinen Kopf mehr machen.
                </span>
              </>,
              <>
                Analytics von Anfang an mitgedacht:
                <span className="font-normal"> KPIs zeigen transparent, was funktioniert hat.</span>
              </>,
              <>
                Co-Creation ist Programm:{' '}
                <span className="font-normal">
                  Weitere Bearbeiter*innen können mit zwei Klicks hinzugefügt werden, denn was die Campaign Factory weiter
                  gebracht hat, bringt auch Kampagnen weiter.
                </span>
              </>,
              <>
                <em>Fixfertig</em> und <em>massgeschneidert</em> sind neu beste Freund*innen:{' '}
                <span className="font-normal">
                  Vorgefertigte Formate und sinnvolle Vorgaben lassen sich durch vielfältige Konfigurationsmöglichkeiten mit
                  minimalem Aufwand in Aussehen, Wording und Funktionsweise perfekt in die Zielumgebung einpassen.
                </span>
              </>,
            ]}
          />
        </Section>
      </main>
    </LandingPage>
  );
};

const Widget: FC<{ headline: string; copy: ReactNode; widgetType: string }> = ({ headline, copy, widgetType }) => (
  <div className="flex gap-10 items-center">
    <div className="flex-shrink-0">
      <NextImage src={`/images/awards/bosw/2023/mdcf-${widgetType}.png`} alt={headline} width={120} height={120} />
    </div>
    <div className="flex flex-col">
      <Heading3 className="!mb-2">{headline}</Heading3>
      <Copy className="!my-0">{copy}</Copy>
    </div>
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      quote: Quotes['coco-mdcf'],
    },
  };
};

export default Page;
