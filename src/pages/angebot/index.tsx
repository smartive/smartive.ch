import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { PackageList } from '../../compositions/package-list';
import { Testimonial } from '../../components/testimonial';
import { LinkList } from '../../compositions/link-list';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Link } from '../../elements/link';
import { Copy } from '../../identity/copy';
import { Page } from '../../layouts/page';
import { BlobVariations } from '../../utils/blob-variations';

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
          <Link href="/projekte">die Projekte</Link>, die wir umgesetzt haben.
        </Copy>
      </PageHeader>

      <main>
        <PageSection title="Unser Vorgehen">
          <Copy>
            Wir arbeiten agil. Klingt gut, hat aber auch gute Gründe: Wir möchten nicht die Katze im Sack verkaufen. Und wir
            möchten etwas schaffen, das dich, deine Kund*innen und uns überzeugt. Mit Scrum stellen wir sicher, dass dein
            Projekt fortlaufend evaluiert wird und du in die Entwicklung miteinbezogen bist.
          </Copy>
          <LinkList
            links={[
              { label: 'Was, MVP?', href: '/angebot/mvp' },
              { label: 'Wie bitte, Scrum?', href: '/angebot/agile' },
            ]}
          />
        </PageSection>
        <PageSection>
          <Testimonial quote={quote} background="cornflower" blobs={BlobVariations.cornflower[3]} />
        </PageSection>
        <PageSection title="Etwas für jede Projektphase.">
          <Copy>
            Das Wichtigste zuerst: Unser Ziel ist es, dein Produkt zusammen mit dir so schnell wie möglich zu deinen Nutzern
            zu bringen. Denn wir glauben, dass ein Produkt in den Händen der Nutzerinnen mehr Wert bringt als ein Produkt in
            der Schublade, auch wenn es noch nicht alles kann.
          </Copy>
          <Copy>Vielleicht ist eins der folgenden Angebote etwas für dich?</Copy>
          <PackageList packages={packages} />
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = Object.values(Packages);

  return {
    props: {
      packages,
      quote: Quotes['benj-scrum'],
      contact: Employees.joshua,
    },
  };
};

export default Angebot;
