import { Copy, Explainer, Grid, LinkList, Screenshot, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { NextImageCard } from '../../components/image-card';
import { getRandomTeasers } from '../../utils/teasers';
import { Employee, getEmployeeByName } from '../../data/employees';
import { Contact } from '../../components/contact';
import { Testimonial } from '../../components/testimonial';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';

const STATIC_IMAGES = {
  flyer: '/images/projekte/frontify/210908_FRO2101_3766.jpg',
  meeting: '/images/projekte/frontify/210902_FRO2101_4079.jpg',
  styleguide: '/images/projekte/frontify/210902_FRO2101_3625.jpg',
  workshop: '/images/projekte/frontify/workshop.jpeg',
  workshop2: '/images/projekte/frontify/workshop-2.jpeg',
  team: '/images/projekte/frontify/team.jpg',
  blockCharts: '/images/projekte/frontify/block_charts.png',
  blockMaps: '/images/projekte/frontify/block_maps.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  teasers: Teaser[];
  contact: Employee;
  quote: Quote;
};

const Frontify: NextPage<Props> = ({ images, teasers, contact, quote }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Ein Zuhause für Brands"
        description="Frontify. Das vielleicht coolste Scale-Up der Schweiz. Und smartive. Die vielleicht coolste digitale Agentur der
          Schweiz. 😌 Aber wofür brauchen die noch mehr cool?"
      >
        <Copy>
          Frontify. Das vielleicht coolste Scale-Up der Schweiz. Und smartive. Die vielleicht coolste digitale Agentur der
          Schweiz. 😌 Aber wofür brauchen die noch mehr cool?
        </Copy>
        <Copy>
          Ganz einfach: wir begleiten die Brand Management Plattform auf ihrem Weg in die React-Welt. Dabei unterstützen wir
          Frontify als integriertes Development-Team bei der Entwicklung des eigenen Design-Systems und ein paar anderen
          richtig coolen Features.
        </Copy>
        <LinkList
          links={[
            {
              href: 'https://www.frontify.com/',
              label: 'Ab zu Frontify',
            },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.flyer}
            alt="Flyer für das Digital Asset Management von Frontify"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
          <span className="text-xs text-black">Fotos: Ladina Bischof</span>

          <Grid cols={2}>
            <Image
              src={images.styleguide}
              alt="Style Guide von Frontify auf einem Bildschirm"
              priority
              objectFit="scale-down"
              width={1920}
              height={1440}
            />
            <Image
              src={images.meeting}
              alt="Meeting von Frontify Mitarbeitenden"
              priority
              objectFit="scale-down"
              width={1920}
              height={1440}
            />
          </Grid>
        </Section>
        <Section title="Lovestory">
          <Grid cols={2}>
            <div>
              <TextBlock title="Liebe auf den ersten Blick">
                Unternehmen mit eigenen digitalen Produkten fehlt oft die Zeit, mit der schnell wechselnden Technologiewelt
                Schritt zu halten. Das Produkt will gebaut, betrieben und gewartet werden.{' '}
              </TextBlock>
              <TextBlock title="">
                Wir haben kein Produkt im Rücken, sondern <Link href="https://smartive.ch/projekte">diverse Projekte</Link>.
                Und ganz viel Know-how über die neusten Technologien und Trends. Wir machen Hackdays und Code-Retreats,
                erzählen auf Konferenzen, organisieren Labs, halten Workshops und: alle{' '}
                <Explainer title={'Nicht die Schokolinse von Nestlé'}>Smarties</Explainer> haben ein umfangreiches
                Weiterbildungsbudget. Damit wir zum Beispiel genau wissen, was der Unterschied zwischen{' '}
                <Link
                  newTab
                  href="https://blog.smartive.ch/how-should-we-react-to-stencil-and-svelte-ca76d631cf95?source=rss----2be72cec0825---4"
                >
                  Stencil und Svelte
                </Link>{' '}
                ist und was es mit dem nächsten Hype auf sich hat.
              </TextBlock>
            </div>
            <div>
              <TextBlock title="Das erste Date">
                Angefangen hat unsere Zusammenarbeit mit <Link href="/angebot/solution-review">Reviews</Link> und Workshops
                zu Elasticseach und der Architektur des Frontify-Styleguides.
              </TextBlock>
              <TextBlock title="">
                Als dann der Umbau von Terrific zu <Link href="/was-ist/react">React</Link> auf dem Plan stand, haben wir
                selber <s>zum Hammer gegriffen</s> in die Tasten gehauen und seit da die Finger nicht mehr von der Tastatur
                genommen. In der Zwischenzeit kleben unsere Fingerabrücke am Styleguide, den Custom-Blocks, der App-Bridge,
                am Developer-SDK und am{' '}
                <Explainer title="Nicht am Essen. So heisst nunmal das Design-System bei Frontify. 🤷‍♂️">Fondue 🫕</Explainer>.
                Als integriertes Development-Team unterstützen wir mit unserem Fachwissen, schreiben Code, bauen Features,
                finden Fehler, migrieren Daten und bringen neue Ideen.
              </TextBlock>
            </div>
            <div>
              <Image
                src={images.team}
                alt="Frontify und smartive Mitarbeiter*innen"
                caption="Frontify und smartive Mitarbeiter*innen"
                priority
                objectFit="scale-down"
                width={1920}
                height={1440}
              />
            </div>
            <div>
              <Image
                src={images.workshop2}
                alt="Frontify und smartive Mitarbeiter*innen"
                caption="Das Team bei einem Innovation-Day"
                priority
                objectFit="scale-down"
                width={1920}
                height={1440}
              />
            </div>
          </Grid>
        </Section>
        <Section title="Alles neu">
          <Grid cols={2}>
            <TextBlock title="Neue Technologie">
              Dein Styleguide, den du bei Frontify verwalten kannst, besteht aus verschiedenen Blocks. Diese Blocks sind
              ursprünglich mit TerrificJS programmiert worden. Die werden jetzt, einer nach dem anderen, in{' '}
              <Link href="/was-ist/react">React</Link> neugeschrieben. Die zugehörige Daten-Migration hat es in sich. Wir
              starten mit einem Block, der eher wenig benutzt wird. Frontify ist beliebt: auch von dem Block gibts bereits
              knapp 200 neue Datensätze pro Monat.
            </TextBlock>
            <TextBlock title="Neue Blocks">
              Bei einem Innovation-Day haben wir Ideen für ein paar neue Blocks ausprobiert. Da dürfen wir noch nicht zu viel
              verraten, aber eine der Ideen scheint es in die offizielle Produkt-Roadmap geschafft zu haben. Die vorhandenen
              Blocks reichen nicht? Genau darum haben wir die Plattform soweit aufgebohrt, dass du jetzt{' '}
              <Link newTab href="https://www.frontify.com/en/blog/the-new-era-of-brand-guidelines/">
                deine eigenen Blocks
              </Link>{' '}
              beisteuern kannst. Nun sind der Styleguide-Kreativität keine Grenzen mehr gesetzt.
            </TextBlock>
            <Screenshot image={{ url: images.blockMaps, originalHeight: 1966, originalWidth: 3584 }} />
            <Screenshot image={{ url: images.blockCharts, originalHeight: 1966, originalWidth: 3584 }} />
          </Grid>
          <Testimonial background="cornflower" quote={quote} />
        </Section>
        <Section title="Alles besser">
          <TextBlock title="Bessere Accessibility">
            Über 15% aller Anwender*innen sind in irgendeiner Form beeinträchtigt. Tendenz steigend. Accessibility wird also
            immer wichtiger, ist aber meist ziemlich umständlich umzusetzen und kostet viel Zeit. Mit React-Aria kriegen wir
            mit wenig Aufwand eine gute Zugänglichkeit hin. Sogar bei den{' '}
            <Link newTab href="https://smartive.ch/blog/accessible-dropdown-using-react-aria">
              anspruchsvollen Dropdowns
            </Link>
            .
          </TextBlock>
          <Grid cols={2}>
            <div>
              <TextBlock title="Bessere User-Interfaces">
                Atomic-Design? Styleguide? Komponenten-Library? Kalter Kaffee! Wir trinken lieber Espresso und setzen auf
                Design-Systems, wie wir das auch bei Frontify gemacht haben – die altehrwürdigen Komponenten-Libraries werden
                ja doch immer falsch eingesetzt. Das Ganze basiert auf Storybook und nimmt den verschiedenen Teams extrem
                viel Arbeit ab. Sorgfältige Planung und Ausbaufähigkeit sind hier der Schlüssel zum Erfolg.
              </TextBlock>
              <TextBlock title="">
                Unsere Design-System Geheimnisse behalten wir noch ein bisschen für uns, einen Einsteiger-Tipp gibts aber:
                Nutz einfach mal die Defaults von{' '}
                <Link newTab href="https://smartive-website-p9p1l1gpb-smartive.vercel.app/blog/tailwind-gives-superpowers">
                  Tailwind
                </Link>{' '}
                und hör auf, Custom Values für einzelne Elemente zu definieren. Dann hast du schon mal sehr viel System in
                deinem Design. Und genau darum gehts bei einem Design-System. 😉
              </TextBlock>
            </div>
            <div>
              <TextBlock title="Bessere Developer-Experience">
                In einer komplexen Systemwelt mit grossen Teams kann das Arbeiten in der Entwicklungsumgebung schnell zum
                Triathlon werden: Die Dev-Backendsysteme sind grad nicht erreichbar, das Starten aller Umsysteme auf dem
                eigenen Laptop mehr Hindernis als Lauf. Insbesondere beim Onboarding von neuen Mitarbeiter*innen wären alle
                froh um Hundertmeter statt Ausdauerlauf.
              </TextBlock>
              <TextBlock title="">
                Deshalb haben wir mit dem Developer-SDK mit Frontify ein CLI-Tool entwickelt, mit dem einzelne Content-Blocks
                isoliert gestartet werden können. Natürlich einfach erweiterbar, damit wir oft benötigte Tasks in Zukunft
                einfach mit rein packen können.
              </TextBlock>
            </div>
          </Grid>
          <Image
            src={images.workshop}
            alt="Frontify und smartive Mitarbeiter*innen"
            priority
            objectFit="scale-down"
            width={1920}
            height={1440}
          />
        </Section>

        <Section>
          <Contact contact={contact}>
            Marco weiss mehr über Frontify, als er erzählen darf. Vielleicht macht er bei dir ja eine Ausnahme.
          </Contact>
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
  const teasers = getRandomTeasers(3, Teasers.frontify.title);
  const contact = await getEmployeeByName('Marco Bohler');

  return {
    props: {
      images,
      teasers,
      quote: Quotes['marc-frontify'],
      contact,
    },
  };
};

export default Frontify;
