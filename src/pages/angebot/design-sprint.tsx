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
import { Contact } from '../../../components/contact';
import { Page } from '../../../components/layouts/page';
import { Section } from '../../../components/layouts/section';
import { NextImageCard } from '../../components/image-card';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import Packages, { Package } from '../../data/packages';
import { Teaser } from '../../data/teaser';

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
        description="Gewinn ‌ein‌ ‌besseres‌ ‌Verständnis‌ ‌für‌ ‌die‌ ‌Bedürfnisse‌ deiner‌ ‌Nutzer‌ ‌und‌ ‌generiere‌ ‌daraus‌
          ‌funktionsfähige‌ ‌Ideen.‌ ‌Erhalte‌ ‌einen‌ ‌ersten‌ ‌visuellen‌ ‌Prototypen‌ ‌und‌ ‌hole‌ ‌Feedback‌ ‌deiner‌
          ‌Kunden‌ ‌dazu‌ ‌ab.‌"
        variant={PageHeaderVariants.Card}
        background={Packages['design-sprint'].background}
        blobs={BlobVariations.apricot[2]}
      >
        <Label className="mb-8 inline-flex flex-row items-center">
          <Clock className="mr-2 inline h-6 w-6" />1 Woche
        </Label>
        <Copy>
          ‌Gewinn‌ ‌ein‌ ‌besseres‌ ‌Verständnis‌ ‌für‌ ‌die‌ ‌Bedürfnisse‌‌ deiner‌ ‌Nutzer‌ ‌und‌ ‌generier ‌daraus‌
          ‌funktionsfähige‌ ‌Ideen.‌ ‌Erhalte‌ ‌einen‌ ‌ersten‌ ‌visuellen‌ ‌Prototypen‌ ‌und‌ ‌hol‌ ‌Feedback‌ ‌deiner‌
          ‌Kunden‌ ‌dazu‌ ‌ab.‌
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Was ist ein Design Sprint?</Heading2>
          <Copy>
            Du hast eine Marktlücke oder die Chance für einen Innovationssprung deines digitalen Produkts erkannt. Du bist
            dir aber nicht sicher, wie du die Herausforderung angehen sollst. In einem Workshop zerlegen wir gemeinsam mit
            Fachexpert*innen das Problem in seine Einzelteile und entwickeln daraus eine Lösung. Wir entwickeln einen
            visuellen, klickbaren Prototypen und führen bereits ein erstes Testing mit deinen po­ten­zi­ellen Nutzer*innen
            durch.
          </Copy>
          <div className="mt-16 grid grid-flow-row grid-cols-1 gap-12 rounded bg-white-100 p-8 lg:gap-20 xl:grid-cols-2">
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
        </Section>
        <Section>
          <Contact contact={contact}>
            Fragen zum Ablauf des Design Sprints?
            <br /> {contact.firstname} hat Antworten!
          </Contact>
        </Section>
        <Section>
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
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.mentoring, Packages.speedboat, Packages['scale-up']];
  const contact = await getEmployeeByName('Robert Vogt');

  return {
    props: {
      packages,
      contact,
      teasers: [],
    },
  };
};

export default DesignSprint;
