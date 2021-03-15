import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { CustomersList } from '../../components/customers-list';
import { QuoteCard } from '../../components/quote-card';
import { Contact } from '../../compositions/contact';
import { ImageCard, ImageCardVariants } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { Customer } from '../../data/customers';
import Customers from '../../data/customers.json';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Copy } from '../../elements/copy';
import { Grid } from '../../layouts/grid';
import { GridSlider } from '../../layouts/grid-slider';

type Props = {
  customers: Customer[];
  quote: Quote;
  contact: Employee;
};

const Projekte: NextPage<Props> = ({ customers, quote, contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Von der _Idee_ bis zum Go-live."
        description="Webapps, APIs und DevOps, für Grossunternehmen und Start-ups: Seit 2012 haben wir Brandneues auf die Beine gestellt, bestehende Lösungen analysiert und Projekte über viele Jahre begleitet und weiterentwickelt. Immer agil, massgeschneidert und mit Leidenschaft. Und wiederholt ausgezeichnet."
      >
        <Copy>
          Webapps, APIs und DevOps, für Grossunternehmen und Start-ups: Seit 2012 haben wir Brandneues auf die Beine
          gestellt, bestehende Lösungen analysiert und Projekte über viele Jahre begleitet und weiterentwickelt. Immer agil,
          massgeschneidert und mit Leidenschaft. Und wiederholt ausgezeichnet.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <CustomersList customers={customers} />
          <Grid cols={2}>
            <ImageCard
              label="Migipedia"
              title="Der User im Mittelpunkt — seit 10 Jahren"
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/migipedia/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
              variant={ImageCardVariants.Big}
              awardTags={['Best of Swiss Web 2019']}
            />

            <ImageCard
              label="Subsidia"
              title="Der mobile Einzalhandel"
              link={{ label: 'Projekt anschauen', href: '/projekte/subsidia' }}
              image={{
                src: '/images/projekte/subsidia/pwa-etikett-scan.png',
                alt: 'Verkäuferin scannt Etikett eines Kleidungsstücks mit dem Smartphone',
              }}
              variant={ImageCardVariants.Big}
              awardTags={['Best of Swiss Apps 2019']}
            />
          </Grid>
          <GridSlider>
            <ImageCard
              label="Migros Supply Chain"
              title="Digitalisierung der Lieferkette"
              link={{ label: 'Zum Projekt', href: '/projekte/migros-supply-chain' }}
              awardTags={['BOSW 2020', 'BOSA 2020']}
              image={{
                src: '/images/projekte/supply-chain/man_mit_heber.jpg',
                alt: 'Ein Mann transportiert Boxen in einem Lager',
              }}
            />

            <ImageCard
              label="Migusto"
              title="Schnelle Rezepte für schnelles Kochen"
              link={{ label: 'Zum Projekt', href: '/projekte/migusto' }}
              image={{
                src: '/images/projekte/migusto/migusto-logo.png',
                alt: 'Migusto Logo',
              }}
            />

            <ImageCard
              label="Kanton St. Gallen"
              title="Online Hilfe finden."
              link={{ label: 'Zum Projekt', href: '/projekte/ofpg-kig' }}
              image={{
                src: '/images/projekte/supply-chain/man_mit_heber.jpg',
                alt: 'Ein Mann transportiert Boxen in einem Lager',
              }}
            />
          </GridSlider>
          <QuoteCard quote={quote} />
          <Grid cols={3}>
            <ImageCard
              label="Migros"
              title="Filialfinder"
              link={{ label: 'Zum Projekt', href: '/projekte/migros-filialfinder' }}
              image={{
                src: '/images/projekte/supply-chain/man_mit_heber.jpg',
                alt: 'Ein Mann transportiert Boxen in einem Lager',
              }}
            />
            <ImageCard
              label=".M Dimmi"
              title="Ein Social Network für die Migros."
              link={{ label: 'Zum Projekt', href: '/projekte/punkt-m-dimmi' }}
              image={{
                src: '/images/projekte/supply-chain/man_mit_heber.jpg',
                alt: 'Ein Mann transportiert Boxen in einem Lager',
              }}
            />
            <ImageCard
              label="Cosmopolitan Vermögensverwaltungs AG"
              title="Digitale Geschäftsprozesse als Herzstück"
              link={{ label: 'Zum Projekt', href: '/projekte/punkt-m-dimmi' }}
              image={{
                src: '/images/projekte/supply-chain/man_mit_heber.jpg',
                alt: 'Ein Mann transportiert Boxen in einem Lager',
              }}
            />
            <ImageCard
              label="Migros"
              title="Components Library für die Migros-Welt"
              link={{ label: 'Zum Projekt', href: '/projekte/migros-shared-components' }}
              image={{
                src: '/images/projekte/supply-chain/man_mit_heber.jpg',
                alt: 'Ein Mann transportiert Boxen in einem Lager',
              }}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      customers: Object.values(Customers),
      quote: Quotes['coco-partner'],
      contact: Employees.peter,
    },
  };
};

export default Projekte;
