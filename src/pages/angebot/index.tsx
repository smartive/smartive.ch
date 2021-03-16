import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { BlobColor, PositionX, PositionY } from '../../components/blob';
import { Testimonial } from '../../components/testimonial';
import { Contact } from '../../compositions/contact';
import { ContentCard } from '../../compositions/content-card';
import { LinkList } from '../../compositions/link-list';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Copy } from '../../elements/copy';
import { Clock } from '../../elements/icons';
import { Link } from '../../elements/link';
import { GridSlider } from '../../layouts/grid-slider';

type Props = {
  contact: Employee;
  packages: Package[];
  quote: Quote;
};

const Angebot: NextPage<Props> = ({ packages, quote, contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Gemeinsam zu deinem _digitalen_ Produkt."
        description="Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte. Unsere Kunden reichen vom Startup bis zur grössten Arbeitgeberin der Schweiz."
      >
        <Copy>
          Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte. Unsere
          Kunden reichen vom Startup bis zur grössten Arbeitgeberin der Schweiz.
        </Copy>
        <Copy>
          Wir sind überzeugt, dass die besten Resultate gemeinsam in einem iterativen Vorgehen entstehen. Was wir darunter
          verstehen, liest du unten. Oder du wirfst einen Blick auf <Link href="/projekte">die Projekte</Link>, die wir
          umgesetzt haben.
        </Copy>
      </PageHeader>

      <main>
        <PageSection title="Wir arbeiten agil.">
          <Copy>
            Wir arbeiten agil. Klingt gut, hat aber auch gute Gründe: Wir möchten nicht die Katze im Sack verkaufen. Und wir
            möchten etwas schaffen, das dich, deine Kund*innen und uns überzeugt. Mit Scrum stellen wir sicher, dass dein
            Projekt fortlaufend evaluiert wird und du in die Entwicklung mit einbezogen bist.
          </Copy>
          <LinkList
            links={[
              { label: 'Was, MVP?', href: '/angebot/mvp' },
              { label: 'Wie bitte, Scrum?', href: '/angebot/agile' },
            ]}
          />
        </PageSection>
        <PageSection>
          <Testimonial
            quote={quote}
            background="bg-cornflower-500"
            blobs={[
              { positionX: PositionX.right, positionY: PositionY.bottom, color: BlobColor.apricot },
              { positionX: PositionX.right, positionY: PositionY.bottom, color: BlobColor.mint },
              { positionX: PositionX.left, positionY: PositionY.top, color: BlobColor.apricot },
              { positionX: PositionX.left, positionY: PositionY.bottom, color: BlobColor.apricot },
              { positionX: PositionX.left, positionY: PositionY.bottom, color: BlobColor.mint },
            ]}
          />
        </PageSection>
        <PageSection title="Etwas für jede Projektphase.">
          <Copy>
            Wichtig ist: Wir versuchen mit dir gemeinsam dein Produkt so schnell wie möglich an deine Nutzer zu bringen. Denn
            wir glauben, dass ein Produkt in den Händen der Nutzer mehr Wert bringt als ein Produkt in der Schublade, auch
            wenn es noch nicht alles kann.
          </Copy>
          <Copy>Vielleicht ist eines der folgenden Angebot was für dich?</Copy>
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
      quote: Quotes['benj-scrum'],
      contact: Employees.joshua,
    },
  };
};

export default Angebot;
