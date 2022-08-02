import { BlobVariations, Copy, Grid, Heading3, TextBlock } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const STATIC_IMAGES = {
  screenshotPhotoAdmin: '/images/projekte/digital-campaign-factory/screenshot-photo-admin.jpg',
  screenshotPhotoWidget: '/images/projekte/digital-campaign-factory/screenshot-photo-widget.jpg',
  woman: '/images/projekte/digital-campaign-factory/karsten-winegeart-4bC1Ef88OYI-unsplash.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quotePO: Quote;
  quoteDev: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const MigrosDigitalCampaignFactory: NextPage<Props> = ({ contact, teasers, images, quotePO, quoteDev }) => (
  <Page>
    <PageHeader markdownTitle="Fabrik für spielerische Kampagnen">
      <Copy>
        Eine digitale Fabrik für personalisierte Gewinnspiele, Umfragen und Wettbewerbe: Damit beglückt der
        Migros-Genossenschafts-Bund seine Kampagnen-Verantwortlichen und die wiederum die Endkund*innen. Als integriertes
        Design- und Development-Team haben wir mitgeholfen, die <em>Digital Campaign Factory</em> auf die Beine zu stellen.
      </Copy>
    </PageHeader>

    <Section>
      <Image src={images.woman} alt="Lachende Frau in Einkaufswagen" priority objectFit="cover" width={1504} height={800} />
    </Section>

    <main>
      <Section>
        <Heading3>Das Resultat</Heading3>
        <Copy>
          Mitarbeiter*innen der Migros kriegen ein flexibles Tool an die Hand: Zum Beispiel können sie sich einen
          Adventskalender zusammenklicken und Umfragen und Gewinne hinter den Türchen verstecken. Geht es auch spielerischer?
          Klar! Mit einem Memory zu Katzenfuttermarken – Hauptgewinn: ein Jahr Katzenfutter - punkten sie bei ihren liebsten
          Zielgruppen. Oder ganz simpel und saisongerecht starten sie nach dem Sommerurlaub einen Fotowettbewerb zu den
          flauschigsten Badetüchern aus dem Sortiment.
        </Copy>
        <Grid cols={2}>
          <Image
            src={images.screenshotPhotoAdmin}
            alt="Online Fotowettbewerb Auswertung"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
          <Image
            src={images.screenshotPhotoWidget}
            alt="Online Fotowettbewerb Bildergalerie"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
        </Grid>
        <Copy>
          Schritt für Schritt werden die Kampagnenleiter*innen von Start- und Enddatum über Titel und Gewinnbeschrieb,
          Übersetzungen, Sponsorlogo und Bildupload zur Auswahl von Pflichtfeldern im Teilnahmeformular geführt. Der
          Zwischenstand kann jederzeit mittels Vorschau-Funktion geprüft werden. Sind obligatorische Inhalte wie die
          Datenschutzbestimmungen der Kampagne erfasst, wird ein Code Snippet generiert, das innert Minuten auf der Zielseite
          eingebunden ist.
        </Copy>
      </Section>
      <Section>
        <Testimonial background="mint" blobs={BlobVariations.mint[1]} quote={quotePO} />
      </Section>
      <Section>
        <Heading3>Das Vorgehen</Heading3>
        <Copy>
          Damit die Migros möglichst rasch die erste Kampagne starten konnte, sind wir dem{' '}
          <Link href="https://smartive.ch/was-ist/mvp">MVP-Gedanken</Link> gefolgt. So konnten die ersten Widgets bereits
          nach kurzer Zeit eingesetzt werden und die Feedbacks flossen in die iterative Optimierung ein.
        </Copy>
        <Copy>
          Das Scrum-Team besteht aus smartive- und Migros-Mitarbeitenden.{' '}
          <Link href="https://smartive.ch/was-ist/agile">Agile Zusammenarbeit </Link>ist der Schlüssel zum Erfolg: Die Werte
          <em> Fokus </em> und <em> Commitment </em> werden überzeugt gelebt, Qualität und Produktivität stehen für alle an
          erster Stelle, der Austausch von Know-how ist sichergestellt und die Arbeit macht erst noch mehr Spass.{' '}
        </Copy>
        <Copy>
          Wir entwickeln nicht nur Widgets, sondern auch geteilte Best Practices durch konsequente, saubere Code-Reviews und
          Lightning Tech Talks. Design-Reviews sind ebenfalls fester Bestandteil und stimmen UX und Development aufeinander
          ab. In Retrospektiven räumen wir Hindernisse aus dem Weg. Und nicht zu vergessen: der Co-Working Day eröffnet immer
          wieder Chancen auf ein gemeinsames Feierabendbier. Oder einen Ice Tea Classic aus der Migros.
        </Copy>
      </Section>
      <Section>
        <Testimonial background="cornflower" blobs={BlobVariations.cornflower[3]} quote={quoteDev} />
      </Section>
      <Section title="Ein paar Insights">
        <Grid cols={2}>
          <TextBlock title="Die Kombi macht's">
            Ein CMS, eine API und Widgets für alle Fälle: Die <em> Digital Campaign Factory </em> ist ein Kampagnentool, das
            auf jede Anforderung eine Antwort hat. Dafür sorgt die eigens entwickelte CMS-Lösung, welche die Datenerfassung
            im Adminbereich einfach macht und trotzdem mächtig ist: Mit dem integrierten Rich Text Editor können die Inhalte
            nach eigenem Gusto gestaltet und Übersetzungen schnell erfasst werden. Jedes Widget kann mit Kolleg*innen geteilt
            werden, so dass zusammen an den Inhalten gearbeitet werden kann.
          </TextBlock>
          <TextBlock title="Cloud: maximal flexibel, maximale Kontrolle">
            Dank <Link href="/was-ist/react#typescript">TypeScript </Link> wissen wir, wie unsere Daten geartet sind: rund
            oder eckig, Buchstaben oder Zahlensalat. Diese Datentypen definieren wir genau einmal und benutzen sie überall –
            auch auf Google Firestore. Auch mit x-tausend gleichzeitigen Abfragen hat das System keine Mühe. Dank der Power
            der Firestore Datenbank und dem skalierenden Cloud Setup – automatisch und dadurch mit minimalen Kosten.
          </TextBlock>
        </Grid>
      </Section>
      <Section>
        <Contact contact={contact}>
          Willst du mehr wissen?
          <br />
          {contact.firstname} nimmt sich gerne Zeit.
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const teasers = [Teasers.ofpg, Teasers.filialfinder, Teasers['supply-chain']];
  const contact = await getEmployeeByName('Anna Wyss');

  return {
    props: {
      images,
      teasers,
      contact,
      quotePO: Quotes['coco-dcf-migros'],
      quoteDev: Quotes['nils-dcf-migros'],
    },
  };
};

export default MigrosDigitalCampaignFactory;
