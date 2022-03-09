import { BlobVariations, Copy, Grid, Heading2, Heading3, Keyfigure, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React, { FC } from 'react';
import { Testimonial } from '../../../../components/testimonial';
import { PageHeader } from '../../../../compositions/page-header';
import { Quote, transformQuote } from '../../../../data/quotes';
import Quotes from '../../../../data/quotes.json';
import { LandingPage } from '../../../../layouts/landing-page';
import { Section } from '../../../../layouts/section';

const ListItem: FC = ({ children }) => (
  <li className="font-sans font-normal text-xs lg:text-base md:max-w-prose my-4 lg:my-8">{children}</li>
);

const CustomerIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5C15 6.32608 14.4732 7.59785 13.5355 8.53553C12.5979 9.47322 11.3261 10 10 10C8.67392 10 7.40215 9.47322 6.46447 8.53553C5.52678 7.59785 5 6.32608 5 5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0V0ZM10 12.5C15.525 12.5 20 14.7375 20 17.5V20H0V17.5C0 14.7375 4.475 12.5 10 12.5Z"
      fill="#7DDDD1"
    />
  </svg>
);

const MigrosIcon: FC = () => (
  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.4174 0L10.7756 10.6098L6.38246 0H0V18.7329H4.72468V7.95735L9.28358 18.8158H11.8531L16.4949 7.95735V18.8158H21.3025V0H15.4174Z"
      fill="#FF6600"
    />
  </svg>
);

type Props = {
  quote: Quote;
};

