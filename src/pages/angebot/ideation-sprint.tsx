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

const listItems = [
  'Du‌ ‌profitierst‌ ‌von‌ ‌einem‌ ‌agilen,‌ ‌hochqualifizierten‌ ‌Team.‌',
  'In‌ ‌wenigen‌ ‌Tagen‌ ‌wird‌ ‌eine‌ ‌konkrete‌ ‌und‌ ‌lösungsorientierte‌ ‌Idee‌ ‌für‌ ‌deine‌ ‌Herausforderung‌ ‌entwickelt.‌',
  'Du‌ ‌erhältst‌ ‌Rückmeldungen‌ ‌deiner‌ ‌Nutzer‌ ‌zur‌ ‌Idee‌ ‌und‌ ‌weisst,‌ ‌ob‌ ‌sie‌ ‌standhält.‌',
  'Bei‌ ‌komplexeren‌ ‌Ideen‌ ‌hast‌ ‌du‌ ‌einen‌ ‌visuellen‌ ‌und‌ ‌klickbaren‌ ‌Prototypen,‌ ‌der‌ ‌bereits‌ ‌mit‌ ‌deiner‌ ‌Zielgruppe‌ ‌getestet‌ ‌wurde.‌',
  'Du‌ ‌hast‌ ‌2‌–3‌ ‌Tage‌ ‌Zeit,‌ ‌um‌ ‌mit‌ ‌uns‌ ‌an‌ ‌den‌ ‌Workshops‌ ‌zusammen‌ ‌zu‌ ‌arbeiten.‌ ',
  'Du‌ ‌kennst‌ ‌dich‌ ‌in‌ ‌deinem‌ "Problem‌ ‌Space"‌ ‌aus‌ ‌und‌ ‌kannst‌ ‌diesen‌ ‌verständlich‌ ‌erklären.‌ ',
  'Anzahl Personen?',
  'Bulletlist Content',
];

type Props = {
  contact: Employee;
};

const IdeationSprint: NextPage<Props> = ({ contact }) => {
  return (
    <div>
      <PageHeader markdownTitle="Ideation Sprint" variant={PageHeaderVariants.Card}>
        <Label className="inline-flex flex-row items-center mb-8">
          <Clock className="h-6 w-6 mr-2 inline" />
          2–5 Tage
        </Label>
        <Copy>
          ‌Gewinne‌ ‌ein‌ ‌besseres‌ ‌Verständnis‌ ‌für‌ ‌die‌ ‌Bedürfnisse‌ ‌ deiner‌ ‌Nutzer‌ ‌und‌ ‌generiere‌ ‌daraus‌
          ‌funktionsfähige‌ ‌Ideen.‌ ‌Erhalte‌ ‌einen‌ ‌ersten‌ ‌visuellen‌ ‌Prototypen‌ ‌und‌ ‌hole‌ ‌Feedback‌ ‌deiner‌
          ‌Kunden‌ ‌dazu‌ ‌ab.‌
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Heading2>Was ist ein Ideation Sprint?</Heading2>
          <Copy>
            Du‌ ‌hast‌ ‌eine‌ ‌Marktlücke‌ ‌oder‌ ‌die‌ ‌Chance‌ ‌für‌ ‌einen‌ ‌Innovationssprung‌ ‌deines‌ ‌digitalen‌
            ‌Produkts‌ erkannt.‌ ‌Du‌ ‌bist‌ ‌dir‌ ‌aber‌ ‌nicht‌ ‌sicher,‌ ‌wie‌ ‌du‌ ‌diese‌ ‌Herausforderung‌ ‌angehen‌
            ‌sollst.‌ ‌In‌ ‌einem‌ ‌Ideation‌ ‌Workshop‌ ‌zerlegen‌ ‌wir‌ ‌gemeinsam‌ ‌mit‌ ‌Fachexperten‌ ‌das‌ ‌Problem‌
            ‌in‌ ‌seine‌ ‌Einzelteile‌ ‌und‌ ‌entwickeln‌ ‌daraus‌ ‌eine‌ ‌Lösung.‌ ‌Dabei‌ ‌setzen‌ ‌wir‌ ‌auf‌ ‌modernste‌
            ‌Methoden‌ ‌wie‌ ‌Design‌ ‌Sprints‌ ‌oder‌ ‌Lightning‌ ‌Decision‌ ‌Jams.‌ ‌Je‌ ‌nach‌ ‌Komplexität‌ ‌der‌
            ‌Herausforderung‌ ‌entwickeln‌ ‌wir‌ ‌einen‌ ‌visuellen,‌ ‌klickbaren‌ ‌Prototypen‌ ‌und‌ ‌führen‌ ‌bereits‌
            ‌ein‌ ‌erstes‌ ‌Testing‌ ‌mit‌ ‌deinen‌ ‌po­ten­zi­ellen‌ ‌Nutzern‌ ‌durch.‌
          </Copy>
          <div className="grid grid-flow-row grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 bg-white-100 rounded p-8 mt-16">
            <UnorderedList title="Das hast du davon" items={listItems.slice(0, 4)} />
            <UnorderedList title="Das brauchen wir von dir" items={listItems.slice(4)} />
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
      contact: Employees.robert,
    },
  };
};

export default IdeationSprint;
