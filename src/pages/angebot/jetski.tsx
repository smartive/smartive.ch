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
import { Link } from '../../elements/link';

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
        blobs={BlobVariations.cornflower[2]}
      >
        <Label className="mb-8 inline-flex flex-row items-center">
          <Clock className="mr-2 inline h-6 w-6" />3 Wochen
        </Label>
        <Copy>
          Lanciere in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt
          ankommt.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Was ist ein Jetski?</Heading2>
          <Copy>
            Du hast eine Idee. Dir ist schon recht klar, wie das Produkt aussehen und funktionieren könnte. Nun willst du
            wissen, ob es trägt. In einer <Link href="/was-ist/agile">agilen</Link>
            Umsetzung mit <Link href="/was-ist/lean-ux">Lean UX</Link>
            -Ansätzen entwickeln wir dein <Link href="/was-ist/mvp">MVP</Link>
            kollaborativ in drei Wochen. Die definierten Ziele und Kennzahlen (Key Performance Indicators oder kurz KPI)
            behalten wir dabei laufend im Auge. Mit modernen Tracking-Methoden werden diese KPI nach der Lancierung gemessen
            und ausgewertet. So weisst du stets, welche Hypothesen korrekt waren und welche überarbeitet werden müssen.
          </Copy>
          <div className="mt-16 grid grid-flow-row grid-cols-1 gap-12 rounded bg-white-100 p-8 lg:gap-20 xl:grid-cols-2">
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
        </Section>
        <Section>
          <Contact contact={contact}>
            Ist ein Jetski das Richtige für dich?
            <br />
            {contact.firstname} bespricht das gerne mit dir!
          </Contact>
        </Section>
        <Section>
          {teasers.length > 0 && (
            <>
              <Heading2>Diese Projekte haben mit einem Jetski gestartet:</Heading2>
              <GridSlider>
                {teasers.map((teaser) => (
                  <NextImageCard key={teaser.title} {...teaser} />
                ))}
              </GridSlider>
            </>
          )}
          <Heading2>Und damit könnte es nach dem Jetski weiter gehen:</Heading2>
          <PackageList packages={packages} />
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.mentoring, Packages['scale-up'], Packages['design-sprint']];
  const contact = await getEmployeeByName('Robert Vogt');

  return {
    props: {
      packages,
      contact,
      teasers: [],
    },
  };
};

export default Jetski;
