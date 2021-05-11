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

const DesignSprint: NextPage<Props> = ({ contact, packages, teasers }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Design Sprint"
        description="Gewinn ‌ein‌ ‌besseres‌ ‌Verständnis‌ ‌für‌ ‌die‌ ‌Bedürfnisse‌ ‌ deiner‌ ‌Nutzer‌ ‌und‌ ‌generiere‌ ‌daraus‌
          ‌funktionsfähige‌ ‌Ideen.‌ ‌Erhalte‌ ‌einen‌ ‌ersten‌ ‌visuellen‌ ‌Prototypen‌ ‌und‌ ‌hole‌ ‌Feedback‌ ‌deiner‌
          ‌Kunden‌ ‌dazu‌ ‌ab.‌"
        variant={PageHeaderVariants.Card}
        background={Packages['design-sprint'].background}
        blobs={BlobVariations.apricot[2]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />1 Woche
        </Label>
        <Copy>
          ‌Gewinn‌ ‌ein‌ ‌besseres‌ ‌Verständnis‌ ‌für‌ ‌die‌ ‌Bedürfnisse‌‌ deiner‌ ‌Nutzer‌ ‌und‌ ‌generier ‌daraus‌
          ‌funktionsfähige‌ ‌Ideen.‌ ‌Erhalte‌ ‌einen‌ ‌ersten‌ ‌visuellen‌ ‌Prototypen‌ ‌und‌ ‌hol‌ ‌Feedback‌ ‌deiner‌
          ‌Kunden‌ ‌dazu‌ ‌ab.‌
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist ein Design Sprint?</Heading2>
          <Copy>
            Du hast eine Marktlücke oder die Chance für einen Innovationssprung deines digitalen Produkts erkannt. Du bist
            dir aber nicht sicher, wie du die Herausforderung angehen sollst. In einem Workshop zerlegen wir gemeinsam mit
            Fachexpert*innen das Problem in seine Einzelteile und entwickeln daraus eine Lösung. Wir entwickeln einen
            visuellen, klickbaren Prototypen und führen bereits ein erstes Testing mit deinen po­ten­zi­ellen Nutzer*innen
            durch.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Du profitierst von einem agilen, hochqualifizierten Team.',
                'In wenigen Tagen wird eine konkrete und lösungsorientierte Idee für deine Herausforderung entwickelt.',
                'Du erhältst Rückmeldungen deiner Nutzer und weisst, ob deine Idee standhält.',
                'Du erhältst einen visuellen und klickbaren Prototypen, der bereits mit deiner Zielgruppe getestet wurde.',
              ]}
            />
            <UnorderedList
              title="Das brauchen wir von dir"
              items={[
                'Du hast 2 Tage Zeit, um mit uns an den Workshops zusammenzuarbeiten.',
                'Du kennst dich in deinem «Problem Space» aus und kannst diesen verständlich erklären.',
              ]}
            />
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            Fragen zum Ablauf des Design Sprints?
            <br /> {contact.firstname} hat Antworten!
          </Contact>
        </PageSection>
        <PageSection>
          {teasers.length > 0 && (
            <>
              <Heading2>Diese Projekte haben mit einem Design Sprint gestartet:</Heading2>
              <GridSlider>
                {teasers.map((teaser) => (
                  <NextImageCard key={teaser.title} {...teaser} />
                ))}
              </GridSlider>
            </>
          )}
          <Heading2>Und damit könnte es nach deinem Design Sprint weitergehen:</Heading2>
          <PackageList packages={packages} />
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.mentoring, Packages.speedboat, Packages['scale-up']];

  return {
    props: {
      packages,
      teasers: [],
      contact: Employees.robert,
    },
  };
};

export default DesignSprint;
