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

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
};

const Mentoring: NextPage<Props> = ({ contact, teasers, packages }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Mentoring"
        description="Profitiere von einem erfahrenen Team und erhalte fortlaufend objektive Einschätzungen und Vorschläge für dein Projekt. Tausche dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt und deine Strategie aus. Deine Ideen werden auf konstruktiv gechallenged. So kannst du dein Vorgehen festigen und gewinnst Sicherheit, dass du auf dem richtigen Weg bist."
        variant={PageHeaderVariants.Card}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />
          Laufend
        </Label>
        <Copy>
          Profitiere von einem erfahrenen Team und erhalte fortlaufend objektive Einschätzungen und Vorschläge für dein
          Projekt. Tausche dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt und deine
          Strategie aus. Deine Ideen werden auf konstruktiv gechallenged. So kannst du dein Vorgehen festigen und gewinnst
          Sicherheit, dass du auf dem richtigen Weg bist.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was beinhaltet das Mentoring?</Heading2>
          <Copy>
            Du möchtest ein digitales Produkt schaffen oder ein bestehendes weiterentwickeln, bist aber nicht immer ganz
            sicher ob du auf dem richtigen Weg bist? Dir fehlt die Erfahrung im Aufbau oder der Entwicklung eines Produkts?
            In einem regelmässigen Jour fixe tauscht du dich mit unseren Digital Strategists über das Projekt aus. Den
            thematischen Fokus legen wir gemeinsam fest, das von der Strategie, über User Experience, agiles Projekt
            Management, Entwicklung bis hin zu Cloud Deployments alles sein. In diesen Gesprächen erhältst du objektives
            Feedback zu deinem Vorgehen und kannst Pitfalls frühzeitig erkennen.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Du profitierst von der langjährigen Expertise unserer Digital Strategists.',
                'Wir erlauben dir ein persönliches Rubber Ducking, wir antworten aber auch.',
                'Du gewinnst Sicherheit in deinem Vorgehen.',
                'Wir haben ein Team aus der User Experience, DevOps und der Software Entwicklung, welches jederzeit hinzugezogen werden kann.',
              ]}
            />
            <UnorderedList title="Das brauchen wir von dir" items={['Einen regelmässigen Termin für einen Jour fixe.']} />
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
          <Heading2>Sowas kannst du gut parallel zum Mentoring machen:</Heading2>
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
  const packages = [Packages.speedboat, Packages['scale-up'], Packages['ideation-sprint']];

  return {
    props: {
      packages,
      teasers: [],
      contact: Employees.joshua,
    },
  };
};

export default Mentoring;
