import {
  BlobVariations,
  Copy,
  Grid,
  Heading2,
  Heading3,
  Keyfigure,
  TextBlock,
  TextLink,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image } from '../../../../components/image';
import { Testimonial } from '../../../../components/testimonial';
import { PageHeader } from '../../../../compositions/page-header';
import { Quote } from '../../../../data/quotes';
import { LandingPage } from '../../../../layouts/landing-page';
import { Section } from '../../../../layouts/section';

const STATIC_IMAGES = {
  kitchen: '/images/projekte/migipedia/RGB_04_kitchen_012.jpg',
  diskutieren: '/images/projekte/migipedia/RGB_01_diskutieren_007.jpg',
  phone: '/images/projekte/migipedia/smartive-phone.png',
  couch: '/images/projekte/migipedia/RGB_05_couch_010.jpg',
  snack: '/images/projekte/migipedia/RGB_02_snack_001.jpg',
  stairs: '/images/projekte/migipedia/RGB_06_stairs_004.jpg',
} as const;

const QUOTE = {
  excerpt: 'Die _Community_ ist so aktiv wie nie zuvor',
  text: 'Design, Personalisierung und Performance gehen bei Migipedia Hand in Hand, was zu einer Experience wie bei einer App führt und die Community mit einer Lebendigkeit wie nie zuvor goutiert.',
  credit: 'Philipp Bühler, Senior Product Owner Migros-Community',
  portrait: '/images/portraits/philipp-buehler.jpg',
};

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
};

