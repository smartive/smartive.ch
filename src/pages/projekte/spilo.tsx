import { Copy, Grid, Keyfigure, LinkList, Screenshot, ScreenshotVariant, TextBlock, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Contact } from '../../components/contact';
import { Image } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { PageHeader } from '../../compositions/page-header';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Link } from '../../elements/link';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const STATIC_IMAGES = {
  rennen: '/images/projekte/spilo/bambi-corro-fn3puWB0pHY-unsplash.jpg',
  klettern: '/images/projekte/spilo/rashid-sadykov-JUPKydbR6q0-unsplash.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
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
      <Section>
        <Grid cols={2}>
          <Image
            src={images.rennen}
            alt="Kind rennt auf einem Spielplatz"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
          <Image
            src={images.klettern}
            alt="Kind klettert auf einem Spielplatz"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
        </Grid>
      </Section>
      <Section>
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
      </Section>
      <Section>
        <Grid cols={2}>
          <TextBlock title="Damit haben wir gestartet">
            Für die Entwicklung von Kindern und die Förderung der Koordinationsfähigkeit ist klettern, rennen und rumtoben
            sehr wichtig. Dafür sind Spielplätze mit Klettergerüsten und Sandkästen ideal. Grillstellen fördern das familiäre
            Zusammensein. Weniger bekannt sind Angebote wie zum Beispiel Pumptracks. Eine zentrale Plattform für die
            verschiedenen Angebote fehlte bisher, da die Daten verteilt und bei den Gemeinden angesiedelt sind.
          </TextBlock>
          <TextBlock title="Das haben wir daraus gemacht">
            Eine schlanke und schnelle <Link href="/was-ist/pwa">Progressive Web App</Link>
            erlaubt es Nutzer*innen, Spielplätze und andere Abenteuer in der Nähe zu finden. Die Daten werden aus den
            verschiedenen Gemeinden zusammengetragen und zentral in einem{' '}
            <Link href="/was-ist/headless-cms">Headless CMS</Link>
            gepflegt. In einem <Link href="/angebot/speedboat">Speedboat</Link>
            haben wir innert 30 Tagen aus einer Idee eine eigene Plattform mit einem eigenen Brand und einem guten{' '}
            <Link href="/was-ist/lean-ux">UX-Konzept</Link>
            entwickelt, die einfach zu benutzen ist.
          </TextBlock>
        </Grid>
      </Section>

      {/* <Section>
        <Testimonial background="mint" blobs={BlobVariations.mint[1]} quote={quote} />
      </Section> */}

      <Section>
        <Contact contact={contact}>
          Sandkastenfreund gesucht?
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
  return {
    props: {
      images,
      teasers,
      contact: Employees.peter,
      // TODO: Add real quote
      quote: {
        ...Quotes['fabrina-kig'],
        excerpt: 'Bubi spielen, Bubi xund',
        text: 'Super diese smartive, die liefern die Beratung sogar nach Hause! Ohne Lieferkosten! Impfall!',
      },
    },
  };
};

export default Spilo;
