import {
  BlobVariations,
  Clock,
  Copy,
  GridSlider,
  Heading2,
  Label,
  PageHeaderVariants,
  PageSection,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Teaser } from '../../data/teaser';
import { Page } from '../../layouts/page';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
};

const SolutionReview: NextPage<Props> = ({ contact, teasers, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle={Packages['solution-review'].title}
        description={Packages['solution-review'].content}
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
            liefern dir unsere Erkenntnisse, eine Risikoanalyse und Empfehlungen.
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
              <Heading2>Diese Projekte haben mit einem Solution Review gestartet:</Heading2>
              <GridSlider>
                {teasers.map((teaser) => (
                  <NextImageCard key={teaser.title} {...teaser} />
                ))}
              </GridSlider>
            </>
          )}
          <Heading2>Und damit könnte es nach deinem Solution Review weiter gehen:</Heading2>
          <PackageList packages={packages} />
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.speedboat, Packages.mentoring, Packages['design-sprint']];

  return {
    props: {
      packages,
      teasers: [],
      contact: Employees.joshua,
    },
  };
};

export default SolutionReview;
