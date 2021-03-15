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
import { Heading2 } from '../../elements/heading-2';
import { Clock } from '../../elements/icons';
import { Label } from '../../elements/label';
import { Copy } from '../../elements/copy';
import { GridSlider } from '../../layouts/grid-slider';

type Props = {
  contact: Employee;
};

const ScaleUp: NextPage<Props> = ({ contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Scale Up"
        description="Baue deinen MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts."
        variant={PageHeaderVariants.Card}
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
          <GridSlider>
            <ImageCard
              label="KIG, Gesundheitsamt Sankt Gallen"
              title="Web statt App – plane deine Freizeit mit Spilo."
              link={{ label: 'Projekt anschauen', href: '/projekte' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="Migros"
              title="Digitalisierung der Lieferkette"
              link={{ label: 'Projekt anschauen', href: '/projekte' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
            <ImageCard
              label="Cosmopolitan"
              title="Massgeschneidertes CRM"
              link={{ label: 'Projekt anschauen', href: '/projekte' }}
              image={{ src: '/images/RGB_02_snack_001.jpg', alt: 'Frau sitzt mit Handy am Boden' }}
            />
          </GridSlider>
          <Heading2>Und damit könnte es nach deinem Ideation Sprint weiter gehen:</Heading2>
          <GridSlider>
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  2–5 Tage
                </>
              }
              title="Ideation Sprint"
              content="Gewinn ein besseres Verständnis für die Bedürfnisse deiner Nutzer und zieh daraus praktikable Ideen. Erhalte einen ersten visuellen Prototypen und hol Feedback deiner Kunden ein."
              link={{ label: 'Wie geht das?', href: '#' }}
            />
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />4 Wochen
                </>
              }
              title="Speedboat"
              content="Lancier in kurzer Zeit dein MVP (Minimum Viable Product) und teste anhand messbarer Ziele, wie dein Produkt ankommt."
              link={{ label: 'Zeig mir mehr!', href: '#' }}
            />
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  2–3 Monate
                </>
              }
              title="Scale Up"
              content="Bau dein MVP entlang der messbaren Ziele aus und erweitere den Umfang deines Produkts."
              link={{ label: 'Wie genau?', href: '#' }}
            />
            <ContentCard
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  2–5 Tage
                </>
              }
              title="Solution Review"
              content="Erhalte eine objektive Einschätzung der Chancen und Risiken deines digitalen Produkts sowie einen klaren Massnahmenplan, was du verbessern kannst."
              link={{ label: 'Weitere Informationen', href: '#' }}
            />
          </GridSlider>
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      contact: Employees.thilo,
    },
  };
};

export default ScaleUp;
