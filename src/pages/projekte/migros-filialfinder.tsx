import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { PositionX, PositionY } from '../../components/blob';
import { Keyfigure } from '../../components/keyfigure';
import { Testimonial } from '../../components/testimonial';
import { Contact } from '../../compositions/contact';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
import { Grid } from '../../layouts/grid';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Filialfinder: NextPage<Props> = ({ quote, contact, teasers }) => {
  return (
    <div>
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
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/projekte/fil/supermarkt-aussen.jpg"
              alt="Migros Supermarkt auf dem Land von aussen"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded"
              src="/images/projekte/fil/migros-take-away.jpg"
              alt="Ein Migros Take-Away Stand"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Keyfigure
            background="apricot"
            image={
              <Image src="/images/projekte/fil/filialfinder-frontend.png" height="1000" width="703" objectFit="contain" />
            }
          >
            <UnorderedList
              title="Insights"
              items={[
                'Mehr als 1000 Filialen aggregiert aus 3 unterschiedlichen Datensystemen',
                'Suche in < 0.2 Sekunden',
                'Über 33 Filtermöglichkeiten in 3 Sprachen',
                '5 angebundene APIs',
              ]}
            />
          </Keyfigure>
        </PageSection>

        <PageSection>
          <Image
            className="rounded"
            src="/images/projekte/fil/migros-filiale-zuerich-airport.jpg"
            alt="Migros Filiale am Flughafen Zürich"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </PageSection>

        <PageSection>
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
        </PageSection>
        <PageSection>
          <Testimonial
            background="mint"
            blobs={[
              { positionX: PositionX.right, positionY: PositionY.bottom, color: 'apricot' },
              { positionX: PositionX.right, positionY: PositionY.bottom, color: 'cornflower' },
              { positionX: PositionX.left, positionY: PositionY.top, color: 'apricot' },
              { positionX: PositionX.left, positionY: PositionY.bottom, color: 'apricot' },
              { positionX: PositionX.left, positionY: PositionY.bottom, color: 'cornflower' },
            ]}
            quote={quote}
          />
        </PageSection>

        <PageSection>
          <div>
            <Heading3>State-of-the-Art Architektur</Heading3>
            <Copy>
              Durch eine stabile Architektur ist die Skalier-, und Verfügbarkeit der Applikation gewährleistet und einfach
              erweiterbar. Zusätzliche Drittsysteme können problemlos in die Anwendung eingebunden werden.
            </Copy>
          </div>
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
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      teasers: getRandomTeasers(3, Teasers.filialfinder.title),
      quote: Quotes['coco-fil'],
      contact: Employees.moreno,
    },
  };
};

export default Filialfinder;
