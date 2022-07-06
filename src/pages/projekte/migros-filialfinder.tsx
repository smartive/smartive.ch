import { BlobVariations, Copy, Grid, Heading3, Keyfigure, LinkList, UnorderedList } from '@smartive/guetzli';
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
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  supermarkt: '/images/projekte/fil/supermarkt-aussen.jpg',
  takeaway: '/images/projekte/fil/migros-take-away.jpg',
  filialfinder: '/images/projekte/fil/filialfinder-frontend.png',
  flughafen: '/images/projekte/fil/migros-filiale-zuerich-airport.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Filialfinder: NextPage<Props> = ({ quote, contact, teasers, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Auf der Suche nach der nächsten _Migros-Filiale_."
        description="Noch kurz in die Migros. Oh, ist sie überhaupt noch offen? Und bekomme ich da überhaupt frischen Fisch? Oder, aus aktuellen, epidemiologischen Gründen: Wann sind am wenigsten Leute in meiner Migros-Filiale?"
      >
        <Copy>
          Noch kurz in die Migros. Oh, ist sie überhaupt noch offen? Und bekomme ich da überhaupt frischen Fisch? Oder, aus
          aktuellen, epidemiologischen Gründen: Wann sind am wenigsten Leute in meiner Migros-Filiale?
        </Copy>
        <Copy>
          Fragen, die wir wohl alle kennen. Abhilfe schafft der Filialfinder der Migros. Egal ob am Smartphone oder an einem
          grösseren Bildschirm — der Filialfinder weiss, wann welche Filiale geöffnet hat und welches Angebot sie führt.
        </Copy>
        <LinkList links={[{ label: 'Zum Filialfinder', href: 'https://filialen.migros.ch/de' }]} />
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <Image
              src={images.supermarkt}
              alt="Migros Supermarkt auf dem Land von aussen"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              src={images.takeaway}
              alt="Ein Migros Take-Away Stand"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </Section>
        <Section>
          <Keyfigure
            background="apricot"
            image={<Image src={images.filialfinder} alt="User Interface" height="1000" width="703" objectFit="contain" />}
          >
            <UnorderedList
              title="Insights"
              items={[
                'Mehr als 1000 Filialen aggregiert aus 3 unterschiedlichen Datensystemen',
                'Suche in < 0.2 Sekunden',
                'Über 33 Filtermöglichkeiten in 3 Sprachen',
                '5 angebundene APIs',
              ]}
              markerColor="cornflower"
            />
          </Keyfigure>
        </Section>

        <Section>
          <Image
            src={images.flughafen}
            alt="Migros Filiale am Flughafen Zürich"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>

        <Section>
          <Heading3>Aggregation und Vereinheitlichung im Backend</Heading3>
          <Copy>
            Um die Daten und Suchabfragen zu optimieren werden die Filialdaten über eine performante Web-Schnittstelle,
            basierend auf Elasticsearch und Node.js, ausgeliefert.
          </Copy>
          <Copy>
            Die Schnittstelle aggregiert und vereinheitlicht Filialdaten aus dem SAP, der Migros-API und weiteren
            Drittsystemen. Alle relevanten Informationen einer Filiale sind dadurch durchsuchbar und die Resultate können
            effizient über eine JSON REST Schnittstelle ausgespielt werden. Um die Latenz der Schnittstelle zu verringern
            wird die API über Varnish gecached und ausgeliefert.
          </Copy>
        </Section>
        <Section>
          <Testimonial background="mint" blobs={BlobVariations.mint[1]} quote={quote} />
        </Section>

        <Section>
          <div>
            <Heading3>State-of-the-Art Architektur</Heading3>
            <Copy>
              Durch eine stabile Architektur ist die Skalier-, und Verfügbarkeit der Applikation gewährleistet und einfach
              erweiterbar. Zusätzliche Drittsysteme können problemlos in die Anwendung eingebunden werden.
            </Copy>
          </div>
        </Section>
        <Section>
          <Contact contact={contact} />
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
  const teasers = getRandomTeasers(3, Teasers.filialfinder.title);
  const contact = await getEmployeeByName('Moreno Feltscher');

  return {
    props: {
      images,
      teasers,
      contact,
      quote: Quotes['coco-fil'],
    },
  };
};

export default Filialfinder;
