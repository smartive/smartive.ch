import {
  Copy,
  Grid,
  Keyfigure,
  Link,
  LinkList,
  PageSection,
  Screenshot,
  ScreenshotVariant,
  TextBlock,
  UnorderedList,
} from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { Contact } from '../../components/contact';
import { NextImageCard } from '../../components/image-card';
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

const STATIC_IMAGES = {
  rennen: '/images/projekte/spilo/bambi-corro-fn3puWB0pHY-unsplash.jpg',
  klettern: '/images/projekte/spilo/rashid-sadykov-JUPKydbR6q0-unsplash.jpg',
} as const;

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Spilo: NextPage<Props> = ({ contact, teasers, images }) => (
  <Page>
    <PageHeader
      markdownTitle="Mit Kindern _Spielplätze_ entdecken."
      description="Für dann, wenn du einen Spielplatz brauchst, aber keinen kennst. Dafür gibts SPILO - den Spielplatz-Finder."
    >
      <Copy>
        <em>Spielpi!</em> verlangt dein Kind. Du kennst dich in der Umgebung aber gerade nicht aus. Deinem Kind ist das egal.{' '}
        <em>SPIELPI!!!</em> Diskussion beendet, der nächste Programmpunkt ist gesetzt. Du weisst aus Erfahrung, was sonst
        passiert. 👼 Jetzt gilt es, schnellstmöglich den nächsten Spielplatz zu finden. Dafür haben wir zusammen mit dem
        Kanton St.Gallen SPILO entwickelt - den Spielplatz-Finder.
      </Copy>
      <LinkList links={[{ label: 'Zum SPILO', href: 'https://spilo.sg' }]} />
    </PageHeader>

    <main>
      <PageSection>
        <Grid cols={2}>
          <PlaceholderImage
            image={images.rennen}
            alt="Kind rennt auf einem Spielplatz"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
          <PlaceholderImage
            image={images.klettern}
            alt="Kind klettert auf einem Spielplatz"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
        </Grid>
      </PageSection>
      <PageSection>
        <Keyfigure
          background="mint"
          image={
            <Screenshot
              variant={ScreenshotVariant.mobile}
              image={{ url: '/images/projekte/spilo/spielplatz-screenshot.png', originalHeight: 823, originalWidth: 412 }}
            />
          }
        >
          <UnorderedList
            markerColor="cornflower"
            title="Kinderleicht erklärt"
            items={[
              'In 30 Tagen von der Idee zur App',
              'Aktive Unterstützung bei der Ideenfindung und Konzeption',
              'Einfache Verwaltung und Normalisierung der Daten',
              'Schnelle Releases und Installation der App dank PWA',
              'Ausgelegt für eine einfache Bedienung, sodass man eine Hand für den Kinderwagen frei hat',
            ]}
          />
        </Keyfigure>
      </PageSection>
      <PageSection>
        <Grid cols={2}>
          <TextBlock title="Damit haben wir gestartet">
            Für die Entwicklung von Kindern und die Förderung der Koordinationsfähigkeit ist klettern, rennen und rumtoben
            sehr wichtig. Dafür sind Spielplätze mit Klettergerüsten und Sandkästen ideal. Grillstellen fördern das familiäre
            Zusammensein. Weniger bekannt sind Angebote wie zum Beispiel Pumptracks. Eine zentrale Plattform für die
            verschiedenen Angebote fehlte bisher, da die Daten verteilt und bei den Gemeinden angesiedelt sind.
          </TextBlock>
          <TextBlock title="Das haben wir daraus gemacht">
            Eine schlanke und schnelle{' '}
            <NextLink href="/was-ist/pwa" passHref>
              <Link>Progressive Web App</Link>
            </NextLink>{' '}
            erlaubt es Nutzer*innen, Spielplätze und andere Abenteuer in der Nähe zu finden. Die Daten werden aus den
            verschiedenen Gemeinden zusammengetragen und zentral in einem{' '}
            <NextLink href="/was-ist/headless-cms" passHref>
              <Link>Headless CMS</Link>
            </NextLink>{' '}
            gepflegt. In einem{' '}
            <NextLink href="/angebot/speedboat" passHref>
              <Link>Speedboat</Link>
            </NextLink>{' '}
            haben wir innert 30 Tagen aus einer Idee eine eigene Plattform mit einem eigenen Brand und einem guten{' '}
            <NextLink href="/was-ist/lean-ux" passHref>
              <Link>UX-Konzept</Link>
            </NextLink>{' '}
            entwickelt, die einfach zu benutzen ist.
          </TextBlock>
        </Grid>
      </PageSection>

      {/* <PageSection>
        <Testimonial background="mint" blobs={BlobVariations.mint[1]} quote={quote} />
      </PageSection> */}

      <PageSection>
        <Contact contact={contact}>
          Sandkastenfreund gesucht?
          <br />
          {contact.firstname} nimmt sich gerne Zeit.
        </Contact>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await getPlaceholders(STATIC_IMAGES);
  const teasers = await Promise.all(
    [Teasers.ofpg, Teasers.filialfinder, Teasers['supply-chain']].map(async (teaser) => await transformTeaser(teaser))
  );
  return {
    props: {
      images,
      teasers,
      contact: await transformEmployee(Employees.peter),
      // TODO: Add real quote
      quote: {
        ...(await transformQuote(Quotes['fabrina-kig'])),
        excerpt: 'Bubi spielen, Bubi xund',
        text: 'Super diese smartive, die liefern die Beratung sogar nach Hause! Ohne Lieferkosten! Impfall!',
      },
    },
  };
};

export default Spilo;
