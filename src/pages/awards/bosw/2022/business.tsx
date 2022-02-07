import { BlobVariations, Copy, Heading2, Heading3, Keyfigure, TextLink, UnorderedList } from '@smartive/guetzli';
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
          { short: 'Business', full: 'Kategorie Business' },
        ]}
      >
        <Copy>
          Migipedia, die plattformübergreifende Community der Migros, ist längst nicht nur eine Marketing-Spielerei, auf der
          Migros-Kinder Produkte bewerten, diskutieren und sich an Abstimmungen und Crowdsourcings beteiligen. Mit dem
          Zusammenspiel von personalisierten und verhaltensbasierten Kommunikationsmassnahmen, Word of Mouth und gezielter,
          interner Stakeholder-Aktivierung schafft der Community Value Loop Werte. Von diesen profitieren nicht nur
          Kund*innen, sondern auch die Migros. Als Bottom-up-Initiative für noch mehr Kundenfokus wurde der Community Value
          Loop 2021 lanciert.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Keyfigure background="mint">
            <Image src="/images/awards/bosw/2022/mcc-value-loop.svg" alt="Keyfigure" width={600} height={600} />
          </Keyfigure>
        </Section>

        <Section>
          <Heading2>Der Community Value Loop</Heading2>
          <Copy>
            Aktivieren, generieren, profitieren – auf diesen Pfeilern basiert der Community Value Loop. Auf der einen Seite
            des Loops stehen Kund*innen, auf der anderen die Migros. Am einfachsten lässt sich der Loop am Beispiel von
            Produktbewertungen beschreiben.
          </Copy>
          <ol className="list-decimal list-outside">
            <ListItem>
              <strong className="font-bold">Aktivieren:</strong> Wird beim Online- oder Offline-Einkauf die Cumulus-Karte
              verwendet, ermöglicht dies der Migros, mittels personalisierter Kommunikation Kund*innen zu aktivieren,
              Produkte ihres Einkaufs zu bewerten. Als digitale Aktivierungsmassnahmen kommen unterschiedliche,
              verhaltensbasierte Recommender auf Migipedia.ch sowie im sonntäglichen Migros-Newsletter zum Einsatz.
            </ListItem>
            <ListItem>
              <strong className="font-bold">Generieren:</strong> Kund*innen werden zu Community-Mitgliedern und verfassen,
              basierend auf ihren personalisierten Produktvorschlägen, Bewertungen. Dabei kommt keinerlei Incentivierung der
              Community zum Einsatz. Die Motivation der Community ist rein intrinsisch.
            </ListItem>
            <ListItem>
              <strong className="font-bold">Profitieren:</strong> Von den Produkt-Bewertungen profitieren andere Kund*innen
              beim Treffen ihrer Kaufentscheidungen, sei dies auf Migipedia, dem Online-Produkt-Katalog der Migros oder in
              den Onlineshops der Migros-Fachmärkte (melectronics, SportXX usw.). Zudem werden die Produktbewertungen auch
              für Google Shopping-Ads verwendet – denn nicht immer startet die Customer Journey auf einem Migros-eigenen
              Touchpoint (Beispiel Mio Star V-Cleaner VAC8POWER:{' '}
              <TextLink href="https://www.google.com/search?q=Staubsauger+Migros+kaufen&rlz=1C1GCEB_enCH912CH912&biw=1920&bih=977&sxsrf=AOaemvILgl-fC8iRLxCCMAG7Gt6_VaR4dA:1641311197813&ei=3WvUYZX7MJuM9u8Po-2n8AY&ved=0ahUKEwjV3aTXuJj1AhUbhv0HHaP2CW4Q4dUDCA4&uact=5&oq=Staubsauger+Migros+kaufen&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEAgQHjIGCAAQCBAeOgcIABBHELADOgcIABCwAxBDOgcIIxCwAhAnOgQIABANOggIABAIEAcQHkoECEEYAEoECEYYAFDeBlixDWCaEGgBcAJ4AIABZ4gB3QSSAQM2LjGYAQCgAQHIAQrAAQE&sclient=gws-wiz">
                Google
              </TextLink>
              {' // '}
              <TextLink href="https://www.melectronics.ch/de/p/717196300000/mio-star-v-cleaner-vac8power">Webshop</TextLink>
              ).
            </ListItem>
            <ListItem>
              <strong className="font-bold">Aktivieren:</strong> Auf der anderen Seite des Value Loops sind die
              Mitarbeitenden der Migros zu finden. Produktverantwortliche, Brand-Manager, Sensorik-Teams sowie
              Produkt-Entwicklerinnen und -Entwickler der Industriebetriebe zählen heute zum Empfängerkreis einer Daily
              E-Mail, die für jeden internen Stakeholder individuell zusammengestellt wird. Die Daily E-Mail fasst die
              Community-Aktivitäten der letzten 24 Stunden, basierend auf den Verantwortlichkeiten der Empfängerinnen und
              Empfänger, zusammen und bietet Interaktionsmöglichkeiten mit dem Community-Content.
            </ListItem>
            <ListItem>
              <strong className="font-bold">Generieren:</strong> Rückmeldungen auf Produkt-Ebene können beobachtet und
              gesammelt werden. Dank Zugang zum sogenannten Migipedia-Backend ist es den Migros-Mitarbeitenden zudem möglich,
              weitere Auswertungen selbständig vorzunehmen und Daten zu verdichten. Auf Basis der Produktbewertungen in
              Verbindung mit Kundendaten, Verkaufszahlen und Trend-Analysen können so unter anderem Produktoptimierungen und
              Brand-Profilierungen vorangetrieben werden.
            </ListItem>
            <ListItem>
              <strong className="font-bold">Profitieren:</strong> Von Produktoptimierungen und noch klareren Brand-Profiles
              profitieren wiederum die Kund*innen, aber nicht zuletzt auch die Migros durch höhere Verkaufszahlen und eine
              Senkung von Research- und Mafo-Ausgaben.
            </ListItem>
          </ol>
        </Section>

        <Section>
          <Keyfigure background="apricot">
            <Copy>((Abbildung Massnahmen: Recommender, Newsletter, Daily E-Mail, Backend))</Copy>
          </Keyfigure>
        </Section>

        <Section>
          <Heading2>Der Community Value Loop für &laquo;das beste Sortiment&raquo;</Heading2>
          <Copy>
            Durch den Einsatz von personalisierten und verhaltensbasierten Recommendern konnte die tägliche Anzahl
            Produktbewertungen vervierfacht werden. An Top-Tagen generiert die Migros-Community Bewertungen im Minutentakt.
            Der Community gegenüber stehen heute rund 250 Migros-Mitarbeitende unterschiedlicher Abteilungen.
          </Copy>
          <Copy>
            Category-Managers beobachten die Diskussionen und Produktbewertungen ihrer Sortimente und leiten daraus
            Produktoptimierungen, Neuheiten und saisonale Sortimentsplanungen ab. Die Brand-Managers von M-Budget, M-Classic,
            Migros Sélection, V-Love und 25 weiteren Migros-Marken nutzen die Community-Inputs zur Generierung von Insights
            sowie Brand-Profilierung. Auch die Sensorik-Teams und die Produkt-Entwicklerinnen und -Entwickler der Migros
            begleiten die Feedbacks der Community bei ihrer Arbeit. In der Migros sollen Kund*innen «das beste Sortiment zum
            fairsten Preis finden» – so steht es in der Supermarkt-Strategie. Der Community Value Loop ist ein Tool,
            bestehend aus digitalen, aufeinander abgestimmten Massnahmen. Sie machen Word of Mouth auf einfache und
            effiziente Art und Weise für die Migros nutzbar und verschaffen dem Unternehmen so einen Wettbewerbsvorteil.
          </Copy>
        </Section>
        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quote} />
        </Section>
        <Section>
          <Heading2>Bottom-up zum Erfolg</Heading2>
          <Copy>
            Personalisierte und verhaltensbasierte Community-Aktivierung mittels unterschiedlicher Recommender nutzt die
            Migros seit Anfang 2021. Im April des gleichen Jahres wurde die erste Daily E-Mail einer Category-Managerin
            zugestellt. Gemeinsam mit einer interdisziplinären Arbeitsgruppe interner Stakeholder wurde in mehreren
            Iterationen die Daily E-Mail sowie die Oberfläche des Migipedia-Backends optimiert. Ein Beispiel: Schlechte
            Produktbewertungen stehen am Anfang der Daily E-Mail, was die Übersicht und die Effizienz der
            Migros-Mitarbeitenden steigert.
          </Copy>
          <Copy>
            Das gewählte Bottom-up-Vorgehen der Lancierung hat sich positiv auf die Akzeptanz des Value Loops bei den
            Mitarbeitenden ausgewirkt. So lässt es sich erklären, dass seit Sommer Woche für Woche weitere Personen
            unterschiedlicher Abteilungen Interesse an den individuellen Daily E-Mails zeigten. Im November war es soweit:
            Der Migros Community Value Loop mit seinen digitalen Massnahmen wurde der Departementsleitung Marketing als
            erfolgreiches Beispiel für Data-driven Retail für noch mehr Kundenfokus vorgestellt.
          </Copy>
        </Section>
        <Section>
          <Heading2>Kundenfokus heisst Kosten sparen</Heading2>
          <Copy>
            Über 700 Produkt-Umstellungen, Neuheiten-Lancierungen und Repositionierungen von Produkten nimmt die Migros
            jährlich vor. Die Marketing-Controller der Migros geben an, dass dank gezielter Word-of-Mouth-Auswertung bis zu
            250’000 Franken eingespart werden können – Zusatzverkäufe verbesserter Produkte nicht berücksichtigt. Dem
            gegenüber stehen Entwicklungskosten für die digitalen Massnahmen von 50’000 Franken.
          </Copy>
        </Section>
        <Section>
          <UnorderedList
            title="Der Migros Community Value Loop zusammengefasst"
            items={[
              'Der Migros Community Value Loop ist das Zusammenspiel personalisierter, digitaler Massnahmen zur Aktivierung von Migros-Community sowie Migros-Mitarbeitenden gleichermassen.',
              'An Top-Tagen bewertet die Migros-Community Produkte im Minutentakt. Die so generierten Kundenfeedbacks werden täglich, basierend auf Sortiments- und Themen-Verantwortlichkeiten, automatisiert rund 250 Migros-Mitarbeitenden zugestellt.',
              'Die Kundenfeedbacks werden für Produktoptimierungen und -Entwicklungen, Brand-Insights und Brand-Profilierung sowie für Sensorik-Tests im Rahmen von Qualitätssicherung und Produktüberprüfung verwendet.',
              'Die systematischen Word-of-Mouth-Auswertungen sorgen für noch mehr Kundenfokus, eine bessere Orientierung bei der Einkaufsplanung für Kund*innen sowie Einsparungen von mindestens 250’000 Franken.',
            ]}
            markerColor="apricot"
          />
        </Section>
        <Section>
          <Heading3>Jury-Hinweis:</Heading3>
          <Copy>
            Die unterschiedlichen Recommender zur Aktivierung der Kund*innen kann auf der Startseite von Migipedia.ch mit
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
      quote: await transformQuote(Quotes['bettina-bosw22-business']),
    },
  };
};

export default Page;
