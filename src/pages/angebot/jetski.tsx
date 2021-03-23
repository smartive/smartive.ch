import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { ContentCard } from '../../components/content-card';
import { ImageCard } from '../../components/image-card';
import { GridSlider } from '../../compositions/grid-slider';
import { PageHeader, PageHeaderVariants } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Teaser } from '../../data/teaser';
import { Label } from '../../elements/label';
import { Copy } from '../../identity/copy';
import { Heading2 } from '../../identity/heading-2';
import { Clock } from '../../identity/icons';
import { Page } from '../../layouts/page';

type Props = {
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const Jetski: NextPage<Props> = ({ contact, teasers, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Jetski"
        description="Lanciere in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt."
        variant={PageHeaderVariants.Card}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />3 Wochen
        </Label>
        <Copy>
          Lanciere in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt
          ankommt.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist ein Jetski?</Heading2>
          <Copy>
            Du hast eine Idee. Dir ist schon recht klar, wie das Produkt aussehen und funktionieren könnte. Du willst wissen,
            ob es trägt. In einer agilen Umsetzung mit Lean UX Ansätzen entwickeln wir dein MVP kollaborativ in drei Wochen
            entwickelt und auf den Markt gebracht. Die definierten Ziele und Kennzahlen (Key Performance Indicators oder kurz
            KPI) bleiben dabei laufend im Auge. Mit modernen Tracking-Methoden werden diese KPI nach der Lancierung gemessen
            und ausgewertet. So weisst du stets, welche Hypothesen korrekt waren und welche überarbeitet werden müssen.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'In einem interdisziplinären Team bringen wir dein Produkt in drei Wochen auf den Markt.',
                'Das Produkt hat eine solide technologische Basis und kann in Zukunft einfach skaliert und ausgebaut werden.',
                'Du weisst dank den definierten KPI und den Auswertungen stets, welche Teile deines Produkts gut funktionieren.',
                'Du hast eine konkrete Vorstellung davon, wie es weitergeht und wie der Prozess zur Skalierung deines Produktes aussieht.',
              ]}
            />
            <UnorderedList
              title="Das brauchen wir von dir"
              items={[
                'Du oder ein*e Entscheidungsträger*in aus deinem Team kann wöchentlich an Planning- und Review-Meetings teilnehmen.',
                'Du bist gewillt, sehr schnell vorwärts zu machen und Entscheide zu treffen.',
              ]}
            />
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            Ist ein Jetski das Richtige für dich?
            <br />
            {contact.firstname} bespricht das gerne mit dir!
          </Contact>
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
          <Heading2>Und damit könnte es nach dem Jetski weiter gehen:</Heading2>
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
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.mentoring, Packages['scale-up'], Packages['ideation-sprint']];

  return {
    props: {
      packages,
      teasers: [],
      contact: Employees.robert,
    },
  };
};

export default Jetski;
