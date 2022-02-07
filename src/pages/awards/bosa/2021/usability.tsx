import { BlobVariations, Copy, Grid, Heading2, Keyfigure, TextLink, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Testimonial } from '../../../../components/testimonial';
import { PageHeader } from '../../../../compositions/page-header';
import { Quote, transformQuote } from '../../../../data/quotes';
import { PlaceholderImage } from '../../../../elements/placeholder-image';
import { LandingPage } from '../../../../layouts/landing-page';
import { Section } from '../../../../layouts/section';
import { getPlaceholders, PlaceholderImages } from '../../../../utils/image-placeholders';

const STATIC_IMAGES = {
  kitchen: '/images/projekte/migipedia/RGB_04_kitchen_012.jpg',
  diskutieren: '/images/projekte/migipedia/RGB_01_diskutieren_007.jpg',
  phone: '/images/projekte/migipedia/smartive-phone.png',
  couch: '/images/projekte/migipedia/RGB_05_couch_010.jpg',
  snack: '/images/projekte/migipedia/RGB_02_snack_001.jpg',
  stairs: '/images/projekte/migipedia/RGB_06_stairs_004.jpg',
  bike: '/images/projekte/migipedia/RGB_03_bike_016.jpg',
} as const;

const QUOTE = {
  excerpt: 'Wenn Migipedia _eine App_ wäre…',
  text: 'Bei knapp 80% Mobile Use der Community haben wir uns nicht an Web-, sondern an App-Pattern orientiert. Zu Recht, wie die Community-Aktivitäten zeigen.',
  credit: 'Philipp Bühler, Senior Product Owner Migros-Community',
  portrait: '/images/portraits/philipp-buehler.jpg',
};

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  quote: Quote;
};

