import {
  BlobVariations,
  Copy,
  Grid,
  Heading3,
  Keyfigure,
  Link,
  LinkList,
  PageSection,
  TextBlock,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee, transformEmployee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote, transformQuote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser, transformTeaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { PlaceholderImage } from '../../elements/placeholder-image';
import { Page } from '../../layouts/page';
import { getPlaceholders, PlaceholderImages } from '../../utils/image-placeholders';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  gemuese: '/images/projekte/migusto/maarten-van-den-heuvel-EzH46XCDQRY-unsplash.jpg',
  kochen: '/images/projekte/migusto/jimmy-dean-my1mDMraGf0-unsplash.jpg',
  pizza: '/images/projekte/migusto/stefan-c-asafti-x5jilo3ck3o-unsplash.jpg',
  kraeuter: '/images/projekte/migusto/anna-auza-wqrX5t1wBG0-unsplash.jpg',
  kuh: '/images/projekte/migusto/megumi-nachev-qkQR-OrvZic-unsplash.jpg',
} as const;

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Migusto: NextPage<Props> = ({ quote, contact, teasers, images }) => {
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
          In Echtzeit (und rasant 🚀) liefert die GraphQL-Schnittstelle Rezeptdaten aus. Aber nicht nur das, dank einer
          intelligenten Suche ist sie auch das Rückgrat der Migusto-Suchfunktion.
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
            <PlaceholderImage
              image={images.gemuese}
              alt="Person schneidet Gemüse aus der Vogelperspektive"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <PlaceholderImage
              image={images.kochen}
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
            <Link href="https://reactions.dev">Reactions</Link> angereichert:{' '}
            <em>Schmeckt toll, aber noch besser mit etwas Chili.</em>
          </Copy>
          <Copy>
            Die Schnittstelle kann mit mehreren Mandanten umgehen. Sie liefert Rezepte für Migusto, Famigros und iMpuls. Dank
            GraphQL ist eine flexible, auf den Mandanten und den Kontext zugeschnittene Abfrage möglich: Nur die jeweils
            benötigten Felder werden abgefragt, seien es Bild und Titel oder alle Schritte und detaillierte Nährwertangaben.
          </Copy>
        </PageSection>
        <PageSection>
          <PlaceholderImage
            image={images.pizza}
            alt="Drei Pizzen in einem Backofen"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </PageSection>
        <PageSection title="Sofort das richtige Rezept">
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
            <PlaceholderImage
              image={images.kraeuter}
              alt="Frischer Bärlauch auf einem Schneidebrett"
              priority
              objectPosition="center center"
              objectFit="cover"
              width={720}
              height={383}
            />
            <PlaceholderImage
              image={images.kuh}
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
              <NextImageCard key={teaser.title} {...teaser} />
            ))}
          </Grid>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await getPlaceholders(STATIC_IMAGES);
  const teasers = await Promise.all(
    getRandomTeasers(3, Teasers.migusto.title).map(async (teaser) => await transformTeaser(teaser))
  );
  return {
    props: {
      images,
      teasers,
      quote: await transformQuote(Quotes['desiree-migusto']),
      contact: await transformEmployee(Employees.thilo),
    },
  };
};

export default Migusto;
