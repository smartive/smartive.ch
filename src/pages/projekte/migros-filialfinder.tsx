import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Testimonial } from '../../components/testimonial';
import { Contact } from '../../compositions/contact';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
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
        <Copy>
          Für den grössten Schweizer Detailhändler, den Migros-Genossenschafts-Bund, haben wir den neuen Filialfinder
          umgesetzt. Ziel war es, eine responsive und ansprechende Lösung zu entwickeln, die es dem Kunden erlaubt, zu Hause
          oder unterwegs für ihn interessante Informationen zu Filialen in der Nähe schnell und einfach abrufen zu können.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/projekte/cosmo/austin-distel-jpHw8ndwJ_Q-unsplash.jpg"
              alt="Zwei Personen unterhalten sich auf einem Sofa über etwas am Laptop"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded"
              src="/images/projekte/cosmo/christian-regg-o7LDdRDIYiY-unsplash.jpg"
              alt="Gasthaus Äscher im Alpstein, Appenzell"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <UnorderedList
            title="Insights"
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
            src="/images/projekte/cosmo/william-iven-jrh5lAq-mIs-unsplash.jpg"
            alt="Ausgedruckte Statisiken und Grafiken"
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
          <Testimonial quote={quote} />
        </PageSection>

        <PageSection>
          <div>
            <Heading3>State-of-the-Art Architektur</Heading3>
            <Copy>
              Durch eine stabile Architektur ist die Skalier-, und Verfügbarkeit der Applikation gewährleistet und einfach
              erweiterbar. Zusätzliche Drittsysteme können problemlos in die Anwendung eingebunden werden.
            </Copy>
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
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
