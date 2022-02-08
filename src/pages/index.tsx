import { BlobVariations, Copy, GridSlider, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { Contact } from '../components/contact';
import { NextContentCard } from '../components/content-card';
import { CustomerList } from '../components/customer-list';
import { NextImageCard } from '../components/image-card';
import { NewsletterCard } from '../components/newsletter-card';
import { Testimonial } from '../components/testimonial';
import { PackageList } from '../compositions/package-list';
import { PageHeader } from '../compositions/page-header';
import { Customer } from '../data/customers';
import Customers from '../data/customers.json';
import { Employee, transformEmployee } from '../data/employees';
import Employees from '../data/employees.json';
import Packages, { Package } from '../data/packages';
import { Quote, transformQuote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { PlaceholderImage } from '../elements/placeholder-image';
import { Page } from '../layouts/page';
import { Section } from '../layouts/section';
import { getPlaceholders, PlaceholderImages } from '../utils/image-placeholders';

const STATIC_IMAGES = {
  main: '/images/mood/YB_07015.jpg',
  migipedia: '/images/projekte/migipedia/RGB_02_snack_001.jpg',
  zubi: '/images/projekte/zubi/zubi_lagerfeuer.png',
} as const;

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  contact: Employee;
  customers: Customer[];
  quote: Quote;
  packages: Package[];
};

const Home: NextPage<Props> = ({ contact, customers, quote, packages, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Wir erschaffen _digitale_ Produkte. Zusammen mit dir."
        description="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kund*innen."
      >
        <LinkList
          linkWrapper={NextLink}
          links={[
            { label: 'Wie machen wir das?', href: '/angebot' },
            { label: 'Projekte anschauen', href: '/projekte' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <PlaceholderImage
            image={images.main}
            alt="Drei smartive Mitarbeiter beim Gespräch vor einem Computerbildschirm"
            priority
            objectFit="cover"
            layout="responsive"
            width={1504}
            height={800}
          />
          <GridSlider>
            <NextImageCard
              label="Projekt — Migipedia"
              title="Das ausgezeichnete Migipedia"
              link={{ label: 'Zur Migros-Community', href: '/projekte/migipedia' }}
              image={images.migipedia}
              imageAlt="Frau sitzt mit Handy am Boden"
            />
            <NextImageCard
              label="Projekt — Zubi"
              title="Die Schuhe mit smartive schnüren"
              link={{ label: 'Mehr zu Zubi und smartive', href: '/projekte/zubi' }}
              image={images.zubi}
              imageAlt="Frau in Outdoor-Kleidung am Lagerfeuer"
            />
            <NextContentCard
              label="Neues vom Blog"
              title="Wie Thilo deine Suche optimiert"
              content="In diesem Beitrag zeigt Thilo, wie wir reale Nutzerdaten verwenden um deine Suchmaschine mit quantitativen Analysen zu optimieren."
              background="mint"
              link={{
                label: 'Den Blogpost lesen',
                href: 'https://smartive.ch/blog/improve-your-full-text-search',
                newTab: true,
              }}
            />
          </GridSlider>
        </Section>
        <Section title="Weiter gebracht haben wir unter anderem schon">
          <CustomerList customers={customers} />
        </Section>
        <Section>
          <Testimonial quote={quote} blobs={BlobVariations.apricot[0]} />
        </Section>
        <Section title="Wir unterstützen dich, egal wie weit du schon bist.">
          <Copy>
            In welcher Phase steckt dein Projekt? Mit unserer langjährigen Expertise unterstützen wir dich von der Idee bis
            über den Go-live hinaus.
          </Copy>
          <PackageList packages={packages} />
        </Section>
        <Section>
          <NewsletterCard background="cornflower" blobs={BlobVariations.cornflower[2]} />
        </Section>
        <Section>
          <Contact contact={contact}>
            <>
              Alles unklar? <br />
              Frag {contact.firstname}.
            </>
          </Contact>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages['design-sprint'], Packages['speedboat'], Packages['scale-up'], Packages['solution-review']];
  const images = await getPlaceholders(STATIC_IMAGES);

  return {
    props: {
      images,
      packages,
      quote: await transformQuote(Quotes['marc-frontify']),
      contact: await transformEmployee(Employees.peter),
      customers: Object.values(Customers),
    },
  };
};

export default Home;
