import { BlobVariations, Copy, TextLink, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { Contact } from '../../components/contact';
import { Testimonial } from '../../components/testimonial';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, transformEmployee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Quote, transformQuote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

type Props = {
  contact: Employee;
  packages: Package[];
  quote: Quote;
};

const Angebot: NextPage<Props> = ({ packages, quote, contact }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Gemeinsam zu deinem _digitalen_ Produkt."
        description="Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte. Unsere Kunden reichen vom Startup bis zur grössten Arbeitgeberin der Schweiz."
      >
        <Copy>
          Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte. Unsere
          Kunden reichen vom Startup bis zur grössten Arbeitgeberin der Schweiz. Mehr dazu? Wirf einen Blick auf{' '}
          <NextLink href="/projekte" passHref>
            <TextLink href="/projekte">die Projekte</TextLink>
          </NextLink>
          , die wir umgesetzt haben.
        </Copy>
      </PageHeader>

      <main>
        <Section title="Unser Vorgehen">
          <Copy>
            Wir arbeiten agil. Klingt gut, hat aber auch gute Gründe: Wir möchten nicht die Katze im Sack verkaufen. Und wir
            möchten etwas schaffen, das dich, deine Kund*innen und uns überzeugt. Mit Scrum stellen wir sicher, dass dein
            Projekt fortlaufend evaluiert wird und du in die Entwicklung miteinbezogen bist.
          </Copy>
          <LinkList
            linkWrapper={NextLink}
            links={[
              { label: 'Was, MVP?', href: '/was-ist/mvp' },
              { label: 'Wie bitte, Scrum?', href: '/was-ist/agile' },
            ]}
          />
        </Section>
        <Section>
          <Testimonial quote={quote} background="cornflower" blobs={BlobVariations.cornflower[3]} />
        </Section>
        <Section title="Etwas für jede Projektphase.">
          <Copy>
            Wir sind davon überzeugt, dass ein Produkt in den Händen der Nutzer*innen mehr wert ist als eines, das nie das
            Tageslicht erblickt. Unser Ziel besteht darin, dein Produkt so schnell wie möglich auf den Markt zu bringen.
          </Copy>
          <Copy>Klingt gut? Gerne unterstützen wie dich mit den folgenden Angeboten:</Copy>
          <PackageList packages={packages} />
        </Section>
        <Section>
          <Contact contact={contact} />
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const hiddenPackages = ['Jetski'];
  const packages = Object.values(Packages).filter(({ title }) => !hiddenPackages.includes(title));

  return {
    props: {
      packages,
      quote: await transformQuote(Quotes['benj-scrum']),
      contact: await transformEmployee(Employees.joshua),
    },
  };
};

export default Angebot;
