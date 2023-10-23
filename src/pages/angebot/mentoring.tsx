import {
  BlobVariations,
  Clock,
  Copy,
  Grid,
  Heading2,
  Label,
  PageHeaderVariants,
  TextLink,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../../components/contact';
import { Page } from '../../../components/layouts/page';
import { Section } from '../../../components/layouts/section';
import { Testimonial } from '../../../components/testimonial';
import { NextImageCard } from '../../components/image-card';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
  quote: Quote;
};

const Mentoring: NextPage<Props> = ({ contact, teasers, packages, quote }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Mentoring"
        description="Profitier von einem erfahrenen Team und erhalte fortlaufend objektive Einschätzungen und Vorschläge für dein Projekt. Tausch dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt und deine Strategie aus. Durch unser konstruktives Feeback kannst du dein Vorgehen festigen und gewinnst Sicherheit, dass du auf dem richtigen Weg bist."
        variant={PageHeaderVariants.Card}
        background={Packages['mentoring'].background}
        blobs={BlobVariations.apricot[1]}
      >
        <Label className="mb-8 inline-flex flex-row items-center">
          <Clock className="mr-2 inline h-6 w-6" />
          Laufend
        </Label>
        <Copy>
          Profitier von einem erfahrenen Team und erhalte fortlaufend objektive Einschätzungen und Vorschläge für dein
          Projekt. Tausch dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt aus und erhalte
          konstruktives Feeback. So kannst du dein Vorgehen festigen und gewinnst Sicherheit, dass du auf dem richtigen Weg
          bist.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Heading2>Was beinhaltet das Mentoring?</Heading2>
          <Copy>
            Du möchtest ein digitales Produkt schaffen oder ein bestehendes weiterentwickeln, bist aber nicht ganz sicher, ob
            du auf dem richtigen Weg bist? Dir fehlt die Erfahrung im Aufbau oder der Entwicklung eines Produkts? Dann raten
            wir dir zu einem Mentoring.
          </Copy>
          <Copy>
            Den thematischen Fokus legen wir gemeinsam fest. Von Strategie über User Experience, agiles Projektmanagement und
            Entwicklung bis hin zu Cloud Deployments kann das alles sein. In den regelmässigen Gesprächen erhältst du
            objektives Feedback zu deinem Vorgehen und kannst Pitfalls frühzeitig erkennen.
          </Copy>
          <div className="mt-16 grid grid-flow-row grid-cols-1 gap-12 rounded bg-white-100 p-8 lg:gap-20 xl:grid-cols-2">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Du profitierst von der langjährigen Expertise unserer Digital Strategists.',
                <>
                  Wir lassen dir den Raum, deine Fragen selbst einzukreisen (
                  <TextLink href="https://de.wikipedia.org/wiki/Quietscheentchen-Debugging" newTab>
                    Rubber Ducking
                  </TextLink>
                  ), wir antworten aber auch.
                </>,
                'Du gewinnst Sicherheit in deinem Vorgehen.',
                'Wir haben ein Team mit Spezialist*innen für User Experience, DevOps und Software Entwicklung, das jederzeit hinzugezogen werden kann.',
              ]}
            />
            <UnorderedList title="Das brauchen wir von dir" items={['Einen regelmässigen Termin für einen Jour fixe.']} />
          </div>
        </Section>
        <Section>
          <Testimonial background="mint" blobs="mint-2" quote={quote} />
        </Section>
        <Section>
          <Contact contact={contact} />
        </Section>
        <Section>
          {teasers.length > 0 && (
            <>
              <Heading2>Diese Projekte haben mit einem Mentoring gestartet:</Heading2>
              <Grid cols={3}>
                {teasers.map((teaser) => (
                  <NextImageCard key={teaser.title} {...teaser} />
                ))}
              </Grid>
            </>
          )}
          <Heading2>Kannst du gut parallel zum Mentoring machen:</Heading2>
          <PackageList packages={packages} />
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.speedboat, Packages['scale-up'], Packages['design-sprint']];
  const teasers = [Teasers['zubi-mentoring'], Teasers['kaspar']];
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      packages,
      contact,
      quote: Quotes['lauro-kasparund'],
      teasers: teasers,
    },
  };
};

export default Mentoring;