const Bosa2021: NextPage<Props> = ({ quote, images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Migipedia: Migros-_Community_ im Mittelpunkt"
        description="Migipedia: Migros-Community im Mittelpunkt"
        tags={[
          { short: 'BOSA21', full: 'Eingabe Best of Swiss Apps 2021' },
          { short: 'mobile-web', full: 'Kategorie Mobile Web' },
        ]}
      >
        <Copy>
          Seit 2010 stehen bei <TextLink href="https://migipedia.migros.ch/de">Migipedia</TextLink> – der Community der
          Migros – Kund*innen im Mittelpunkt. Die Ansprüche der Userinnen und User an die Plattform haben sich in dieser Zeit
          immer wieder verändert. Mit dem Migipedia-Relaunch von 2020 unter dem Motto «Wenn Migipedia eine App wäre» wird
          diesen Veränderungen einmal mehr Rechnung getragen. Design inklusive Accessibility, Personalisierung und
          Performance schaffen eine App-ähnliche User-Experience und sorgen dafür, dass die Migros-Community heute so
          lebendig ist wie nie zuvor.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.snack}
            alt="Eine Frau sitzt mit dem Smartphone in der Hand auf einer Treppe und isst Popcorn."
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Heading2>Eine App im Web</Heading2>
          <Copy>
            Beinahe 80% der Nutzerinnen und Nutzer besuchen Migipedia mit einem Smartphone. Eine aktuelle Studie geht davon
            aus, dass sich Userinnen und User während der Nutzung eines mobilen Gerätes zu knapp 90% in Apps befinden,
            wohingegen nur etwa 10% der Zeit für das Browsen im Internet verwendet wird. Daran orientiert sich die
            Überarbeitung von Migipedia.
          </Copy>
          <Copy>
            Usability und Accessibility sind nicht die netten Nachbarn, die man leider vergessen hat einzuladen, sondern die
            Hauptgäste. Migipedia ist auf dem Desktop, dem Tablet und dem Smartphone zu Hause – und bietet neben Breakpoints
            für jede Bildschirmgrösse auch die perfekte Tanzfläche für den Finger. Dafür sorgen grosse Touchflächen und
            UX-Konzepte, die man von Apps kennt:
          </Copy>
          <Copy as="div">
            <UnorderedList
              items={[
                'Slider sparen Platz in der Horizontale und lassen sich seitlich wischen, um mehr ähnliche Inhalte zu entdecken.',
                'Durch Client-Side Transitions mit Prefetching sind Seitenwechsel keine Angelegenheit mit ungewisser Wartezeit mehr, sondern erfolgen fast unmittelbar.',
                'Einen schnellen Wechsel zu allen Bereichen gewährleistet auch die simple Navigationsstruktur.',
              ]}
            />
          </Copy>
        </Section>
        <Section>
          <Keyfigure
            background="mint"
            image={<Image src={images.phone} alt="Mobile User Interface" height="566" width="275" objectFit="contain" />}
          >
            <Copy>
              Nicht nur beim Aufbau, sondern auch an diversen weiteren Punkten der User Journey wurde auf eine Bedienung und
              Benutzerführung geachtet, die prägnant und zuvorkommend ist:
            </Copy>
            <Copy as="div">
              <UnorderedList
                items={[
                  'Auf der Startseite werden wiederkehrende Userinnen und User in einem persönlichen Einstiegsbereich begrüsst.',
                  'Für einen barrierefreien Zugang spricht der Lighthouse-Accessibility-Score von 97%. Accessibility-Reviews geben Hinweise für weitere Verbesserungen.',
                  'Micro-Interactions tragen dem Umstand Rechnung, dass Userinnen und User am Smartphone kürzer angebunden sind. Die Profil-Einstellungen bestehen z. B. aus mehreren Toggles für unterschiedliche Arten von Mitteilungen – tipp, Benachrichtigungen an, tapp, Newsletter abonniert.',
                ]}
              />
            </Copy>
          </Keyfigure>
        </Section>

        <Section>
          <Grid cols={2}>
            <Image
              src={images.stairs}
              alt="Ein Mann steigt das Treppenhaus hoch. Er trägt einen Wäschekorb mit Kleidern und M-Budget-Waschmittel drin."
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              src={images.diskutieren}
              alt="Eine Frau und ein Mann betrachten etwas auf einem Smartphone."
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </Section>

        <Section>
          <Heading2>Hebt ab in Richtung App</Heading2>
          <Copy>
            Bilder, grossflächig und gestochen scharf. Personalisierte, überraschende Inhalte – relevant für jedes einzelne
            Community-Mitglied. Alles schön verpackt, blitzschnell geladen und fehlerfrei auf jedem Smartphone. Die Ansprüche
            an eine moderne Website sind hoch, an Apps noch höher.
          </Copy>
          <Copy>
            Wie also eine Website bauen, die den Nutzerinnen und Nutzern Relevantes präsentiert, zum Mitmachen anregt, chic
            daherkommt und performant wie eine App ist? Um das alles abzudecken, kombiniert Migipedia die besten aus einer
            ganzen Reihe von Ansätzen:
          </Copy>
          <Copy as="div">
            <UnorderedList
              items={[
                'Tech-Stack auf der Höhe der Zeit: Next.js, React, Tailwind, GraphQL',
                'Optimale Kombination von dynamischer und statischer Generierung auf Seitenbasis (SSG, SSR, CSR)',
                'Performance hat Priorität (Datensparsamkeit, Caching, Chunking, Prefetching)',
                'Best Practices verankert durch Testing, Lighthouse Score und Monitoring',
                'Alles unter einem Dach – dank Widgets, Microsites und Verwendung von Microservices',
                'Recommender ziehen für jeden Kunden das Beste aus Big Data',
              ]}
            />
          </Copy>
          <Copy>
            Migipedia steht auch als Progressive Web App (PWA) für Smartphones und Desktop zur Verfügung. Verfolgt wird ein
            «Test and Learn»-Ansatz, um die Akzeptanz der Community gegenüber PWAs in Erfahrung zu bringen und dem
            Nutzerverhalten entsprechend die Entwicklung voranzutreiben. Also ganz im Sinne einer PWA, die progressiv über
            den Browser hinauswächst. Momentan bietet die PWA bereits nützliche Shortcuts (Android) sowie Splash- und
            Offline-Screens zur Überbrückung von Wartezeiten, was zu einer flüssigeren Experience beiträgt.
          </Copy>
        </Section>

        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quote} />
        </Section>

        <Section>
          <Heading2>Erfolgsfaktoren: Design, Personalisierung, Performance</Heading2>
          <Copy>
            Migipedia, die App im Web, kommt bei den Migros-Kund*innen an. Monatlich stossen rund 2000 neue Mitglieder zur
            Migros-Community hinzu. An manchen Tagen werden Migros-Produkte im Minutentakt bewertet und beinahe 85% der
            Besucherinnen und Besucher geben bei der permanenten NPS-Befragung an, dass sie Migipedia Freunden
            weiterempfehlen würden.
          </Copy>
          <Copy>
            Sich beim Relaunch der Migros-Community in den Bereichen Design, Personalisierung und Performance an einer
            App-artigen Experience zu orientieren und Kund*innen einmal mehr in den Mittelpunkt zu stellen, sind die
            Erfolgsfaktoren der Community-Plattform. Sie tragen dazu bei, dass Kund*innen heute häufiger denn je mit
            Produkten interagieren und untereinander, aber auch mit der Migros selbst, in Dialog treten.
          </Copy>

          <Heading3>Persönliche Empfehlungen</Heading3>
          <Copy>
            Trotz 350 000 Produktbewertungen sind mehr als die Hälfte der Migros-Produkte noch nicht bewertet. Es sind vor
            allem die Migros-Klassiker, die immer wieder bewertet werden. So zum Beispiel der Migros Kult Ice Tea Zitrone in
            der 1-Liter-Packung mit rund 700 Bewertungen. Wie schafft es die Migros, von den Klassikern abzulenken und
            Bewertungen für noch nicht bewertete Produkte zu generieren?
          </Copy>
          <Copy>
            Hier kommen die Recommender zum Zug. Wer seinen Community-Account mit seiner Cumulus-Karte verknüpft, bekommt auf
            der Startseite jeweils drei Produkte seines letzten Einkaufs gezeigt. Charmant werden die Userinnen und User
            gefragt, ob sie diese Produkte bewerten möchten. Nicht nur der letzte Einkauf, sondern auch oft gekaufte Produkte
            oder Produkte, die von anderen aktuell bewertet werden, sowie Aktionen und Neuheiten werden den
            Community-Mitgliedern empfohlen. Je nach Login-Status kommen unterschiedliche Empfehlungen zum Einsatz. Diese
            Form der Personalisierung ist ein entscheidender Faktor für die Lebendigkeit der Community.
          </Copy>
        </Section>

        <Section>
          <Grid cols={2}>
            <TextBlock title="neue Mitglieder pro Monat" number={2000}>
              Monatlich stossen rund 2000 neue Mitglieder zur Migros-Community hinzu.
            </TextBlock>
            <TextBlock title="Bewertungen" number={120000}>
              Im Jahr 2020 wurden 120&apos;000 neue Bewertungen von der Community verfasst.
            </TextBlock>
            <TextBlock title="Prozent mehr" number={60}>
              Im Vergleich zum Vorjahr wurden 60% mehr Bewertungen abgegeben.
            </TextBlock>
            <TextBlock title="Prozent weniger" number={50}>
              Die durchschnittliche Zeit, die eine Userin oder ein User für eine Bewertung aufbringen muss, wurde halbiert.
            </TextBlock>
            <TextBlock title="Datenquellen" number={3}>
              Aus drei Datenquellen mit Millionen von Datensätzen werden Produkte zum Vorschlagen ausgewählt. So ist sicher
              eins dabei, das passt.
            </TextBlock>
            <TextBlock title="API Requests" number={105000000}>
              105 Mio. Mal wurden die 120 000 neuen Bewertungen im letzten Jahr abgerufen.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Keyfigure background="apricot">
            <Heading2>Jury-Hinweis</Heading2>
            <Copy>
              Beste Experience: eigenen Community-Account erstellen und ihn mit Cumulus (falls vorhanden) verbinden.
              Alternativ ist ein Account mit Cumulus-Verknüpfung bei der BOSA-Einreichung in den juryrelevanten Informationen
              im Bereich Zugangsdaten hinterlegt. Allfällige Bewertungen und weitere Community-Interaktionen finden in der
              Live-Umgebung statt und sind für alle Kund*innen sichtbar.
            </Copy>
          </Keyfigure>
        </Section>
      </main>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;

  return {
    props: {
      images,
      quote: QUOTE,
    },
  };
};

export default Bosa2021;
