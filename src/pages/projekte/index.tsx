import { BlobVariations, Copy, Grid, GridSlider, ImageCardVariants } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { CustomerList } from '../../components/customer-list';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Customer } from '../../data/customers';
import Customers from '../../data/customers.json';
import { Employee, getEmployeeByName } from '../../data/employees';

import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

type Props = {
  customers: Customer[];
  quote: Quote;
  contact: Employee;
  main: [Teaser, Teaser];
  teasers: Teaser[];
};

const Projekte: NextPage<Props> = ({ customers, quote, contact, main, teasers }) => {
  return (
    <Page>
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
        <Section>
          <CustomerList customers={customers} />
          <Grid cols={2}>
            {main.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} variant={ImageCardVariants.Big} />
            ))}
          </Grid>
          <GridSlider>
            {teasers.slice(0, 3).map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </GridSlider>
          <Testimonial quote={quote} background="apricot" blobs={BlobVariations.apricot[1]} />
          <Grid cols={3}>
            {teasers.slice(3, teasers.length).map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </Section>
        <Section>
          <Contact contact={contact}>
            <>
              Du hast eine Idee? <br />
              Besprich sie mit {contact.firstname}!
            </>
          </Contact>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const teasers = Object.values(Teasers)
    .slice()
    .reverse()
    .filter(({ title }) => ![Teasers.kaspar.title, Teasers.frontify.title].includes(title));
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      teasers,
      contact,
      main: [Teasers.kaspar, Teasers.frontify],
      customers: Object.values(Customers),
      quote: Quotes['setareh-dife'],
    },
  };
};

export default Projekte;
