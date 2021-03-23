import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Contact } from '../../components/contact';
import { ImageCard } from '../../components/image-card';
import { Keyfigure } from '../../components/keyfigure';
import { Testimonial } from '../../components/testimonial';
import { TextBlock } from '../../components/text-block';
import { Grid } from '../../compositions/grid';
import { LinkList } from '../../compositions/link-list';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Copy } from '../../identity/copy';
import { Heading3 } from '../../identity/heading-3';
import { Page } from '../../layouts/page';
import { BlobVariations } from '../../utils/blob-variations';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Migusto: NextPage<Props> = ({ quote, contact, teasers }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="_Schnelle_ Rezepte für schnelles Kochen."
        description="Für die neue Migusto-Plattform der Migros haben wir eine Rezepte-API entwickelt. Unsere Lösung bietet einen zentralen Zugriff auf die Migros Rezeptdatenbank mit Rezepten von Migusto, Famigros und iMpuls."
      >
        <Copy>
          Für den neuen Auftritt von <Link href="https://migusto.ch">Migusto</Link> haben wir eine Rezepte-API entwickelt.
          Sie ist nun die zentrale Anlaufstellt für alle Migros-Rezepte und wird von Migusto, Famigros und iMpuls benutzt.
        </Copy>
        <Copy>
          In Echtzeit (und verdammt schnell 🚀) liefert die GraphQL-Schnittstelle Rezeptdaten aus. Aber nicht nur das, dank
          einer intelligenten Suche ist sie auch das Rückgrat der Migusto-Suchfunktion.
        </Copy>
        <LinkList
          links={[
            { label: 'Zu Migusto', href: 'https://migusto.migros.ch/de.html' },
            { label: 'Zu Famigros', href: 'https://famigros.migros.ch/de' },
            { label: 'Zu iMpuls', href: 'https://www.migros-impuls.ch/de' },
          ]}
        />
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded bg-mint-200"
              src="/images/projekte/migusto/maarten-van-den-heuvel-EzH46XCDQRY-unsplash.jpg"
              alt="Person schneidet Gemüse aus der Vogelperspektive"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded bg-mint-200"
              src="/images/projekte/migusto/jimmy-dean-my1mDMraGf0-unsplash.jpg"
              alt="Eine Frau und ein Mann beim gemeinsamen Kochen"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Keyfigure>
            <UnorderedList
              title="Hauptzutaten der neuen API"
              items={[
                'Rezepte mit saisonalen Zutaten werden höher gewichtet',
                'Persönliche Diäten (vegan, glutenfrei) werden beachtet',
                'Zentrale Rezept-API für Migusto, Famigros und iMpuls',
                'Hohe Performance und komplexe Abfragen dank GraphQL',
              ]}
              markerColor="mint"
            />
          </Keyfigure>
        </PageSection>
        <PageSection title="Sofort die relevanten Rezepte auf dem Teller">
          <Copy>
            Die Rezepte-API aggregiert Inhalte verschiedener Herkunft und stellt sie Plattformen mit unterschiedlichen
            Anforderungen zur Verfügung. Regelmässig werden die Rezepte aus dem Redaktionssystem importiert und der Suchindex
            optimiert. Die Rezepte werden live mit Community-Daten (Bewertungen, Kommentaren und Fragen) von{' '}
            <Link href="https://reactions.dev">Reactions</Link> angereichert:
            <em>Schmeckt toll, aber noch besser mit etwas Chili.</em>
          </Copy>
          <Copy>
            Die Schnittstelle kann mit mehreren Mandanten umgehen. Sie liefert Rezepte für Migusto, Famigros und iMpuls. Dank
            GraphQL ist eine flexible, auf den Mandanten und den Kontext zugeschnittene Abfrage möglich: Nur die jeweils
            benötigten Felder werden abgefragt, seien es Bild und Titel oder alle Schritte und detaillierte Nährwertangaben.
          </Copy>
        </PageSection>
        <PageSection>
          <Image
            className="rounded bg-mint-200"
            src="/images/projekte/migusto/stefan-c-asafti-x5jilo3ck3o-unsplash.jpg"
            alt="Drei Pizzen in einem Backofen"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </PageSection>
        <PageSection title="Schnell zum richtigen Rezept.">
          <Copy>
            Die Migusto-Webseite ist auf eine blitzschnelle Suche angewiesen. Die Rezepte-API bietet Volltextsuche in einer
            grossen Anzahl von Rezepten, kombinierbar mit Filterung nach Kategorien wie z.B. &ldquo;vegan&rdquo; und
            &ldquo;Dessert&rdquo;. Auch komplexe Suchanfragen liefern relevante Resultate – Dank Elasticsearch und
            Autocorrect, Bigram Matching, Stemming sowie Synonym-Erkennung mit einer durchschnittlichen Response-Time von
            lediglich 40ms.
          </Copy>

          <Copy>
            Auf der Suche nach Inspiration? Die Autocomplete-Funktion nimmt Tipparbeit ab und liefert Kochideen. Pizza…
            Margherita? Pizzabrot? Mit Crevetten?
          </Copy>
        </PageSection>
        <PageSection title="Atemberaubend schnell">
          <Grid cols={3}>
            <TextBlock title="rpm" number={20000}>
              Spitzenwerte der Rezepte-API
            </TextBlock>
            <TextBlock title="ms" number={34}>
              Durchschnittliche Response Time
            </TextBlock>
            <TextBlock title="Prozent" number={20}>
              Bessere Suchresultate
            </TextBlock>
          </Grid>
        </PageSection>
        <PageSection>
          <Testimonial background="apricot" blobs={BlobVariations.apricot[2]} quote={quote} />
        </PageSection>
        <PageSection title="Dank Big Data die richtigen Produkte im Einkaufswagen.">
          <Copy>
            Ein Rezept hat Zutaten, aber im Einkaufswagen landen Produkte. Hier schlägt die Rezepte-API die Brücke. Es werden
            passende Produkte angeführt, die direkt in die Einkaufsliste übernommen werden können. Ist eine Präferenz
            bekannt, werden dazu passende Produkte vorgeschlagen, etwa Bio-Milch. Mit Hadoop wird die Präferenz aus Käufen in
            der Migros personalisiert errechnet. Dank innovativem Einsatz von Big Data werden bei allen Schritten von der
            Rezeptsuche über den Einkauf bis zum fertigen Menu sinnvolle Funktionen angeboten, die das Leben leichter machen.
          </Copy>
          <Heading3>Immer die passenden Rezepte</Heading3>
          <Copy>
            Die Schnittstelle liefert Rezepte nach saisonaler Relevanz aus. Sucht man z.B. im Frühling nach einem Risotto,
            wird ein Bärlauch-Risotto vorgeschlagen, im Herbst wird hingegen ein Steinpilz-Risotto höher gewichtet.
            Persönliche Präferenzen wie vegane oder laktosefreie Ernährung werden ebenfalls, soweit bekannt, in die
            Gewichtung einbezogen.
          </Copy>
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded bg-mint-200"
              src="/images/projekte/migusto/anna-auza-wqrX5t1wBG0-unsplash.jpg"
              alt="Frischer Bärlauch auf einem Schneidebrett"
              priority
              objectPosition="center center"
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded bg-mint-200"
              src="/images/projekte/migusto/megumi-nachev-qkQR-OrvZic-unsplash.jpg"
              alt="Ein Kuheuter auf einer grünen Wiese"
              priority
              objectPosition="center top"
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>

        <PageSection>
          <Contact contact={contact} />
        </PageSection>

        <PageSection title="Weitere Erfolgsgeschichten">
          <Grid cols={3}>
            {teasers.map((teaser) => (
              <ImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      teasers: getRandomTeasers(3, Teasers.migusto.title),
      quote: Quotes['desiree-migusto'],
      contact: Employees.thilo,
    },
  };
};

export default Migusto;
