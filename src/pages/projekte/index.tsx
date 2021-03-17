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
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Grid } from '../../layouts/grid';
import { GridSlider } from '../../layouts/grid-slider';

type Props = {
  customers: Customer[];
  quote: Quote;
  contact: Employee;
  main: [Teaser, Teaser];
  teasers: Teaser[];
};

const Projekte: NextPage<Props> = ({ customers, quote, contact, main, teasers }) => {
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
        <CustomersList customers={customers} />
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            {main.map((teaser) => (
              <ImageCard key={teaser.title} {...teaser} variant={ImageCardVariants.Big} />
            ))}
          </Grid>
          <GridSlider>
            {teasers.slice(0, 3).map((teaser) => (
              <ImageCard key={teaser.title} {...teaser} />
            ))}
          </GridSlider>
          <QuoteCard quote={quote} />
          <Grid cols={3}>
            {teasers.slice(3, teasers.length).map((teaser) => (
              <ImageCard key={teaser.title} {...teaser} />
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
  const teasers = Object.values(Teasers).filter(
    ({ title }) => !['Der User im Mittelpunkt — seit 10 Jahren', 'Der mobile Einzalhandel'].includes(title)
  );

  return {
    props: {
      teasers,
      main: [Teasers.migipedia, Teasers.subsidia],
      customers: Object.values(Customers),
      quote: Quotes['coco-partner'],
      contact: Employees.joshua,
    },
  };
};

export default Projekte;
