import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { QuoteCard } from '../../components/quote-card';
import { Contact } from '../../compositions/contact';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
import { Lead } from '../../elements/lead';
import { Grid } from '../../layouts/grid';

type Props = {
  quote: Quote;
  contact: Employee;
};

const Filialfinder: NextPage<Props> = ({ quote, contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Auf der Suche nach der nächsten _Migros-Filiale_."
        description="Migipedia.ch ist seit 10 Jahren fester Bestandteil des digitalen Marketings der Migros und schafft Werte für Kundinnen und Kunden sowie fürs Unternehmen. Gemeinsam mit der Migros entwickelten wir eine komplett neue Lösung. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor."
      >
        <Lead>
          Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den neuen Filialfinder
          umgesetzt. Ziel war es, eine responsive und ansprechende Lösung zu entwickeln, die es dem Kunden erlaubt, zu Hause
          oder unterwegs für ihn interessante Informationen zu Filialen in der Nähe schnell und einfach abrufen zu können.
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
            title="Facts & Figures"
            items={[
              'Mehr als 1000 Filialen aggregiert aus 3 unterschiedlichen Datensystemen',
              'Suche in < 0.2 Sekunden',
              'Über 33 Filtermöglichkeiten in 3 Sprachen',
              '5 angebundene APIs',
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
          <Heading3>Aggregation und Vereinheitlichung im Backend</Heading3>
          <Copy>
            Um die Daten und Suchabfragen zu optimieren werden die Filialdaten über eine performante Web-Schnittstelle,
            basierend auf Elasticsearch und Node.js, ausgeliefert.
          </Copy>
          <Copy>
            Die Schnittstelle aggregiert und vereinheitlicht Filialdaten aus dem SAP, der Migros-API und weiteren
            Drittsystemen. Alle relevanten Informationen einer Filiale sind dadurch durchsuchbar und die Resultate können
            effizient über eine JSON REST Schnittstelle ausgespielt werden. Um die Latenz der Schnittstelle zu verringern
            wird die API über Varnish gecached und ausgeliefert.
          </Copy>
        </PageSection>
        <PageSection>
          <QuoteCard quote={quote} />
        </PageSection>
        <PageSection>
          <div>
            <Heading3>Warum Elasticsearch und Varnish?</Heading3>
            <Copy>
              Durch diese Kombination erreichten wir eine um bis zu 26x schnellere Auslieferung der Daten und eine
              Verbesserung der Volltextsuche zusammen mit Location-based Search mit Geocoding durch Google.
            </Copy>
            <Copy>
              Die Erweiterbarkeit und Dynamik der state-of-the-art Suche Elasticsearch, gepaart mit der blitzschnellen
              Auslieferung durch Varnish ist die perfekte Kombination!
            </Copy>
            <Copy>
              Durch einen starken Fokus auf Suchmaschinenoptimierung (SEO) können auch alle Filialen bei Suchmaschinen
              inklusive deren Öffnungszeiten gefunden werden.
            </Copy>
            <Copy>
              Alle Filialinformationen sind als strukturierte Daten mit dem Linked Data Web verknüpft und unterstützen somit
              die Auffindbarkeit und Interpretation durch Suchmaschinen.
            </Copy>
          </div>
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
      quote: Quotes['coco-fil'],
      contact: Employees.moreno,
    },
  };
};

export default Filialfinder;
