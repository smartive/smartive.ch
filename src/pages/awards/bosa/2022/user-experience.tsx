import { BlobVariations, Copy, Heading2, Keyfigure } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image } from '../../../../components/image';
import { Testimonial } from '../../../../components/testimonial';
import { PageHeader } from '../../../../compositions/page-header';
import { Quote } from '../../../../data/quotes';
import { LandingPage } from '../../../../layouts/landing-page';
import { Section } from '../../../../layouts/section';

const STATIC_IMAGES = {
  title: '/images/projekte/learnfox/learnfox.jpeg',
  desktop: '/images/projekte/learnfox/desktop-app@2x.png',
  farbwchooser: '/images/projekte/learnfox/farbwähler@2x.png',
  doppel: '/images/projekte/learnfox/zwei-screens@2x.png',
} as const;

const QUOTE = {
  excerpt: 'Der ideale Begleiter',
  text: 'Als Verlagsleiter und Lehrer sehe ich im Alltag, dass die App unsere Lernenden im Unterricht ideal begleitet.',
  credit: 'Markus Fröhlich, Verlagsleiter bin Genossenschaft',
  portrait: '/images/portraits/markus-froehlich.jpg',
};

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
};

const Bosa2021: NextPage<Props> = ({ quote, images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="LearnFox – der perfekte Partner beim Lernen."
        description="LearnFox ermöglicht auf einfachste Weise, gedruckte Lehrmittel kopiergeschützt digital zu publizieren. Aber nicht nur als App, sondern als Plattform. Dank Flutter sind diese direkt auf iOS, Android und Windows verfügbar. Die neue binApp basiert auf LearnFox und beweist den Erfolg."
        tags={[
          { short: 'BOSA22', full: 'Eingabe Best of Swiss Apps 2022' },
          { short: 'UX ', full: 'Kategorie User Experience & Usability' },
        ]}
      >
        <Copy>
          LearnFox ermöglicht auf einfachste Weise, gedruckte Lehrmittel kopiergeschützt digital zu publizieren. Verlage
          publizieren ihre Lehrmittel auf LearnFox und haben die Wahl, den Lernenden diese entweder in der LearnFox-App, oder
          in einem Derivat im eigenen Brand zur Verfügung zu stellen. Die Lernenden erhalten so ein Erlebnis, das sich auf
          den jeweils richtigen Kontext bezieht.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.title}
            alt="Jugendliche in einem Klassenzimmer"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Heading2>Notizen im Unterricht</Heading2>
          <Copy>
            Die Zeiten des “ich schreib in mein Hüsli-Heft was an der Wandtafel steht” sind definitiv vorbei. Heute sitzen
            die Lernenden mit hochgetakteten, modernstens Laptops und Smart-Pens vor dem Bildschirm und skizzieren, notieren,
            assoziieren. Sie folgen dem Unterrichtsverlauf linear und und nutzen digitale Hilfsmittel, um das vernetzte
            Denken zu fördern. Mit relativ einfachen, klassischen Mitteln. Über ausgeklügelte, intuitive Werkzeuge können
            Inhalte markiert und skizziert, zusätzliche Notizen erfasst, Lesezeichen und Favoriten angelegt werden.
          </Copy>
          <Copy>
            Daher ist das der primäre Use Case des LearnFox: Lerninhalte werden vor Ort, während dem Unterricht, digital und
            persönlich erweitert. Das schöne daran: noch vor dem Schliessen des Laptops sind die Daten schon in der Cloud.
          </Copy>
        </Section>

        <Section>
          <Image
            src={images.farbwchooser}
            alt="Ein Screenshot der LearnFox App zeigt wie Farben gewählt werden können"
            priority
            objectFit="cover"
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Image
            src={images.doppel}
            alt="Die LernFox App zeigt auf einem iPhone ein PDF an"
            priority
            objectFit="cover"
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Heading2>Die kurzfristige Lernvorbereitung</Heading2>
          <Copy>
            Du sitzt im Bus, auf dem Weg zur Prüfung. Du bist gerade unsicher, welche Arten von Holzhobel es gibt. Brauchst
            du dafür dein Heft mit den vollgekrizzelten Hüsli? Nein! Brauchst du den Laptop, der im dümmsten Fall einen
            leeren Akku hat? Ebenfalls nein! Du schliesst TikTok und startest deine LearnFox-App, und suchst nach – was wohl
            – Hobel. Und die App bringt die Inhalte und deine Notizen direkt zu dir.
          </Copy>
          <Copy>
            Dabei gibt es unglaublich viele User Journeys, wie du dahin gelangst. Ob via Suche, Lesezeichen,
            Notizenübersicht, Favoriten oder “zuletzt geöffnet”. Alle Wege führen zum Hobeln.
          </Copy>
        </Section>

        <Section>
          <Image
            src={images.desktop}
            alt="Ein Screenshot der LearnFox App auf einem Desktop"
            priority
            objectFit="cover"
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Heading2>Welches Device ist denn jetzt wichtig?</Heading2>
          <Copy>
            Der Fokus auf das richtige Device ist gar nicht so einfach. Der Kontext der Lernenden ist entscheidend. Auch
            bezwecken die Lernenden unterschiedliches - je nach Kontext. Im Unterricht, am Laptop, werden Inhalte ergänzt und
            erweitert. Durch vernetztes Denken und Anregen unterschiedlicher Synapsen entsteht so ein grosser Lerneffekt.
            Beim Repetieren des Gelernten am Smartphone sind die Lernenden in einem passiveren Kontext. Inhalte werden
            gelesen und geordnet.
          </Copy>
          <Copy>
            Die These, dass mehr Zeit beim Ergänzen der Inhalte, und somit am Laptop, verbracht wird, hat sich in der Praxis
            bestätigt. Daher liegt der Hauptfokus in der User Experience darauf.
          </Copy>
        </Section>

        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quote} />
        </Section>

        <Section>
          <Heading2>Schweizer Handwerkstradition anstatt Silicon Valley</Heading2>
          <Copy>
            Im Silicon Valley gibts $10 Milliarden Valuations für Nicht-funktionierende-Bluttests. In Schweizer
            Handwerksbuden leider nicht. Daher wurde das Rad nicht neu erfunden: bekannte und den Nutzer*innen vertraute
            Patterns und Konzepte wurden aufgegriffen und wiederverwendet. So kann im PDF auf Mobile mit
            “Two-Finger-Pinching” gezoomt werden. Sämtliche Funktionalitäten sind für die Lernenden auf Anhieb ersichtlich
            und nicht in verschachtelten Menüs versteckt. Für die Mobileansicht gibt es einen Lesemodus, sodass nicht aus
            Versehen neue Notizen erfasst werden.
          </Copy>
        </Section>

        <Section>
          <Keyfigure background="apricot">
            <Heading2>Jury-Hinweis</Heading2>
            <Copy>Brauchts einen Hinweis?</Copy>
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
