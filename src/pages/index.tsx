import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { CustomersList } from '../components/customers-list';
import { NewsletterCard } from '../components/newsletter-card';
import { Testimonial } from '../components/testimonial';
import { Contact } from '../compositions/contact';
import { ContentCard } from '../compositions/content-card';
import { ImageCard } from '../compositions/image-card';
import { LinkList } from '../compositions/link-list';
import { PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Customer } from '../data/customers';
import Customers from '../data/customers.json';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import Packages, { Package } from '../data/packages';
import { Quote } from '../data/quotes';
import Quotes from '../data/quotes.json';
import { Copy } from '../elements/copy';
import { Clock } from '../elements/icons';
import { GridSlider } from '../layouts/grid-slider';
import { BlobVariations } from '../utils/blob-variations';

type Props = {
  contact: Employee;
  customers: Customer[];
  quote: Quote;
  packages: Package[];
};

const Home: NextPage<Props> = ({ contact, customers, quote, packages }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Wir erschaffen _digitale_ Produkte. Zusammen mit dir."
        description="Wir sind smartive — eine dynamische, innovative Schweizer Webentwicklungsagentur. Die Realisierung zeitgemässer Weblösungen gehört genauso zu unserer Passion, wie die konstruktive Zusammenarbeit mit unseren Kundinnen und Kunden."
      >
        <LinkList
          links={[
            { label: 'Wie machen wir das?', href: '/angebot' },
            { label: 'Projekte anschauen', href: '/projekte' },
          ]}
        />
      </PageHeader>

      <main>
        <PageSection>
          <Image
            className="rounded bg-mint-200"
            src="/images/mood/YB_07015.jpg"
            alt="Drei smartive Mitarbeiter beim Gespräch vor einem Computerbildschirm"
            priority
            objectFit="cover"
            layout="responsive"
            width={1504}
            height={800}
          />
          <GridSlider>
            <ImageCard
              label="Projekt — Migipedia"
              title="Der User im Mittelpunkt – seit 10 Jahren"
              link={{ label: 'Projekt anschauen', href: '/projekte/migipedia' }}
              image={{ src: '/images/projekte/migipedia/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="Projekt — Subsidia"
              title="Digitalisierung der Lifestyle-Branche."
              link={{ label: 'Mehr erfahren', href: '/projekte/subsidia' }}
              image={{
                src: '/images/projekte/subsidia/pwa-etikett-scan.png',
                alt: 'Verkäuferin scannt Etikett eines Kleidungsstücks mit dem Smartphone',
              }}
            />
            <ContentCard
              label="WHOOP WHOOP! 📣🥳"
              title="Migipedia ist Masterkandidat der Best of Swiss Web Awards!"
              content="Zum 10 jährigen Jubiläum von Migipedia haben wir die Migros Community komplett überarbeitet. Und nun stehen wir mit Migipedia auf der Shortlist für Best of Swiss Web! Wir sind mega happy und freuen uns auf die Award-Night."
              background="cornflower"
              link={{
                newTab: true,
                label: 'Zur Master Nomination',
                href: 'https://www.bestofswissweb.swiss/de/hall-of-fame/master/2021/',
              }}
            />
          </GridSlider>
        </PageSection>
        <PageSection title="Weiter gebracht haben wir unter anderem schon">
          <CustomersList customers={customers} />
        </PageSection>
        <PageSection>
          <Testimonial quote={quote} blobs={BlobVariations.apricot[0]} />
        </PageSection>
        <PageSection title="Wir unterstützen dich, egal wie weit du schon bist.">
          <Copy>
            In welcher Phase steckt dein Projekt? Mit unserer langjährigen Expertise unterstützen wir dich von der Idee bis
            über den Golive hinaus.
          </Copy>
          <GridSlider>
            {packages.map(({ label, ...paeckli }) => (
              <ContentCard
                {...paeckli}
                key={paeckli.title}
                label={
                  <>
                    <Clock className="h-4 w-4 mr-2 inline" />
                    {label}
                  </>
                }
              />
            ))}
          </GridSlider>
        </PageSection>
        <PageSection>
          <NewsletterCard background="cornflower" blobs={BlobVariations.cornflower[2]} />
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages['ideation-sprint'], Packages['speedboat'], Packages['scale-up'], Packages['solution-review']];

  return {
    props: {
      packages,
      contact: Employees.peter,
      customers: Object.values(Customers),
      quote: Quotes['marc-frontify'],
    },
  };
};

export default Home;
