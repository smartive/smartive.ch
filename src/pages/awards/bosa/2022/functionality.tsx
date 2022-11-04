import { BlobVariations, Copy, Heading2, Keyfigure, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../../../components/image';
import { Testimonial } from '../../../../components/testimonial';
import { PageHeader } from '../../../../compositions/page-header';
import { Quote } from '../../../../data/quotes';
import { Link } from '../../../../elements/link';
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
          { short: 'Functionality', full: 'Kategorie Functionality' },
        ]}
      >
        <Copy>
          LearnFox ermöglicht auf einfachste Weise, gedruckte Lehrmittel kopiergeschützt digital zu publizieren. Verlage
          publizieren ihre Lehrmittel auf LearnFox und haben die Wahl, den Lernenden diese entweder in der LearnFox-App, oder
          in einem Derivat im eigenen Brand zur Verfügung zu stellen. Die Kund*innen sind also nicht gleich Nutzer*innen. Und
          der Fokus liegt auf den Nutzer*innen: den Lernenden.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.title}
            alt="Jugendliche in einem Klassenzimmer"
            priority
            variant={ImageVariant.FillContainer}
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Heading2>Lehrmittel, aber digital gedacht</Heading2>
          <Copy>
            Zu unserer Zeit hatten wir den Schülerthek mit sieben Büchern, drei Etouis und neun karierten Heftli gefüllt.
            Diese Zeiten sind – zum Glück – vorbei. Heute kommen die Lernenden mit einem Laptop. Und that’s it.
          </Copy>
          <Copy>
            Aber nur digital reicht nicht. Im Schulzimmer arbeiten die Lernenden am Laptop. Vor der Prüfung im Bus haben die
            Lernenden aber nicht den grossen Screen vor sich, sondern das Handy. Noch kurz die Notizen am Handy durchschauen?
            Kein Ding.
          </Copy>
          <Copy>
            Die Inhalte, Notizen, Markierungen und Lesezeichen sind komplett offlinefähig und zwischen maximal fünf Geräten
            synchronisiert. So sind die Inhalte da verfügbar, wo sie gerade gebraucht werden.
          </Copy>
          <Copy>
            Die Suche fokussiert sich ebenfalls auf die aktuellen Bedürfnisse der Lernenden. Du weisst nicht mehr, in welchem
            Semester du gelernt hast, wie man Mahagoni richtig ölt? Kein Ding. Die globale Suche durchforscht alle deine
            Lehrmittel. Du suchst innerhalb deines Buchs das Kapitel zum Thema Hobeln? Kann die App genau so. Und zwar wie
            gewohnt: du tippst und landest bei dem gesuchten Begriff.
          </Copy>
        </Section>

        <Section>
          <Image
            src={images.farbwchooser}
            alt="Ein Screenshot der LearnFox App zeigt wie Farben gewählt werden können"
            priority
            variant={ImageVariant.FillContainer}
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
            variant={ImageVariant.FillContainer}
            width={1504}
            height={800}
            quality={100}
          />
        </Section>

        <Section>
          <Keyfigure background="mint">
            <Copy as="div">
              <UnorderedList
                title="Numbers"
                items={[
                  '19ʼ000 digitalisierte Buchseiten',
                  '5ʼ000 aktive Benutzer*innen',
                  '745ʼ000 Annotationen, Notizen oder Lesezeichen',
                ]}
              />
            </Copy>
          </Keyfigure>
        </Section>

        <Section>
          <Heading2>Auf allen Plattformen</Heading2>
          <Copy>
            Die Schüler*innen arbeiten im Unterricht am liebsten auf einem Laptop. Auf dem Heimweg im Zug dann vielleicht
            sekundär mit ihrem Smartphone. Deshalb untersützen wir iOS, macOS, Android und Windows. Da für den Kunden eine
            Weblösung nicht in Frage kam setzen wir auf <Link href="/was-ist/flutter">Flutter</Link>. Damit liefern wir
            Native-Apps, für alle vier Plattformen, aus einer einzigen Codebasis.
          </Copy>
          <Copy>
            Die Auslieferung in die App Stores ist komplett automatisiert. Das Erstellen von «gebrandeten LearnFox Derivaten»
            (wie der binApp) ebenfalls. Wenn der nächste Verlag seine «eigene App» haben will, reichen ein paar Konfig
            Anpassungen und die Publikationen können im <Link href="https://admin.learnfox.ch">LearnFox Admin-UI</Link>{' '}
            hochladen.
          </Copy>
        </Section>

        <Section>
          <Image
            src={images.desktop}
            alt="Ein Screenshot der LearnFox App auf einem Desktop"
            priority
            variant={ImageVariant.FillContainer}
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Heading2>Eine LernApp – mit C und Game-Engine?!</Heading2>
          <Copy>
            So, die App ist also in Flutter geschrieben. Du fragst dich jetzt, was das mit der Programmiersprache C und einer
            Game-Engine zu tun hat? Haben wir uns zuerst auch.
          </Copy>
          <Copy>
            Das Ding ist, Flutter versteht ohne Hilfe keine PDFs. Dank einer eigenen C-Library können wir jetzt aber das
            Inhaltsverzeichnis, den Volltext, die Thumbnails und die Darstellung an sich in der App übernehmen.
          </Copy>
          <Copy>
            Als wir dann PDFs anzeigen konnten, kam die nächste Hürde: wie markiert man jetzt da Sachen? Da Flutter auch hier
            nicht ganz selbständig ist (und keine Canvas kennt), haben wir mit der Game-Engine graphx unseren eigenen
            Annotation-Layer gebaut. Jetzt kann man Striche, Kreise und Rechtecke malen so viel man will.
          </Copy>
        </Section>

        <Section>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quote} />
        </Section>

        <Section>
          <Heading2>Was der LearnFox mit Captain Hook zu tun hat</Heading2>
          <Copy>
            In unserer Kindheit fürchteten wir uns vor Captain Hook. Und auch die Verlage fürchten sich vor Piraten. Daher
            hat die Sicherstellung des Kopierschutzes der Inhalte höchste Priorität. User Accounts können nur auf einer
            bestimmten Anzahl Devices verwendet werden, sodass keine Zugangsdaten geteilt werden können. Sämtliche
            Kommunikation zwischen Server und Client läuft verschlüsselt. Und: Die Bücher sind lokal verschlüsselt und können
            auch mit Reverse Engineering nicht ausgelesen werden. Wir habens bei unserem Audit zumindest nicht geschafft.
          </Copy>
        </Section>

        <Section>
          <Keyfigure background="apricot">
            <Heading2>Jury-Hinweis</Heading2>
            <Copy>
              Die Verlage können ihre Publikationen über die universelle LearnFox App publizieren. Oder über eine (eigene)
              App-Kopie, mit eigenem Namen und eigenem Logo erstellen lassen.
            </Copy>
            <Copy>
              Der erste LearnFox Kunde ist der hausinterne bin-Eigenverlag. Die «binApp» ist eine App-Kopie von LearnFox und
              veröffentlicht die eLehrmittel des Verlags. Diese «binApp» haben wir zur Beurteilung bei Best of Swiss Apps
              eingereicht.
            </Copy>
            <Copy>In der nächsten Projektphase werden weitere Kunden auf die LearnFox Plattform onboarded.</Copy>
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
