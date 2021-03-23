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
import { BlobVariations } from '../../utils/blob-variations';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
};

const IdeationSprint: NextPage<Props> = ({ contact, packages, teasers }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Ideation Sprint"
        description="Gewinn ‌ein‌ ‌besseres‌ ‌Verständnis‌ ‌für‌ ‌die‌ ‌Bedürfnisse‌ ‌ deiner‌ ‌Nutzer‌ ‌und‌ ‌generiere‌ ‌daraus‌
          ‌funktionsfähige‌ ‌Ideen.‌ ‌Erhalte‌ ‌einen‌ ‌ersten‌ ‌visuellen‌ ‌Prototypen‌ ‌und‌ ‌hole‌ ‌Feedback‌ ‌deiner‌
          ‌Kunden‌ ‌dazu‌ ‌ab.‌"
        variant={PageHeaderVariants.Card}
        background={Packages['ideation-sprint'].background}
        blobs={BlobVariations.apricot[2]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />
          2–5 Tage
        </Label>
        <Copy>
          ‌Gewinn‌ ‌ein‌ ‌besseres‌ ‌Verständnis‌ ‌für‌ ‌die‌ ‌Bedürfnisse‌‌ deiner‌ ‌Nutzer‌ ‌und‌ ‌generier ‌daraus‌
          ‌funktionsfähige‌ ‌Ideen.‌ ‌Erhalte‌ ‌einen‌ ‌ersten‌ ‌visuellen‌ ‌Prototypen‌ ‌und‌ ‌hol‌ ‌Feedback‌ ‌deiner‌
          ‌Kunden‌ ‌dazu‌ ‌ab.‌
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist ein Ideation Sprint?</Heading2>
          <Copy>
            Du hast eine Marktlücke oder die Chance für einen Innovationssprung deines digitalen Produkts erkannt. Du bist
            dir aber nicht sicher, wie du die Herausforderung angehen sollst. In einem Ideation Workshop zerlegen wir
            gemeinsam mit Fachexpert*innen das Problem in seine Einzelteile und entwickeln daraus eine Lösung. Dabei setzen
            wir auf modernste Methoden wie Design Sprints oder Lightning Decision Jams. Je nach Komplexität der
            Herausforderung entwickeln wir einen visuellen, klickbaren Prototypen und führen bereits ein erstes Testing mit
            deinen po­ten­zi­ellen Nutzern durch.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Du profitierst von einem agilen, hochqualifizierten Team.',
                'In wenigen Tagen wird eine konkrete und lösungsorientierte Idee für deine Herausforderung entwickelt.',
                'Du erhältst Rückmeldungen deiner Nutzer zur Idee und weisst, ob sie standhält.',
                'Bei komplexeren Ideen hast du einen visuellen und klickbaren Prototypen, der bereits mit deiner Zielgruppe getestet wurde.',
              ]}
            />
            <UnorderedList
              title="Das brauchen wir von dir"
              items={[
                'Du hast 2 - 3 Tage Zeit, um mit uns an den Workshops zusammen zu arbeiten.',
                'Du kennst dich in deinem “Problem Space” aus und kannst diesen verständlich erklären.',
              ]}
            />
          </div>
        </PageSection>
        <PageSection>
          <Contact contact={contact}>
            Fragen zum Ablauf des Ideation Sprints?
            <br /> {contact.firstname} hat Antworten!
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
          <Heading2>Und damit könnte es nach deinem Ideation Sprint weitergehen:</Heading2>
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
  const packages = [Packages.mentoring, Packages.speedboat, Packages['scale-up']];

  return {
    props: {
      packages,
      teasers: [],
      contact: Employees.robert,
    },
  };
};

export default IdeationSprint;
