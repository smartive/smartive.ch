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
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
import { Lead } from '../../elements/lead';
import { Link } from '../../elements/link';
import { Grid } from '../../layouts/grid';

type Props = {
  quote: Quote;
  contact: Employee;
};

const Migusto: NextPage<Props> = ({ quote, contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="_Schnelle_ Rezepte für schnelles Kochen."
        description="Für die neue Migusto-Plattform der Migros haben wir eine Rezepte-API entwickelt. Unsere Lösung bietet einen zentralen Zugriff auf die Migros Rezeptdatenbank mit Rezepten von Migusto, Famigros und iMpuls."
      >
        <Lead>
          Für das neue <Link href="https://migusto.ch">Migusto</Link> der Migros haben wir eine Rezepte-API entwickelt.
          Unsere Lösung bietet einen zentralen Zugriff auf die Migros Rezeptdatenbank mit Rezepten von Migusto, Famigros und
          iMpuls.
        </Lead>
        <Lead>
          Sie bildet das Rückgrat der Migusto Webseite für alle rezeptspezifischen Suchabfragen, das Autocomplete und die
          Rezeptdaten für die Detailseite - in Echtzeit.
        </Lead>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/projekte/migusto/maarten-van-den-heuvel-EzH46XCDQRY-unsplash.jpg"
              alt="Person schneidet Gemüse aus der Vogelperspektive"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded"
              src="/images/projekte/migusto/jimmy-dean-my1mDMraGf0-unsplash.jpg"
              alt="Eine Frau und ein Mann beim gemeinsamen Kochen"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <UnorderedList
            title="Ein kurzer Blick"
            items={[
              'Auf elf digitalen Touchpoints präsent',
              '120 000 aktiven Nutzer*innen',
              '300 000 Bewertungen verfasst',
              '105 Mio. Mal Bewertungen abgerufen in einem Jahr',
              '60% mehr Bewertungen im Vergleich zum Vorjahr',
              'Reduzierung der Betriebskosten um über 90% durch die Ablösung der bisherigen SaaS-Lösung',
            ]}
          />
        </PageSection>
        <PageSection>
          <Image
            className="rounded"
            src="/images/projekte/migusto/stefan-c-asafti-x5jilo3ck3o-unsplash.jpg"
            alt="Drei Pizzen in einem Backofen"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <div>
              <Heading3>Von der Konzeption über die Entwicklung bis zur Evaluation und Optimierung</Heading3>
              <Copy>
                Wir konzipierten und entwickelten die zentrale Schnittstelle mit Datenimport, Datenhaltung und Anreicherung
                inklusive Volltextsuche, Aggregationen und Filterung.
              </Copy>
              <Copy>
                Die Volltextsuche wurde anhand von live Analytics Daten zusätzlich evaluiert und optimiert, sodass ein
                insgesamt um 20% besseres Ranking der Suchresultate erreicht werden konnte.
              </Copy>
              <Copy>
                Die Migusto Webseite greift in Echtzeit auf die Rezept API zu. Um die Skalierbarkeit sicherzustellen wählten
                wir ein Microservice Setup mit redundanter Architektur. Zusätzlich wurde mit Lasttests die Performance
                geprüft und optimiert sodass die API auch Peaks im minimalen Setup von nur zwei Nodes problemlos standhalten
                können.
              </Copy>
            </div>
            <div>
              <Heading3>Resilienter Datenimport</Heading3>
              <Copy>
                Die Kulinarik-Redaktion erfasst Rezepte sowohl für Online- als auch Printkanäle in einem zentralen
                Redaktionssystem. Da die Schnittstellen des Redaktionssystems nicht für Echtzeitabfragen ausgelegt ist,
                werden die Rezepte regelmässig von unserem Importer (einExtract, Transform, Load Prozess entwickelt mit RxJS)
                ausgelesen, mit weiteren Daten wie z.B. Bewertungen angereichert und in einem Elasticsearch Suchindex
                abgespeichert. Der Importer kann auch mit langsamen und fehlerhaften Antworten umgehen.
              </Copy>
            </div>
          </Grid>
          <QuoteCard quote={quote} />
        </PageSection>
        <PageSection>
          <Heading3>Schnelle Resultate auch bei komplexen Abfragen</Heading3>
          <Copy>
            Wie beim Filialfinder oder der Migros-Suche setzen wir auch bei der Rezepte-API auf Elasticsearch für die
            Volltextsuche und Filterung von Resultaten. Somit können wir eine grosse Anzahl von Rezepte effizient nach
            Suchbegriffen durchsuchen oder nach Kategorien wie z.B. <code>vegan</code> und <code>dessert</code> filtern.
          </Copy>
          <Copy>
            Die Schnittstelle bietet die Möglichkeit, Rezepte nach ihrer saisonalen Relevanz auszuliefern. Sucht man z.B. im
            Frühling nach einem Risotto, wird ein Bärlauch-Risotto vorgeschlagen, wohingegen im Herbst ein Steinpilz-Risotto
            höher gewichtet wird.
          </Copy>
          <Copy>
            Mit Elasticsearch liefert die Suche auch für äusserst komplexe Suchabfragen relevante Resultate - dank
            Autocorrect, Bigram Matching, Stemming, Synonymen, und vielen mehr.
          </Copy>
        </PageSection>
        <PageSection>
          <Grid cols={3}>
            <TextBlock title="rpm" number={20000}>
              Spitzenwerte der Rezepte-API
            </TextBlock>
            <TextBlock title="ms" number={34}>
              Durchschnittliche Response Time
            </TextBlock>
            <TextBlock title="Prozent" number={20}>
              Bessere Suchresultate
            </TextBlock>
          </Grid>
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/projekte/migusto/jason-briscoe-7MAjXGUmaPw-unsplash.jpg"
              alt="Eine Frau rührt sehr enthusiastisch in einem orangen Topf"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded"
              src="/images/projekte/migusto/alyson-mcphee-yWG-ndhxvqY-unsplash.jpg"
              alt="Eine Frauenhand mit Damiantring schneidet frischen Koriander"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Heading3>Hochperformante GraphQL API</Heading3>
          <Copy>
            Die Rezepte werden über eine Node.js API mit GraphQL ausgespielt. Dafür setzen wir, wie schon bei Reactions, auf
            Apollo Server. GraphQL erlaubt es den API-Konsumenten genau zu definieren, welche Daten sie erhalten wollen. So
            kann auf einer Übersichtsseite nur Bild und Titel abgefragt werden, auf einer Detailseite aber sämtliche
            Rezeptinhalte.
          </Copy>
          <Copy>
            Die GraphQL API, welche auf Cloud Foundry betrieben wird, hielt bei durchgeführten Lasttests auch 20'000 Anfragen
            pro Minute problemlos stand.
          </Copy>
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
      quote: Quotes['desiree-migusto'],
      contact: Employees.thilo,
    },
  };
};

export default Migusto;
