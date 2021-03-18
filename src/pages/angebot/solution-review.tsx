import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../compositions/contact';
import { ContentCard } from '../../compositions/content-card';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader, PageHeaderVariants } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Teaser } from '../../data/teaser';
import { Copy } from '../../elements/copy';
import { Heading2 } from '../../elements/heading-2';
import { Clock } from '../../elements/icons';
import { Label } from '../../elements/label';
import { GridSlider } from '../../layouts/grid-slider';
import { BlobVariations } from '../../utils/blob-variations';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
};

const SolutionReview: NextPage<Props> = ({ contact, teasers, packages }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Solution Review"
        description="Erhalte eine objektive Einschätzung der Chancen und Risiken deines digitalen Produkts sowie einen klaren Massnahmenplan, was du verbessern kannst."
        variant={PageHeaderVariants.Card}
        background={Packages['solution-review'].background}
        blobs={BlobVariations.mint[1]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />5 Tage
        </Label>
        <Copy>
          Erhalte eine objektive Einschätzung der Chancen und Risiken deines digitalen Produkts sowie einen klaren
          Massnahmenplan, was du verbessern kannst.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist ein Solution Review?</Heading2>
          <Copy>
            Du hast ein digitales Produkt am Markt. Es geht nicht voran oder du bist dir nicht sicher, ob die Lösung hält,
            was sie verspricht. Du möchtest das Produkt verbessern oder weiterentwickeln, bist dir aber nicht darüber im
            Klaren, welches die nächsten Schritte sind. Bei einem Solution Review analysieren wir deine bestehende Lösung und
            liefern dir unsere Erkenntnisse, Risiken und Empfehlungen.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Eine objektive Meinung, wie es um dein Produkt steht.',
                'Eine Dokumentation mit unseren Erkenntnissen, den vorhandenen Risiken und konkreten Empfehlungen.',
                'Eine zweistündige Präsentation mit Zeit für Fragen von deiner Seite.',
              ]}
            />
            <UnorderedList
              title="Das brauchen wir von dir"
              items={[
                'Zugriff auf den Source Code und dessen Dokumentation.',
                'Du bist offen für konstruktives Feedback mit konkreten Empfehlungen für dein Produkt.',
                'Du hast zwei Stunden Zeit für die Präsentation unserer Resultate.',
                'Eine Liste mit konkreten Fragen oder Fokusthemen für den Review, falls du das hast.',
              ]}
            />
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact} />
        </PageSection>
        <PageSection>
          {teasers.length > 0 && (
            <>
              <Heading2>Diese Projekte haben mit einem Ideation Sprint gestartet:</Heading2>
              <GridSlider>
                {teasers.map((teaser) => (
                  <ImageCard key={teaser.title} {...teaser} />
                ))}
              </GridSlider>
            </>
          )}
          <Heading2>Und damit könnte es nach deinem Ideation Sprint weiter gehen:</Heading2>
          <GridSlider>
            {packages.map((paeckli) => (
              <ContentCard
                key={paeckli.title}
                {...paeckli}
                label={
                  <>
                    <Clock className="h-4 w-4 mr-2 inline" />
                    {paeckli.label}
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
  const packages = [Packages.speedboat, Packages.mentoring, Packages['ideation-sprint']];

  return {
    props: {
      packages,
      teasers: [],
      contact: Employees.joshua,
    },
  };
};

export default SolutionReview;