const Page: NextPage<Props> = ({ quote }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Die Migros-Community schafft Werte"
        description="Die Migros-Community schafft Werte"
        tags={[
          { short: 'BOSW22', full: 'Eingabe Best of Swiss Web 2022' },
          { short: 'Innovation', full: 'Kategorie Innovation' },
        ]}
      >
        <Copy>
          Migipedia, die Migros-Community, ist nicht nur eine Marketing-Spielerei. Sie ist viel mehr als Produktbewertungen,
          Diskussionen, Abstimmungen und Crowdsourcing. Der Community Value Loop schafft Werte. Und zwar durch das
          Zusammenspiel von personalisierten und verhaltensbasierten Kommunikationsmassnahmen. Durch Word of Mouth und
          gezielte Stakeholder-Aktivierung. So profitieren nicht nur Kund*innen, sondern auch die Migros. Als
          Bottom-up-Initiative für noch mehr Kundenfokus wurde der Community Value Loop 2021 lanciert.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Der Community Value Loop</Heading2>
          <Copy>
            Aktivieren, generieren, profitieren – auf diesen Pfeilern basiert der Community Value Loop. Auf der einen Seite
            des Loops stehen Kund*innen, auf der anderen die Migros. Am einfachsten lässt sich der Loop am Beispiel von
            Produktbewertungen beschreiben.
          </Copy>

          <Keyfigure background="mint">
            <Image src="/images/awards/bosw/2022/mcc-value-loop.svg" alt="Keyfigure" width={600} height={600} />
          </Keyfigure>

          <Grid cols={3}>
            <div>
              <Heading3 className="flex flex-row items-center">
                <span className="pr-4">Aktivieren</span> <CustomerIcon />
              </Heading3>
              <Copy>
                Die Verwendung der Cumulus-Karte beim Einkauf ermöglicht der Migros Kund*innen durch personalisierte
                Kommunikation zur Bewertung ihres Einkaufs zu aktivieren. Dazu kommen mehrere, verhaltensbasierte Recommender
                auf Migipedia.ch sowie im sonntäglichen Migros-Newsletter zum Einsatz. Sie schlagen Produkte der letzten
                Einkäufe in Verbindung unterschiedlicher Logiken zur Bewertung vor.
              </Copy>
            </div>

            <div>
              <Heading3 className="flex flex-row items-center">
                <span className="pr-4">Generieren</span> <CustomerIcon />
              </Heading3>
              <Copy>
                Kund*innen werden zu Community-Mitgliedern. Basierend auf personalisierten Produktvorschlägen erfassen sie
                Bewertungen. Dabei kommt keinerlei Incentivierung der Community zum Einsatz. Die Motivation der Community ist
                rein intrinsisch.
              </Copy>
            </div>
            <div>
              <Heading3 className="flex flex-row items-center">
                <span className="pr-4">Profitieren</span> <CustomerIcon />
                <span className="pl-2">
                  <MigrosIcon />
                </span>
              </Heading3>
              <Copy>
                Von den Produktbewertungen profitieren andere Kund*innen beim Treffen von Kaufentscheidungen. Egal ob auf
                Migipedia, dem Online-Produkt-Katalog der Migros oder in einem Onlineshop der Migros-Fachmärkte
                (melectronics, SportXX, …). Die Bewertungen werden auch für Google Shopping-Ads verwendet.
              </Copy>
            </div>
          </Grid>
          <Grid cols={3}>
            <div>
              <Heading3 className="flex flex-row items-center">
                <span className="pr-4">Aktivieren</span> <MigrosIcon />
              </Heading3>
              <Copy>
                Produktverantwortliche, Brand-Manager, Sensorik-Teams sowie Produkt-Entwickler*innen bilden die andere Seite
                des Value Loops. Sie erhalten eine Daily E-Mail, die individuell zusammengestellt wird. Die E-Mail fasst die
                Community-Aktivitäten der letzten 24 Stunden zusammen. Basieren auf den Verantwortlichkeiten bietet sie
                Interaktionsmöglichkeiten mit dem Community-Content.
              </Copy>
            </div>

            <div>
              <Heading3 className="flex flex-row items-center">
                <span className="pr-4">Generieren</span> <MigrosIcon />
              </Heading3>
              <Copy>
                Rückmeldung auf Produkt-Ebene werden beobachtet und gesammelt. Mit dem Migipedia-Backend ist es
                Mitarbeitenden möglich, weitere Auswertungen selbständig vorzunehmen. Auf Basis der Produktbewertungen in
                Verbindung mit Kundendaten, Verkaufszahlen und Trend-Analysen können so unter anderem Produktoptimierungen
                und Brand-Profilierungen vorangetrieben werden.
              </Copy>
            </div>

            <div>
              <Heading3 className="flex flex-row items-center">
                <span className="pr-4">Profitieren</span> <MigrosIcon />
                <span className="pl-2">
                  <CustomerIcon />
                </span>
              </Heading3>
              <Copy>
                Von Produktoptimierungen und noch klareren Brand-Profiles profitieren wiederum die Kund*innen, aber nicht
                zuletzt auch die Migros durch höhere Verkaufszahlen und eine Senkung von Research- und Mafo-Ausgaben.
              </Copy>
            </div>
          </Grid>
        </Section>

        <Section>
          <div className="bg-cornflower-500 mx-auto flex rounded justify-center py-12 px-8">
            <Image
              priority
              src="/images/awards/bosw/2022/BOSW2022-Grafik-DailyMail.svg"
              alt="Daily Mail"
              width={1480}
              height={280}
            />
          </div>
        </Section>

        <Section>
          <Heading2>Der Community Value Loop für &laquo;das beste Sortiment&raquo;</Heading2>
          <Copy>Der Community gegenüber stehen heute rund 250 Migros-Mitarbeitende unterschiedlicher Abteilungen.</Copy>
          <Copy>
            Category-Managers beobachten die Diskussionen und Produktbewertungen ihrer Sortimente und leiten daraus
            Produktoptimierungen, Neuheiten und saisonale Sortimentsplanungen ab. Die Brand-Managers von M-Budget, M-Classic,
            Migros Sélection, V-Love und 25 weiteren Migros-Marken nutzen die Community-Inputs zur Generierung von Insights
            sowie Brand-Profilierung. Auch die Sensorik-Teams und die Produkt-Entwickler*innen der Migros begleiten die
            Feedbacks der Community bei ihrer Arbeit.
          </Copy>
          <Copy>
            In der Migros sollen Kund*innen «das beste Sortiment zum fairsten Preis finden» – so steht es in der
            Supermarkt-Strategie. Der Community Value Loop ist ein Tool, bestehend aus digitalen, aufeinander abgestimmten
            und automatisierten Massnahmen. Sie machen Word of Mouth auf einfache und effiziente Art und Weise für die Migros
            nutzbar und verschaffen dem Unternehmen so einen Wettbewerbsvorteil. Innovativ dabei ist das intelligente
            Zusammenspiel der einzelnen Massnahmen sowie das Stakeholder-zentrierte Vorgehen bei der Entwicklung.
          </Copy>
        </Section>

        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quote} />
        </Section>

        <Section>
          <Heading2>Bottom-up zum Erfolg</Heading2>
          <Copy>
            Personalisierte und verhaltensbasierte Community-Aktivierung mittels unterschiedlicher Recommender nutzt die
            Migros seit Anfang 2021. Im April wurde die erste Daily E-Mail einer Category-Managerin zugestellt. Gemeinsam mit
            einer interdisziplinären Arbeitsgruppe interner Stakeholder wurden in mehreren Iterationen die Daily E-Mail sowie
            die Oberfläche des Migipedia-Backends optimiert. Ein Beispiel: Schlechte Produktbewertungen stehen am Anfang der
            Daily E-Mail, was die Übersicht und die Effizienz der Migros-Mitarbeitenden steigert.
          </Copy>
          <Copy>
            Das gewählte Bottom-up-Vorgehen der Lancierung hat sich positiv auf die Akzeptanz des Value Loops bei den
            Mitarbeitenden ausgewirkt. So lässt es sich erklären, dass seit Sommer Woche für Woche weitere Personen
            unterschiedlicher Abteilungen Interesse an den individuellen Daily E-Mails zeigten. Im November war es soweit:
            Der Migros Community Value Loop mit seinen digitalen Massnahmen wurde der Departementsleitung Marketing als
            innovatives Beispiel für Data-driven Retail für noch mehr Kundenfokus vorgestellt.
          </Copy>
        </Section>

        <Section>
          <Grid cols={3}>
            <TextBlock title="Gespart pro Jahr" number={250000}>
              Mit einem Entwicklungsaufwand von nur CHF 50’000.– spart die Migros jährlich CHF 250’000.– an
              Marktforschungskosten.
            </TextBlock>
            <TextBlock title="Bewertungen pro Tag" number={5000}>
              An Spitzentagen gibt es alle 20 Sekunden eine neue Produktbewertung.
            </TextBlock>
            <TextBlock title="Abonennt*innen" number={280}>
              Die Daily Mail geht jeden Tag an 280 Category Manager, die für 80’000 Produkte verantwortlich sind.
            </TextBlock>
          </Grid>
        </Section>
        <Section>
          <Heading2>Kundenfokus heisst Kosten sparen</Heading2>
          <Copy>
            Über 700 Produkt-Umstellungen, Neuheiten-Lancierungen und Repositionierungen von Produkten nimmt die Migros
            jährlich vor. Die Marketing-Controller der Migros geben an, dass dank gezielter Word-of-Mouth-Auswertung bis zu
            250’000 Franken für Marktforschung und Research eingespart werden können – Zusatzverkäufe verbesserter Produkte
            nicht berücksichtigt. Dem gegenüber stehen Entwicklungskosten für die digitalen Massnahmen des Value Loops von
            50’000 Franken.
          </Copy>
        </Section>
        <Section>
          <UnorderedList
            title="Der Migros Community Value Loop zusammengefasst"
            items={[
              'Personalisierte, digitale Massnahmen zur Aktivierung der Migros-Community und Migros-Mitarbeitenden gleichermassen.',
              'Die im Minutentakt generierten Kundenfeedbacks werden täglich, individuell und automatisiert rund 250 Migros-Mitarbeitenden zugestellt.',
              'Die Kundenfeedbacks werden für Produktentwicklung, Brand-Insights sowie für die Qualitätssicherung verwendet.',
              'Die Word-of-Mouth-Auswertungen sorgen für Kundenfokus, eine bessere Einkaufsplanung für Kund*innen sowie Einsparungen von mindestens 250’000 Franken.',
            ]}
            markerColor="apricot"
          />
        </Section>
        <Section>
          <Heading3>Jury-Hinweis:</Heading3>
          <Copy>
            Die unterschiedlichen Recommender zur Aktivierung der Kund*innen können auf der Startseite von Migipedia.ch mit
            einem eigenen Migros-Login mit Cumulus-Verknüpfung erlebt werden.
          </Copy>
        </Section>
      </main>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      quote: await transformQuote(Quotes['bettina-bosw22-innovation']),
    },
  };
};

export default Page;
