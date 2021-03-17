import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { PositionX, PositionY } from '../../components/blob';
import { Keyfigure } from '../../components/keyfigure';
import { Testimonial } from '../../components/testimonial';
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
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
import { Link } from '../../elements/link';
import { Grid } from '../../layouts/grid';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const OfpgKig: NextPage<Props> = ({ quote, contact, teasers }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Aus über 1ʼ700 Angeboten die richtige _Hilfe_ finden."
        description="Das Ostschweizer Forum für Psychische Gesundheit hat ein grosses Netzwerk an Anbietern für Unterstützungsangebote im Bereich Gesundheit und Soziales. Bisher gab es keinen einfachen Zugang zu diesen Angeboten. Hier schufen wir Abhilfe mit einem zentralen Tool zur Verwaltung und einem Widget für den Zugriff."
      >
        <Copy>
          Das Ostschweizer Forum für Psychische Gesundheit hat ein grosses Netzwerk an Anbietern für Unterstützungsangebote
          im Bereich Gesundheit und Soziales. Bisher gab es keinen einfachen Zugang zu diesen Angeboten. Hier schufen wir
          Abhilfe mit einem zentralen Tool zur Verwaltung und einem Widget für den Zugriff.
        </Copy>
        <Copy>
          Der Vorteil an einem Widget: Das Anzeigen und Durchsuchen der Angebote ist nicht an eine Website gebunden, sondern
          das Widget kann überall eingebunden eingebunden werden. Angebote von Kantonen, Gemeinden und Organisationen werden
          neu mit einem zentralen Tool einheitlich verwaltet.
        </Copy>
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
          <Keyfigure>
            <UnorderedList
              title="Auf einen Blick"
              items={[
                'Über 1ʼ700 Angebote von 1ʼ000 Anbietern',
                'Kann als React-Widget im Nu auf jeder beliebigen Webseite eingebunden werden',
                'Elasticsearch für eine schnelle, fehlertolerante und standortbezogene Suche',
                'Hohe Datenqualität dank Publikations-Workflow',
              ]}
            />
          </Keyfigure>
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
            <div>
              <Heading3>Schritt für Schritt vorwärts</Heading3>
              <Copy>
                Auch bei diesem Projekt sind wir iterativ vorgegangen — mit <Link href="/angebot/agile">Scrum</Link>.
                Regelmässig wurden neue Features getestet und evaluiert. Das erlaubte dem Kanton und uns, auf neue oder sich
                ändernde Anforderungen einzugehen und diesen gerecht zu werden.
              </Copy>
              <Copy>
                Das iterative Vorgehen macht es einfach, auf die Bedürfnisse der Nutzer*innen einzugehen. Das macht auch uns
                und dem Kunden Freude. So wurde die Anzeige von Resultaten in einer Karte auf Wunsch der Nutzer*innen
                implementiert.
              </Copy>
            </div>
            <div>
              <Heading3>Eine Suche, aber auf vielen Seiten</Heading3>
              <Copy>
                Ein Suchangebot hilft nur, wenn es gut verankert ist. Gerade in schwierigen Situationen greift man gern auf
                bereits bekannte Angebote zurück. Also haben wir die Suche so konzipiert und entwickelt, dass sie genau dort
                platziert werden kann, wo sie gebraucht wird. Das Einbetten auf einer Seite ist ein Kinderspiel.
              </Copy>
              <Copy>
                Die Resultate können so vorgefiltert werden, dass sie auf die Zielgruppe der einbindenden Website passen:
                Eine Beratungsstelle für Jugendliche kann beispielsweise die Resultate auf Angebote für Kinder und Jugedliche
                einschränken.
              </Copy>
            </div>
          </Grid>
          <Testimonial
            background="cornflower"
            blobs={[
              { positionX: PositionX.right, positionY: PositionY.bottom, color: 'mint' },
              { positionX: PositionX.right, positionY: PositionY.bottom, color: 'apricot' },
              { positionX: PositionX.left, positionY: PositionY.bottom, color: 'mint' },
              { positionX: PositionX.left, positionY: PositionY.top, color: 'mint' },
              { positionX: PositionX.left, positionY: PositionY.top, color: 'apricot' },
            ]}
            quote={quote}
          />
        </PageSection>
        <PageSection>
          <Heading3>Schnelle und nutzerfreundliche Suche</Heading3>
          <Copy>
            Wir benutzen gerne Elasticsearch für Suchprojekte. Damit bekommen wir die schnellen Suchergebnisse schon mal
            geschenkt. Mit der Pflege von Synonymen und einer gewissen Fehlertoleranz können wir sogar passende Angebote
            anzeigen, wenn sich Nutzer*innen vertippen (gerade auf dem Snartphonr 🙄).
          </Copy>
          <Copy>
            Zusätzlich zur cleveren Volltextsuche und gängigen Filtern ist die Distanz zum Anbieter wichtig. Wenn wir den
            Standort der Nutzer*innen kennen, gewichten wir nahe gelegene Angebote höher.
          </Copy>
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <TextBlock title="Verteilte Daten, zentral verwaltet">
              Mehrere Kantone und Organisationen sind im Backend aktiv. Jeder Mandant pflegt seine eigenen Anbieter-Kreise,
              was zu einer Vielfalt von Angeboten führt. Jeder Mandant ist für seine Anbieter und somit die Daten und
              Angebote verantwortlich und kann spezifische, auf ihn angepasste Konfigurationen vornehmen.
            </TextBlock>
            <TextBlock title="Vier-Augen-Prinzip">
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
            {teasers.map((teaser) => (
              <ImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const teasers = [Teasers.migipedia, Teasers.subsidia, Teasers['supply-chain']];

  return {
    props: {
      teasers,
      quote: Quotes['fabrina-kig'],
      contact: Employees.marco,
    },
  };
};

export default OfpgKig;
