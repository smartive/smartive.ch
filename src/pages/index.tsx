import { BlobVariations, Copy, GridSlider, LinkList, PageSection } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { usePlausible } from 'next-plausible';
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
import { getPlaceholders, PlaceholderImages } from '../utils/image-placeholders';
import { PlausibleEvents } from '../utils/tracking';

const STATIC_IMAGES = {
  main: '/images/mood/YB_07015.jpg',
  migipedia: '/images/projekte/migipedia/RGB_02_snack_001.jpg',
  subsidia: '/images/projekte/subsidia/pwa-etikett-scan.png',
} as const;

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  contact: Employee;
  customers: Customer[];
  quote: Quote;
  packages: Package[];
};

const Home: NextPage<Props> = ({ contact, customers, quote, packages, images }) => {
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <Page>
      <PageHeader
        markdownTitle="Wir erschaffen _digitale_ Produkte. Zusammen mit dir."
        description="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden."
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
        <PageSection>
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
              title="Der User im Mittelpunkt – seit 10 Jahren"
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={images.migipedia}
              imageAlt="Frau sitzt mit Handy am Boden"
            />
            <NextImageCard
              label="Projekt — Subsidia"
              title="Digitalisierung der Lifestyle-Branche."
              link={{ label: 'Mehr erfahren', href: '/projekte/subsidia' }}
              image={images.subsidia}
              imageAlt="Verkäuferin scannt Etikett eines Kleidungsstücks mit dem Smartphone"
            />
            <NextContentCard
              label="Schatztruhe 💎"
              title="Adventskalender"
              content="Zum Advent öffnen wir unsere Schatztruhe. Hinter den 24 Türchen verraten unsere smarties ihre Lieblingstools."
              background="mint"
              link={{
                label: 'Zum Adventskalender',
                href: 'https://advent.smartive.ch',
                newTab: true,
              }}
            />
          </GridSlider>
        </PageSection>
        <PageSection title="Weiter gebracht haben wir unter anderem schon">
          <CustomerList customers={customers} />
        </PageSection>
        <PageSection>
          <Testimonial quote={quote} blobs={BlobVariations.apricot[0]} />
        </PageSection>
        <PageSection title="Wir unterstützen dich, egal wie weit du schon bist.">
          <Copy>
            In welcher Phase steckt dein Projekt? Mit unserer langjährigen Expertise unterstützen wir dich von der Idee bis
            über den Go-live hinaus.
          </Copy>
          <PackageList packages={packages} />
        </PageSection>
        <PageSection>
          <NewsletterCard background="cornflower" blobs={BlobVariations.cornflower[2]} />
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            <>
              Alles unklar? <br />
              Frag {contact.firstname}.
            </>
          </Contact>
        </PageSection>
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