const Bosa2021: NextPage<Props> = ({ quote, images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="_Migipedia_ – 10 Jahre Userinnen und User im Mittelpunkt"
        description="Migipedia – 10 Jahre Userinnen und User im Mittelpunkt"
        tags={[
          { short: 'BOSA21', full: 'Eingabe Best of Swiss Apps 2021' },
          { short: 'mobile-web', full: 'Kategorie User Experience & Usability' },
        ]}
      >
        <Copy>
          Seit 2010 stehen bei <TextLink href="https://migipedia.migros.ch/de">Migipedia</TextLink> – der Community der
          Migros – Kund*innen im Mittelpunkt. Die Ansprüche der Userinnen und User an die Plattform haben sich in dieser Zeit
          immer wieder verändert. Mit dem Migipedia-Relaunch von 2020 unter dem Motto «Wenn Migipedia eine App wäre» wird
          diesen Veränderungen einmal mehr Rechnung getragen. Mit Erfolg: Auch dank der App-artigen User Experience ist die
          Community heute so lebendig wie nie zuvor.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <PlaceholderImage
            image={images.diskutieren}
            alt="Eine Frau und ein Mann betrachten etwas auf einem Smartphone."
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Heading2>Die Migros-Community</Heading2>
          <Copy>
            Migipedia.ch macht es Kund*innen leicht, sich miteinander auszutauschen und mit der Migros in Kontakt zu treten.
            Die primäre Zielgruppe sind junge Familien und Digital Natives. Diese Zielgruppe möchte ein ansprechendes,
            schnelles und unkompliziertes Nutzererlebnis, wie sie es von Apps kennt.
          </Copy>
          <Copy as="div">
            <UnorderedList
              items={[
                '80% mobiler Traffic: Relaunch von Migipedia mit Fokus auf Mobile Devices',
                'Reduktion auf sechs aktiv formulierte Navigationspunkte',
                '60% mehr Bewertungen im Vergleich zum Vorjahr',
                'Halbiert: die durchschnittliche Zeit, die eine Kundin oder ein Kunde für eine Bewertung aufbringen muss',
                'Personalisierte Empfehlungen als Alternative zur Suche',
              ]}
            />
          </Copy>
        </Section>

        <Section>
          <Heading2>Die App im Web</Heading2>
          <Copy>
            Beinahe 80% der Nutzerinnen und Nutzer besuchen Migipedia mit einem Smartphone. Eine aktuelle Studie geht davon
            aus, dass sich Userinnen und User während der Nutzung eines mobilen Gerätes zu knapp 90% in Apps befinden,
            wohingegen nur etwa 10% der Zeit für das Browsen im Internet verwendet wird.
          </Copy>
          <Copy>
            Daran orientiert sich die Überarbeitung von Migipedia. Usability und Accessibility sind nicht die netten
            Nachbarn, die man leider vergessen hat einzuladen, sondern die Hauptgäste. Migipedia ist auf dem Desktop, dem
            Tablet und dem Smartphone zu Hause – und bietet neben Breakpoints für jede Bildschirmgrösse auch die perfekte
            Tanzfläche für den Finger. Dafür sorgen grosse Touchflächen und UX-Konzepte, die man von Apps kennt:
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
            background="cornflower"
            image={
              <PlaceholderImage
                image={images.phone}
                alt="Mobile User Interface"
                height="566"
                width="275"
                objectFit="contain"
              />
            }
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
            <PlaceholderImage
              image={images.bike}
              alt="Eine Frau sitzt mit dem Smartphone in der Hand auf einer Treppe und isst Popcorn."
              objectFit="cover"
              width={720}
              height={383}
            />
            <PlaceholderImage
              image={images.couch}
              alt="Eine Frau sitzt mit ihrem Sohn im Wohnzimmer. Sie sortieren Migros Mania Sammelelemente."
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </Section>

        <Section>
          <Heading2>Heureka statt Heuhaufen</Heading2>
          <Copy>
            Hier für dich: alle Migros-Produkte. Und alle Meinungen, alle Fragen, alle Diskussionen dazu. Wenn du jetzt ein
            bisschen überfordert bist: hier noch drei ausgewählte Produkte, die dich vielleicht interessieren. Oder willst du
            eine Meinung loswerden zum Knuspermüesli, das bei deinem letzten Einkauf im Korb war?
          </Copy>
          <Copy>
            Mehr ist nicht immer besser. Wer will schon unter Tausenden Produkten nach dem Produkt suchen, das man neulich
            gekauft hat? Waren das jetzt Blaubeeren oder Waldbeeren? Hier schaffen die neuen Recommender Abhilfe. Wer das
            Cumulus-Konto mit seinem Migros-Login verknüpft hat, profitiert von personalisierten Empfehlungen, die so manche
            Suche überflüssig machen. So muss man gar nicht lang überlegen, welches Müesli das genau war, von dem man wissen
            wollte, ob dort Nüsse drin sind.
          </Copy>
          <Copy>
            Userinnen und User machen regen Gebrauch von der Möglichkeit, vorgeschlagene Produkte zu bewerten. Dank der
            Recommender bekommen sie relevante Produkte zu sehen. Auf der Einstiegsseite werden drei Produkte zum Bewerten
            vorgeschlagen. Ein Tap darauf führt in einen Bewertungsmodus, der auf dem Smartphone den ganzen Bildschirm
            einnimmt. Animationen führen die Userin oder den User zurückhaltend durch den Ablauf und motivieren zusätzlich
            zur Interaktion.
          </Copy>
          <Copy>
            Auch wer ohne Müesli im Hinterkopf ankommt, muss nicht lang nach einer Idee suchen: Persönliche Empfehlungen und
            Big Data machen auch Stöbern zum Vergnügen. Die eigenen Interessen werden berücksichtigt, sodass Sparfüchse und
            Bio-Tiger gleichsam auf ihre Kosten kommen.
          </Copy>
        </Section>

        <Section>
          <Testimonial background="mint" blobs={BlobVariations.mint[0]} quote={quote} />
        </Section>

        <Section>
          <Heading2>Von Migipedia zur Migros-Community</Heading2>
          <Copy>
            Migipedia fügt sich nun noch besser ins Migros-Universum ein. Sieht aus wie die Migros, fühlt sich an wie die
            Migros. Der Wiedererkennungseffekt ist gewährleistet. Prominenter Teil des neuen Erscheinungsbildes ist zum
            Beispiel der Spickel, der dem Migros-M entstammt. Aber auch in Sachen UX wurde darauf geachtet, dieselbe Sprache
            zu sprechen. Auf jeder Seite gibt es beispielsweise einen klaren Call to Action.
          </Copy>
          <Copy>
            Migipedia steht auch als Progressive Web App (PWA) für Smartphones und Desktop zur Verfügung. Verfolgt wird ein
            «Test and Learn»-Ansatz, um die Akzeptanz der Community gegenüber PWAs in Erfahrung zu bringen und die
            Funktionalität entsprechend dem Nutzerverhalten weiterzuentwickeln.
          </Copy>
          <Copy>
            Auf mehreren Plattformen eingesetzte Widgets bieten überall die gleiche Experience: Das Benutzermenü und die
            Produktekacheln dürften aus der Migros-Welt bekannt sein, umgekehrt sind die Community-Widgets auch anderswo im
            Einsatz. Widgets stellen Bewertungs- und Fragefunktionen weiteren Migros-Plattformen zur Verfügung, mit flexiblen
            Theming-Anpassungen.
          </Copy>
          <Copy>
            Ein Rezept auf Migusto bewerten, eine Produktfrage in der Migros App stellen oder beantworten, einen Einkauf auf
            SportXX bewerten, an einem Produkttest auf Migros.ch teilnehmen oder im Forum auf Migipedia mitdiskutieren – nach
            dem Motto «fischen, wo die Fische sind und nicht dort, wo die Migros den schönsten Angelplatz vermutet» finden
            sich heute Migipedia Community-Features auf elf unterschiedlichen digitalen Touchpoints der Migros. Der Erfolg
            dieser Modularisierung lässt sich messen:
          </Copy>
          <Grid cols={2}>
            <TextBlock title="Prozent mehr User mit jeder Plattform" number={12}>
              Mit jeder Plattform, die zusätzlich mit Community-Features erschlossen werden konnte, wurden die
              User-Interaktionen im Durchschnitt um 12% erhöht.
            </TextBlock>
            <TextBlock title="Bewertungen pro Stunde" number={24}>
              Im Schnitt wird aktuell alle 2.5 Minuten ein Produkt bewertet.
            </TextBlock>
          </Grid>
        </Section>

        <Section>
          <Heading2>Lädt, bevor du’s merkst</Heading2>
          <Copy>
            Usability beginnt bei der Performance. Erst wenn die Seite übertragen und geparst ist, erscheint etwas auf dem
            Bildschirm. Und erst wenn das nötige JavaScript ausgeführt ist, sind alle Interaktionen möglich.
          </Copy>
          <Copy>
            Um die Ladezeiten so gering wie möglich zu halten, nutzt Migipedia diverse Kniffe: Da wäre einmal der Tech-Stack,
            der das Ausliefern vorab generierter Seiten ermöglicht; dann das Übermitteln von Client-Code in Teilen, damit das
            initiale Rendern nicht blockiert wird; dazu passende Bildformate und -grössen für verschiedene Geräte; ausserdem
            Caching in der API und schliesslich Monitoring mittels Lighthouse Score und Newrelic.
          </Copy>
          <Copy>
            Beim Klick auf einen Link wird nicht alles abgeräumt zugunsten einer weissen Fläche und eines Ladebalkens,
            sondern es wird eine Client-Side Transition angestossen: Dank Prefetching sind die Eckdaten des neuen Inhalts
            bereits im Client vorhanden. Sie werden in die bestehende Seite eingefügt, ohne dass diverse Skripte und das
            Rendering von Grund auf neu ablaufen müssen.{' '}
          </Copy>
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
  const images = await getPlaceholders(STATIC_IMAGES);

  return {
    props: {
      images,
      quote: await transformQuote(QUOTE),
    },
  };
};

export default Bosa2021;
