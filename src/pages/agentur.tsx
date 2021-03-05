import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { ShuffleCard } from '../components/shuffle-card';
import { MetaInfos, PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { Props as TextBlockProps, TextBlock } from '../compositions/text-block';
import { Employee } from '../data/employees';
import Employees from '../data/employees.json';
import { Lead } from '../elements/lead';
import { generateMetaImage } from '../utils/meta-image-generator';

const textBlocks: TextBlockProps[] = [
  {
    title: 'Organisiert auf Augenhöhe',
    content:
      'Wir pflegen eine Kommunikation auf Augenhöhe. Eine offene Feedback-Kultur schafft Raum für Innovation und Kreativität. ',
  },
  {
    title: 'Advice Process',
    content:
      'Bei smartive können alle Entscheide treffen – zu jedem Thema. Vorausgesetzt, sie hören sich zuerst das Feedback der betroffenen Personen an und übernehmen die Verantwortung für die Entscheidung. Dafür nutzen wir den Advice Process.',
  },
  {
    title: 'Weiterbildung',
    content:
      'Digitale Technologien sind unsere Leidenschaft. Darum stehen allen Mitarbeitenden jährlich 12.5 Tage oder 12’500 Fr. für Fortbildung zur freien Verfügung. Einmal im Monat lassen wir uns von einer Kollegin oder einem Kollegen etwas vorstellen – sei es ein neues Frontend-Framework oder Meditationstechniken.',
  },
  {
    title: 'Vaterschaftsurlaub',
    content:
      'Zwei Wochen Vaterschaftsurlaub sind schön. Besser finden wir allerdings vier Wochen, wie es bei uns gehandhabt wird. ',
  },
  {
    title: 'Lohn & Bonus',
    content:
      'Wir verhandeln keine Löhne, sondern setzen auf ein transparentes, faires Lohnsystem: Lohn = Basislohn + Ausbildung + Erfahrung + Firmentreue. Dazu geht mindestens ein Drittel des Gewinns zu gleichen Teilen an alle Mitarbeitenden.',
  },
  {
    title: 'Code Retreat',
    content:
      'Einmal im Jahr ziehen wir uns ein paar Tage zurück, um uns mit Themen auseinanderzusetzen, die uns am Herzen liegen – von AI bis Bierbrauen, von Supernova bis Design Sprint, von technisch über alltäglich bis wissenschaftlich. Der Code Retreat bietet Raum für Diskussionen und zum Zusammensein ausserhalb des Büros.',
  },
];

type Props = {
  employees: Employee[];
  metaInfos: MetaInfos;
};

const Agentur: NextPage<Props> = ({ employees, metaInfos }) => {
  return (
    <div>
      <PageHeader title={metaInfos.title} decoration={metaInfos.decoration} metaInfos={metaInfos}>
        <Lead>
          Chefgehabe ist uns so fremd wie komplexe Hierarchien und Gärtchendenken. Herausforderungen werden gemeinsam
          angegangen, Probleme offen angesprochen und gelöst. Wir wollen einen Ort schaffen, an dem wir nicht nur arbeiten,
          sondern auch Freundschaft und Freiheit leben. Mit Platz für verschiedene Persönlichkeiten, Interessen und
          Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres Potenzials.
        </Lead>
      </PageHeader>

      <main>
        <PageSection>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-16">
            <Image
              className="rounded"
              src="/images/RGB_02_snack_001.jpg"
              alt="Lustigi Lüüt amne Tisch"
              priority
              objectFit="cover"
              width={720}
              height={500}
            />
            <Image
              className="rounded"
              src="/images/RGB_02_snack_001.jpg"
              alt="Lustigi Lüüt amne Tisch"
              priority
              objectFit="cover"
              width={720}
              height={500}
            />
            <div className="col-start-2 row-span-2 relative">
              <Image
                className="rounded"
                src="/images/YB_06742.jpg"
                alt="Lustigi Lüüt amne Tisch"
                priority
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-16 my-16">
            {textBlocks.map(({ title, content }) => (
              <TextBlock key={title} title={title} content={content} />
            ))}
          </div>
          <ShuffleCard employees={employees.filter((employee) => employee.portrait)} />
          <div className="grid grid-cols-2 gap-16 my-16">
            <Image
              className="rounded"
              src="/images/RGB_02_snack_001.jpg"
              alt="Lustigi Lüüt amne Tisch"
              priority
              objectFit="cover"
              width={720}
              height={380}
            />
            <div className="row-span-3">
              <Image
                className="rounded"
                src="/images/YB_06742.jpg"
                alt="Lustigi Lüüt amne Tisch"
                priority
                objectFit="cover"
                width={720}
                height={1275}
              />
            </div>
            <Image
              className="rounded"
              src="/images/RGB_02_snack_001.jpg"
              alt="Lustigi Lüüt amne Tisch"
              priority
              objectFit="cover"
              width={720}
              height={380}
            />
            <Image
              className="rounded"
              src="/images/RGB_02_snack_001.jpg"
              alt="Lustigi Lüüt amne Tisch"
              priority
              objectFit="cover"
              width={720}
              height={380}
            />
            <div className="col-span-2">
              <Image
                className="rounded"
                src="/images/YB_06742.jpg"
                alt="Lustigi Lüüt amne Tisch"
                priority
                objectFit="cover"
                width={1504}
                height={800}
              />
            </div>
          </div>
        </PageSection>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = { title: 'Mit Freunden und viel Freiheit zu digitalen Lösungen', decoration: 'Freunden' };

  return {
    props: {
      employees: Object.values(Employees),
      metaInfos: {
        ...pageTitle,
        image: await generateMetaImage(pageTitle.title, pageTitle.decoration),
      },
    },
  };
};

export default Agentur;
