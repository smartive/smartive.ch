import {
  BlobVariations,
  Clock,
  Copy,
  GridSlider,
  Heading2,
  Label,
  PageHeaderVariants,
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
import { Section } from '../../layouts/section';

type Props = {
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const FeasibilityWorkshop: NextPage<Props> = ({ contact, teasers, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Feasibility Workshop"
        description="Steck den Rahmen für dein MVP ab und schaff Klarheit, was die technischen, wirtschaftlichen und zeitlichen Bedingungen sind."
        variant={PageHeaderVariants.Card}
        blobs={BlobVariations.mint[1]}
        background="mint"
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />
          Ein Nachmittag
        </Label>
        <Copy>
          Steck den Rahmen für dein MVP ab und schaff Klarheit, was die technischen, wirtschaftlichen und zeitlichen
          Bedingungen sind.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Was ist ein Feasibility Workshop?</Heading2>
          <Copy>
            Du möchtest ein digitales Produkt schaffen oder ein bestehendes weiterentwickeln. Mit einem Feasibility Workshop
            erhältst du eine Einschätzung zur Machbarkeit deines Vorhabens. Gemeinsam erörtern wir den zeitlichen Rahmen,
            damit dein Projekt zum Erfolg wird.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Stichwortartiges Feature-Set für dein Vorhaben.',
                'Machbarkeitsanalyse für das ganze Projekt, unter Berücksichtigung von technischen, wirtschaftlichen und zeitlichen Aspekten.',
                'Priorisierung der Features und eine Einschätzung, was davon ins vorgeschlagene MVP passt.',
              ]}
            />
            <UnorderedList
              title="Das brauchen wir von dir"
              items={[
                'Einsicht in deine längerfristige Produktidee und -vision.',
                'Einsicht in deine bestehende Systemlandschaft.',
                'Teilnahme am Workshop (2-3 Stunden)',
              ]}
            />
          </div>
        </Section>
        <Section>
          <Contact contact={contact}>
            Ist ein Feasibility Workshop das Richtige für dich?
            <br />
            Dann ist {contact.firstname} der Richtige für dich!
          </Contact>
        </Section>
        <Section>
          {teasers.length > 0 && (
            <>
              <Heading2>Diese Projekte haben mit einem Feasibility Workshop gestartet:</Heading2>
              <GridSlider>
                {teasers.map((teaser) => (
                  <NextImageCard key={teaser.title} {...teaser} />
                ))}
              </GridSlider>
            </>
          )}
          <Heading2>Und damit könnte es nach dem Feasibility Workshop weiter gehen:</Heading2>
          <PackageList packages={packages} />
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages['design-sprint'], Packages.speedboat];

  return {
    props: {
      packages,
      teasers: [],
      contact: Employees.thomas,
    },
  };
};

export default FeasibilityWorkshop;
