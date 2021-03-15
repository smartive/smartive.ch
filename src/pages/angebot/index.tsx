import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { QuoteCard } from '../../components/quote-card';
import { ContentCard } from '../../compositions/content-card';
import { LinkList } from '../../compositions/link-list';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Clock } from '../../elements/icons';
import { Copy } from '../../elements/copy';
import { Link } from '../../elements/link';
import { GridSlider } from '../../layouts/grid-slider';

type Props = {
  packages: Package[];
  quote: Quote;
};

const Angebot: NextPage<Props> = ({ packages, quote }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Gemeinsam zu deinem _digitalen_ Produkt."
        description="Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte. Unsere Kunden reichen vom Startup bis zur grösste Arbeitgeberin der Schweiz."
      >
        <Copy>
          Wir beraten, konzipieren und entwickeln. Unser Markenzeichen sind massgeschneiderte digitale Produkte. Unsere
          Kunden reichen vom Startup bis zur grösste Arbeitgeberin der Schweiz.
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
              { label: 'Wie kann ich mein Projekt möglichst schnell lancieren?', href: '/blog/mvp' },
              { label: 'Wie bitte, Scrum?', href: '/blog/scrum' },
            ]}
          />
        </PageSection>
        <PageSection>
          <QuoteCard quote={quote} />
        </PageSection>
        <PageSection title="Etwas für jede Projektphase.">
          <Copy>
            Wichtig ist: Wir versuchen mit dir gemeinsam dein Produkt so schnell wie möglich an deine Nutzer zu bringen. Denn
            wir glauben, dass ein Produkt in den Händen der Nutzer mehr Wert bringt als ein Produkt in der Schublade, auch
            wenn es noch nicht alles kann.
          </Copy>
          <Copy>Vielliecht ist eines der folgenden Angebot was für dich?</Copy>
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
    },
  };
};

export default Angebot;
