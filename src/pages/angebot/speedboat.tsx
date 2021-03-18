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
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Heading2 } from '../../elements/heading-2';
import { Clock } from '../../elements/icons';
import { Label } from '../../elements/label';
import { Grid } from '../../layouts/grid';
import { GridSlider } from '../../layouts/grid-slider';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
};

const Speedboat: NextPage<Props> = ({ contact, packages, teasers }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Speedboat"
        description="Lanciere in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt."
        variant={PageHeaderVariants.Card}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />4 Wochen
        </Label>
        <Copy>
          Lanciere in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt
          ankommt.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist ein Speedboat?</Heading2>
          <Copy>
            Du hast eine Idee. Dir ist schon recht klar, wie das Produkt aussehen und funktionieren könnte. Du willst wissen,
            ob es trägt. In einer agilen Umsetzung mit Lean UX Ansätzen entwickeln wir dein MVP kollaborativ in vier Wochen
            entwickelt und auf den Markt gebracht. Die definierten Ziele und Kennzahlen (Key Performance Indicators oder kurz
            KPI) bleiben dabei laufend im Auge. Mit modernen Tracking-Methoden werden diese KPI nach der Lancierung gemessen
            und ausgewertet. So weisst du stets, welche Hypothesen korrekt waren und welche überarbeitet werden müssen.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'In einem interdisziplinären Team bringen wir dein Produkt in vier Wochen auf den Markt.',
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
          <Contact contact={contact} />
        </PageSection>
        <PageSection>
          <Heading2>Diese Projekte haben mit einem Ideation Sprint gestartet:</Heading2>
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <ImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
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
  const packages = [Packages.mentoring, Packages['scale-up'], Packages['ideation-sprint']];

  return {
    props: {
      packages,
      teasers: [Teasers.subsidia, Teasers['supply-chain']],
      contact: Employees.robert,
    },
  };
};

export default Speedboat;
