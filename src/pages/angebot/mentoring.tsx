import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../compositions/contact';
import { CardColors, ContentCard } from '../../compositions/content-card';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader, PageHeaderVariants } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Copy } from '../../elements/copy';
import { Heading2 } from '../../elements/heading-2';
import { Clock } from '../../elements/icons';
import { Label } from '../../elements/label';
import { GridSlider } from '../../layouts/grid-slider';

type Props = {
  contact: Employee;
};

const Mentoring: NextPage<Props> = ({ contact }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Mentoring"
        description="Profitiere von einem erfahrenen Team und erhalte fortlaufend objektive Einschätzungen und Vorschläge für dein Projekt. Tausche dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt und deine Strategie aus. Deine Ideen werden auf konstruktiv gechallenged. So kannst du dein Vorgehen festigen und gewinnst Sicherheit, dass du auf dem richtigen Weg bist."
        variant={PageHeaderVariants.Card}
      >
        <Copy>
          Profitiere von einem erfahrenen Team und erhalte fortlaufend objektive Einschätzungen und Vorschläge für dein
          Projekt. Tausche dich in regelmässigen Jour fixes mit unseren Digital Strategists über dein Produkt und deine
          Strategie aus. Deine Ideen werden auf konstruktiv gechallenged. So kannst du dein Vorgehen festigen und gewinnst
          Sicherheit, dass du auf dem richtigen Weg bist.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was beinhaltet das Mentoring?</Heading2>
          <Copy>
            Du möchtest ein digitales Produkt schaffen oder ein bestehendes weiterentwickeln, bist aber nicht immer ganz
            sicher ob du auf dem richtigen Weg bist? Dir fehlt die Erfahrung im Aufbau oder der Entwicklung eines Produkts?
            In einem regelmässigen Jour fixe tauscht du dich mit unseren Digital Strategists über das Projekt aus. Den
            thematischen Fokus legen wir gemeinsam fest, das von der Strategie, über User Experience, agiles Projekt
            Management, Entwicklung bis hin zu Cloud Deployments alles sein. In diesen Gesprächen erhältst du objektives
            Feedback zu deinem Vorgehen und kannst Pitfalls frühzeitig erkennen.
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList
              title="Das hast du davon"
              items={[
                'Du profitierst von der langjährigen Expertise unserer Digital Strategists.',
                'Wir erlauben dir ein persönliches Rubber Ducking, wir antworten aber auch.',
                'Du gewinnst Sicherheit in deinem Vorgehen.',
                'Wir haben ein Team aus der User Experience, DevOps und der Software Entwicklung, welches jederzeit hinzugezogen werden kann.',
              ]}
            />
            <UnorderedList title="Das brauchen wir von dir" items={['Einen regelmässigen Termin für einen Jour fixe.']} />
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
              background={CardColors.Cornflower}
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
              background={CardColors.Apricot}
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
              background={CardColors.Mint}
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
              background={CardColors.Cornflower}
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
      contact: Employees.peter,
    },
  };
};

export default Mentoring;
