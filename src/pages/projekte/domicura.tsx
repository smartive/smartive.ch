import { Copy, Grid, LinkList, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { PackageList } from '../../compositions/package-list';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import Packages, { Package } from '../../data/packages';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const STATIC_IMAGES = {
  people: '/images/projekte/domicura/people.jpeg',
  ipad: '/images/projekte/domicura/mockup-ipad.png',
  imac: '/images/projekte/domicura/mockup-imac.png',
  laptop: '/images/projekte/domicura/mockup-laptop.png',
  mobile: '/images/projekte/domicura/mockup-mobile.png',
  prototyping: '/images/projekte/domicura/project-prototyping.png',
  workshop: '/images/projekte/domicura/project-workshop.png',
};

type Props = {
  images: typeof STATIC_IMAGES;
  contact: Employee;
  teasers: Teaser[];
  packages: Package[];
};

const Spilo: NextPage<Props> = ({ contact, teasers, images, packages }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Die Pflege deiner Lieblingsmenschen."
        description="Die erste Plattform für Angehörigenpflege zu werden – diese Vision verfolg Domicura."
      >
        <Copy>
          Der demografische Wandel wird begleitet von einer ungebremsten Nachfrage nach Pflegebetreuung für Senioren*innen.
          Die Auswahl an Pflegedienstleistungen ist zwar riesig, aber gleichzeitig total unübersichtlich. Das Schlimmste: die
          potenziellen Interessierten wissen meistens gar nichts davon. Genau hier setzt die gemeinsam erstellte Plattform
          an.
        </Copy>
        <LinkList links={[{ label: 'Zu Franz & Vroni', href: 'https://www.franzundvroni.ch/' }]} />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.ipad}
            alt="Ipad Mockup von Franz und Vroni"
            priority
            objectFit="cover"
            width={1505}
            height={847}
          />
        </Section>

        <Section title="Die Kurzfassung">
          <Copy>
            Die erste Plattform für Angehörigenpflege zu werden &ndash; diese Vision haben wir gemeinsam in einem{' '}
            <Link href="/angebot/feasibility-workshop">Feasibility-Workshop</Link> erarbeitet. Sie war der Richtpfeiler für
            unsere Zusammenarbeit. Mit dem Startschuss übersetzten wir die Vision in ein Konzept inklusive konkreter
            Produktidee und Wireframes.
          </Copy>
          <Copy>
            Danach starteten wir unser <Link href="/angebot/speedboat">Speedboat</Link>. Der Fahrtwind beflügelte: Innerhalb
            von zwei Sprints über 5 Wochen landete das MVP mit Headless-CMS, eigenem Page Builder, Search Engine und Custom
            Angebots-Check im Heimathafen.
          </Copy>
        </Section>

        <Section title="Die Herausforderungen">
          <Grid cols={2}>
            <TextBlock title="Nicht alles auf einmal">
              Zu viele Ideen. Womit starten? Die Auswahl des richtigen Features einer neuen Plattform in einer perfekten
              Welt: einfach umzusetzen mit maximalen Mehrwert für die Anwender*innen.
            </TextBlock>
            <TextBlock title="Fünf Wochen">
              Nicht viel Zeit zur Umsetzung eines MVPs. Kein Ausprobieren, kein Rumtrödeln. Am besten Nägel mit Köpfen
              machen. Oder noch besser: gleich die Hilti zur Hand nehmen!
            </TextBlock>
            <TextBlock title="Zugänglichkeit">
              Eine Plattform für Senior*innen? Gemäss unserer Accessibility-Spezialistin Anna sind mindestens 15% aller
              Anwender*innen in irgendeiner Form beeinträchtigt. In dieser Zielgruppe dürfte diese Zahl noch einiges höher
              sein.
            </TextBlock>
            <TextBlock title="Gewichtete Bäume">
              Damit du die passenden Angebote findest, kannst du ein paar einfache Fragen beantworten. Damit das
              funktioniert, kommt ein gewichteter Entscheidungsbaum zum Einsatz.
            </TextBlock>
          </Grid>
          <Grid cols={2}>
            <Image
              src={images.workshop}
              alt="Postits vom Workshop mit Notizen darauf"
              priority
              objectFit="cover"
              width={1505}
              height={847}
            />
            <Image
              src={images.prototyping}
              alt="Screenshot vom Figma Prototype"
              priority
              objectFit="cover"
              width={1505}
              height={847}
            />
          </Grid>
        </Section>
        <Section title="Lösungsbausteine">
          <Grid cols={3}>
            <TextBlock title="Kundenspezifische Workshops">
              Gemeinsam mit dem Team von Domicura haben wir uns mit der Vision der Plattform befasst und Prioritäten gesetzt.
              Mit Werkzeugen wie Impact/Effort-Map, Userday-Mapping und Crazy-8 konnten wir die ersten Schritte planen.
            </TextBlock>
            <TextBlock title="Prototype">
              Die Top drei Features aus dem <Link href="/angebot/feasibility-workshop">Feasibility-Workshop</Link> haben wir
              in einem klickbaren Wireframe-Prototypen festgehalten. Das Resultat: ein gemeinsames Verständnis über die
              ersten Features und eine viel bessere Diskussionsgrundlage als eine Powerpoint-Folie mit einem Diagramm.
            </TextBlock>
            <TextBlock title="Prototype, again!">
              Wireframes reichen vielleicht, wenn du ein halbes Jahr Zeit zur Umsetzung hast und alles dreimal neu bauen
              kannst. Um einen MVP in fünf Wochen zu bauen, brauchst du aber exaktere Pläne. Den Hausbau planst du ja auch
              nicht mit den Kindergarten-Zeichnungen deines Patenkindes.
            </TextBlock>
            <TextBlock title="Das Rad nicht neu erfinden">
              Das Internet ist voll von SaaS-Produkten, die dir das Leben erleichtern. Deshalb bauen wir auch nicht selber
              neu, was es schon gibt. In diesem Projekt nutzen wir die Google Cloud Platform und ein Headless-CMS.
            </TextBlock>
            <TextBlock title="Babysteps, Talk, repeat">
              Um die Zeit effizient einzusetzen, ist es viel einfacher, kleine Schritte zu machen und diese täglich
              miteinander abzugleichen. So kannst du Missverständnisse und Leerläufe auf ein Minimum beschränken.
            </TextBlock>
            <TextBlock title="Measure, Analyze, Learn!">
              In der digitalen Produktentwicklung kannst du mit echten Benutzer*innen testen. Jeder Website-Besuch kann
              ausgewertet werden. Du musst nicht erraten, was Kund*innen von dir wollen, du musst nur hinhören und daraus
              lernen. Du weisst nicht wie? Dann lass uns hinhören und wir übersetzen für dich.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Image src={images.laptop} alt="Screenshot Angebotsfinder" priority objectFit="cover" width={1505} height={847} />
          <Grid cols={2}>
            <Image src={images.imac} alt="Screenshot Übersicht" priority objectFit="cover" width={1505} height={1505} />
            <Image src={images.mobile} alt="Screenshot Artikel" priority objectFit="cover" width={1505} height={1505} />
          </Grid>
          <Grid cols={2}>
            <TextBlock title="Die Plattfom">
              Die gemeinsam geschaffene Plattform macht es einfach, jegliche Angebote zur Entlastung von Pflegebedürftigen
              oder pflegenden Angehörigen zu finden: Bist du auf der Suche nach einem Fahrdienst, Mahlzeitenservice oder
              medizinischer Pflege für deine Oma? Absolut kein Problem. Denn jetzt findest du schnell und per Knopfdruck alle
              geeigneten Angebote in deiner Nähe.
            </TextBlock>
            <TextBlock title="Die Zukunft">
              Die Angebotssuche ist erst der Anfang. Das Thema Angehörigenpflege wird in den nächsten Jahren immer wichtiger
              und für die meisten von uns früher oder später einmal direkt relevant. Domicura hatte eine ganze Menge passende
              Ideen, wie sie uns alle dabei unterstützen können – und wir haben ebensoviele Ideen, wie wir Domicura dabei
              unterstützen können.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Contact contact={contact}>
            Du willst auch von uns betreut werden?
            <br />
            {contact.firstname} nimmt sich gerne Zeit.
          </Contact>
        </Section>

        <Section title="Das haben wir mit Domicura gemacht:">
          <PackageList packages={packages} />
        </Section>
        <Section title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </Section>

        <Section title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const teasers = [Teasers.ofpg, Teasers.filialfinder, Teasers.spilo];
  const packages = [Packages['feasibility'], Packages['speedboat']];
  const contact = await getEmployeeByName('Jan Bühlmann');

  return {
    props: {
      images,
      teasers,
      contact,
      packages,
    },
  };
};

export default Spilo;
