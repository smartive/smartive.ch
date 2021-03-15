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
import { Lead } from '../../elements/lead';
import { Grid } from '../../layouts/grid';
import { GridSlider } from '../../layouts/grid-slider';

const imageCard = {
  label: 'Migipedia',
  title: 'Der User im Mittelpunkt – seit 10 Jahren',
  link: { label: 'Projekt anschauen', href: '/projekte/migipedia' },
  image: { src: '/images/migipedia/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' },
};

type Props = {
  customers: Customer[];
  quoteStefanie: Quote;
  contact: Employee;
};

const Projekte: NextPage<Props> = ({ customers, quoteStefanie, contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Von der _Idee_ bis zum Go-live."
        description="Webapps, APIs und DevOps, für Grossunternehmen und Start-ups: Seit 2012 haben wir Brandneues auf die Beine gestellt, bestehende Lösungen analysiert und Projekte über viele Jahre begleitet und weiterentwickelt. Immer agil, massgeschneidert und mit Leidenschaft. Und wiederholt ausgezeichnet."
      >
        <Lead>
          Webapps, APIs und DevOps, für Grossunternehmen und Start-ups: Seit 2012 haben wir Brandneues auf die Beine
          gestellt, bestehende Lösungen analysiert und Projekte über viele Jahre begleitet und weiterentwickelt. Immer agil,
          massgeschneidert und mit Leidenschaft. Und wiederholt ausgezeichnet.
        </Lead>
      </PageHeader>

      <main>
        <PageSection>
          <CustomersList customers={new Array(2).fill(customers).flat()} />
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
              awardTags={['Best of Swiss Web 2020', 'Best of Swiss Apps 2020']}
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

            {new Array(1).fill(imageCard).map(({ label, title, link, image }) => (
              <ImageCard label={label} title={title} link={link} image={image} />
            ))}
          </GridSlider>
          <QuoteCard quote={quoteStefanie} />
          <Grid cols={3}>
            {new Array(5).fill(imageCard).map(({ label, title, link, image }) => (
              <ImageCard label={label} title={title} link={link} image={image} />
            ))}
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
      quoteStefanie: Quotes['stefanie-abraxas'],
      contact: Employees.peter,
    },
  };
};

export default Projekte;
