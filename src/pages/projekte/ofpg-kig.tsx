import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { QuoteCard } from '../../components/quote-card';
import { Contact } from '../../compositions/contact';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { TextBlock } from '../../compositions/text-block';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Lead } from '../../elements/lead';
import { Grid } from '../../layouts/grid';

type Props = {
  quote: Quote;
  contact: Employee;
};

const OfpgKig: NextPage<Props> = ({ quote, contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Aus über 1ʼ700 Angeboten die richtige _Hilfe_ finden."
        description="Migipedia.ch ist seit 10 Jahren fester Bestandteil des digitalen Marketings der Migros und schafft Werte für Kundinnen und Kunden sowie fürs Unternehmen. Gemeinsam mit der Migros entwickelten wir eine komplett neue Lösung. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor."
      >
        <Lead>
          Das Ostschweizer Forum für Psychische Gesundheit verfügt über ein grosses Netzwerk an Anbietern für
          Unterstützungsangebote im Bereich Gesundheit und Soziales. Ein einfacher Zugang, wie diese gefunden werden können,
          fehlte bis anhin. smartive macht die Unterstützungsangebote mit einem Widget einfach durchsuchbar. Das Widget kann
          auf unterschiedlichen Webseiten des Kantons, der Gemeinden und anderen Organisationen eingebunden werden. Die
          Anbieter pflegen ihre Angebote zentral in einer einfachen Administration.
        </Lead>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/migipedia/RGB_04_kitchen_012.jpg"
              alt="Frau in orangem Pullover isst Joghurt"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded"
              src="/images/migipedia/RGB_01_diskutieren_007.jpg"
              alt="Eine Frau und ein Mann betrachten etwas auf einem Smartphone"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <UnorderedList
            title="Auf einen Blick"
            items={[
              'Über 1ʼ700 Angebote von 1ʼ000 Anbietern',
              'Kann als React-Widget auf anderen Webseiten eingebunden werden',
              'Elasticsearch für eine schnelle, fehlertolerante und standortbezogene Suche',
              'Hohe Datenqualität dank Publikations-Workflow',
              'Skalierbare Infrastruktur für eine nachhaltige Erweiterung',
            ]}
          />
        </PageSection>
        <PageSection>
          <Image
            className="rounded"
            src="/images/migipedia/RGB_05_couch_010.jpg"
            alt="Eine Frau sitzt mit ihrem Sohn im Wohnzimmer. Sie sortieren Migros Mania Sammelelemente."
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <TextBlock title="Agiles Vorgehen führt zum Erfolg">
              Durch eine iterative Vorgehensweise wurde das Projekt in kleinen Paketen entwickelt, welche durch
              wiederkehrende Test-Iterationen evaluiert und auf ihre Funktionsweise getestet wurden. So konnten neue oder
              veränderte Anforderungen stets miteinbezogen werden. Der Kunde kann so das Produkt stets aktiv mitgestalten und
              Wünsche können im Entwicklungsprozess berücksichtigt werden. Ebenso erfolgt auch die Weiterentwicklung der
              Applikation in der Umsetzung von kleinen Paketen.
            </TextBlock>
            <TextBlock title="Gezieltes Ausspielen von Angeboten an Zielgruppen">
              Die Angebote sollen auf möglichst vielen Seiten ausgespielt werden, damit die Kunden die Angebote im gegebenen
              Kontext finden. Durch ein React-Widget lässt sich die Angebotssuche kostengünstig und technologieunabhängig auf
              beliebigen Seiten ausspielen. Das Definieren von Grund-Filtern hilft die Angebote perfekt gezielt auf den
              Besucher der jeweiligen Seite anzupassen. Beispielsweise können nur Angebote aus dem Kanton St.Gallen zum Thema
              Burnout für Erwachsene ausgespielt werden.
            </TextBlock>
          </Grid>
          <QuoteCard quote={quote} />
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <TextBlock title="Schnelle und fehlertolerante Suche">
              Eine schnelle und einfache Suche unterstützt Benutzer dabei, zu den gewünschten Ergebnissen zu kommen. Durch
              Elasticsearch wird sichergestellt, dass Tippfehler kein Problem darstellen und auch Synonyme einfliessen. Der
              Benutzer soll seine Begriffe aller Art verwenden können, auch wenn es sich um lateinische Fachbegriffe handelt.
              Durch Filter werden dem Benutzer zudem die Möglichkeiten geboten, die vielen Angebote für seine Bedürfnisse
              einzuschränken.
            </TextBlock>
            <TextBlock title="Standortbezogene Suche für optimale Resultate">
              Damit der Benutzer Angebote vor seiner Haustüre findet, fliesst die Distanz zum jeweiligen Angebot in die
              Gewichtung der Suchresultate ein. Wenn der Benutzer seinen Standort angibt, können Angebote im nahen Umkreis
              höher priorisiert werden und somit die lokalen Angebote vorgezogen werden.
            </TextBlock>
          </Grid>
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <TextBlock title="Über mehrere Kantone und Organisationen verteilt">
              Mehrere Kantone und Organisationen sind im Backend aktiv. Jeder Mandant pflegt seine eigenen Anbieter-Kreise,
              was zu einer Vielfalt von Angeboten führt. Jeder Mandant ist für seine Anbieter und somit die Daten und
              Angebote verantwortlich und kann spezifische, auf ihn angepasste Konfigurationen vornehmen.
            </TextBlock>
            <TextBlock title="Hohe Datenqualität durch Publikations-Workflow">
              Eine hohe Datenqualität der Inhalte ist für das Angebotsverzeichnis entscheidend. Die Anbieter haben die
              Möglichkeit, ihre Daten selber zu pflegen um Aktualität und Attraktivität zu gewährleisten. Der Review-Prozess
              spielt dabei eine zentrale Rolle - die verantworlichen Personen müssen Änderungsanträge prüfen und
              anschliessend mit Hinweisen zur Verbesserung zurückweisen oder direkt freigeben und somit ins Verzeichnis
              aufnehmen.
            </TextBlock>
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>

        <PageSection title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            <ImageCard
              label="KIG, Gesundheitsamt Sankt Gallen"
              title="Web statt App – plane deine Freizeit mit Spilo."
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/migipedia/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="KIG, Gesundheitsamt Sankt Gallen"
              title="Web statt App – plane deine Freizeit mit Spilo."
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/migipedia/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="Cosmopolitan"
              title="Massgeschneidertes CRM"
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/migipedia/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
          </Grid>
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      quote: Quotes['fabrina-kig'],
      contact: Employees.marco,
    },
  };
};

export default OfpgKig;
