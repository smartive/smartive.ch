import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../compositions/contact';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader, PageHeaderVariants } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages from '../../data/packages';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Heading2 } from '../../elements/heading-2';
import { Clock } from '../../elements/icons';
import { Label } from '../../elements/label';
import { Grid } from '../../layouts/grid';
import { BlobVariations } from '../../utils/blob-variations';

type Props = {
  contact: Employee;
  teasers: Teaser[];
};

const ScaleUp: NextPage<Props> = ({ contact, teasers }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Scale Up"
        description="Baue deinen MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts."
        variant={PageHeaderVariants.Card}
        background={Packages['scale-up'].background}
        blobs={BlobVariations.cornflower[3]}
      >
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />
          2-3 Monate
        </Label>
        <Copy>Baue deinen MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts.</Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist heisst Scale Up?</Heading2>
          <Copy>
            Du hast dein Produkt als MVP am Markt. Du möchtest es entweder verbessern oder weiterentwickeln. Die angestrebten
            Ziele und sind definiert und werden gemessen. Anhand dieser Ziele legen wir gemeinsam deine nächsten
            Zwischenziele fest und arbeiten auf diese hin. Die Umsetzung erfolgt in agilen zweiwöchigen Sprints, wobei du
            laufend den Fortschritt siehst.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Ein ausgereiftes Produkt mit der Möglichkeit, den Erfolg deiner Ziele zu messen.',
                'Agiles und leanes Vorgehen zum Ausbau deines Produkts.',
                'Definition deiner wichtigsten Customer Journeys.',
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
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      teasers: [Teasers.subsidia, Teasers['supply-chain']],
      contact: Employees.thilo,
    },
  };
};

export default ScaleUp;
