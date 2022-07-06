import {
  BlobVariations,
  Clock,
  Copy,
  Grid,
  Heading2,
  Label,
  PageHeaderVariants,
  PageSection,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';

import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';

type Props = {
  contact: Employee;
  packages: Package[];
  teasers: Teaser[];
  quote: Quote;
};

const AgilePlayday: NextPage<Props> = ({ contact, teasers, packages, quote }) => (
  <Page>
    <PageHeader
      markdownTitle="Agile Playday"
      description="Du und dein Team lernt Scrum und agile Methoden auf eine verspielte und doch realitätsnahe Weise (besser) kennen."
      variant={PageHeaderVariants.Card}
      background={Packages['mentoring'].background}
      blobs={BlobVariations.apricot[1]}
    >
      <Label className="inline-flex flex-row items-center mb-8">
        <Clock className="h-6 w-6 mr-2 inline" />
        Ein Nachmittag
      </Label>
      <Copy>
        Du und dein Team lernt Scrum und agile Methoden auf eine verspielte und doch realitätsnahe Weise (besser) kennen. Ihr
        seht, was agile Methoden sind, wie ihr diese einsetzen könnt und was für euch Sinn macht (und was nicht). Und wir
        zeigen euch einen pragmatischen Weg auf, wie ihr dahin kommt.
      </Copy>
    </PageHeader>

    <main>
      <PageSection>
        <Heading2>Was beinhaltet der Agile Playday?</Heading2>
        <Copy>
          Du möchtest die teaminterne Zusammenarbeit verbessern und mit einem genau messbaren Plan zum (Projekt-)Ziel kommen?
          Ihr habt schon mal von Scrum gehört aber irgendwie funktioniert die gelernte Theorie in der Praxis nicht so
          richtig? Dann ist der Agile Playday genau das, was ihr braucht.
        </Copy>
        <Copy>
          Durch unsere langjährige Erfahrung wissen wir, wie es klappt und worauf es im Projektmanagement ankommt. In einem
          Vorbereitungsgespräch beurteilen wir deine aktuelle Situation, klären deine Bedürfnisse und nehmen deine Wünsche
          entgegen.
        </Copy>
        <Copy>
          Im gemeinsamen Workshop, mit deinem ganzen Team, decken wir euer Optimierungspotenzial auf und teilen unsere
          Erfahrungen mit euch. Dabei legen wir ein spezielles Augenmerk auf die Details, die dir besonders wichtig sind.
        </Copy>
        <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
          <UnorderedList
            title="Das hast du davon"
            items={[
              'Du erhältst einen auf dein Team zugeschnittenen Workshop.',
              'Du profitierst von der langjährigen Expertise unserer Digital Strategists.',
              'Du gewinnst Sicherheit in deinem Vorgehen.',
            ]}
          />
          <UnorderedList
            title="Das brauchen wir von dir"
            items={['Ein telefonisches Vorbereitungsgespräch', 'Einen Nachmittag mit dir und deinem ganzen Team']}
          />
        </div>
      </PageSection>
      <PageSection>
        <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
      </PageSection>
      <PageSection>
        <Contact contact={contact} />
      </PageSection>
      <PageSection>
        {teasers.length > 0 && (
          <>
            <Heading2>Mit uns zusammen Tennisbälle geworfen hat auch schon:</Heading2>
            <Grid cols={3}>
              {teasers.map((teaser) => (
                <NextImageCard key={teaser.title} {...teaser} />
              ))}
            </Grid>
          </>
        )}
        <Heading2>Damit könnte es nach dem Playday weitergehen:</Heading2>
        <PackageList packages={packages} />
      </PageSection>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages.mentoring, Packages['design-sprint']];
  const contact = await getEmployeeByName('Josh Wirth');

  return {
    props: {
      packages,
      contact,
      quote: Quotes['marco-zubi'],
      teasers: [Teasers['zubi-mentoring']],
    },
  };
};

export default AgilePlayday;
