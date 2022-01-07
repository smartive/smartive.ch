import { BlobVariations, Copy, Grid, Heading3, LinkList, TextBlock } from '@smartive/guetzli';
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
import { Section } from '../../layouts/section';
import { getPlaceholders, PlaceholderImages } from '../../utils/image-placeholders';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  supermarkt: '/images/projekte/msrc/supermarkt-3.jpg',
} as const;

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const SharedComponents: NextPage<Props> = ({ quote, contact, teasers, images }) => (
  <Page>
    <PageHeader
      markdownTitle="Wiederverwendbare Komponenten für die _ganze_ Migros."
      description="Um eine einheitliche Benutzeroberfläche über die diversen Migros Plattformen sicherstellen zu können, wurden in Zusammenarbeit mit weiteren Migros Partneragenturen die Shared Components ins Leben gerufen."
    >
      <Copy>
        Um eine einheitliche Benutzeroberfläche über die diversen Migros Plattformen sicherstellen zu können, wurden in
        Zusammenarbeit mit weiteren Migros Partneragenturen die Shared Components ins Leben gerufen.
      </Copy>
      <Copy>
        Einzelne Module werden in einer gemeinsamen Registry abgelegt und können so einfach wiederverwendet werden und bieten
        dennoch ein einheitliches Benutzererlebnis.
      </Copy>
      <LinkList links={[{ label: 'Zur Website', href: 'https://migros.ch' }]} />
    </PageHeader>

    <main>
      <Section>
        <PlaceholderImage
          image={images.supermarkt}
          alt="Gemüseabteilung in einem Migros Supermarkt"
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </Section>

      <Section>
        <Heading3>Atomic Design</Heading3>
        <Copy>
          Die Shared Components sind an das Atomic Design angelehnt. Sie werden in drei Hierarchiestufen (Atome, Moleküle und
          Organismen) unterteilt und sind von Natur aus einfach wiederverwendbar. Ein Button wird beispielsweise nur einmal
          als Atom erstellt, und wird dann an allen Orten wiederverwendet. Dadurch wird ein einheitliches Look-And-Feel
          erreicht, auch wenn die Komponenten auf unterschiedlichen Seiten eingebunden werden.
        </Copy>
        <Copy>
          Mit JavaScript und Benutzerkontext werden die Komponenten erweitert und als interaktive Widgets inklusive Single
          Sign-on zur Verfügung gestellt.
        </Copy>
      </Section>
      <Section>
        <Testimonial background="apricot" blobs={BlobVariations.apricot[2]} quote={quote} />
      </Section>
      <Section>
        <Grid cols={3}>
          <TextBlock title="Automatisiertes Testing">
            Die Module werden mit Jasmine, Chai und PhantomJS automatisiert und ausführlich getestet. Mittels Unit,
            Functional und Regression Tests kann so die erwartete Funktionsweise der Module sichergestellt, und Fehler in der
            Zukunft verhindert werden.
          </TextBlock>
          <div>
            <Heading3>Optimierte Builds</Heading3>
            <Copy>
              Webpack stellt sicher, dass nur die auf der Seite wirklich benötigten Komponenten, Bilder und Skripts
              ausgeliefert werden und minimiert somit die Grösse der zu ladenden CSS und JS Dateien massiv.
            </Copy>
            <Copy>
              Mit dem Tree-shaking genannten Algorithmus von Webpack konnte in diesem Fall die Grösse der geladenen Skripte
              auf einer Seite um bis zu 56% reduziert werden.
            </Copy>
            <Copy>
              Die Module werden in fachspezifische Pakete gekapselt und via npm in einer Registry publiziert, sodass sie
              einfach wiederverwendet werden können.
            </Copy>
          </div>
          <TextBlock title="Essentielle Dokumentation">
            In einem heterogenen Umfeld mit diversen Entwicklungspartnern und Technologien ist die Dokumentation essentiell.
            Dank einigen massgeschneiderten Webpack Loadern und Buildscripts kann diese automatisch aus JS Docs und
            Handlebars Templates generiert werden und ist dadurch immer aktuell. In der Dokumentation stehen die Module auch
            zur Vorschau zur Verfügung.
          </TextBlock>
        </Grid>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await getPlaceholders(STATIC_IMAGES);
  const teasers = await Promise.all(
    getRandomTeasers(3, Teasers.filialfinder.title).map(async (teaser) => await transformTeaser(teaser))
  );
  return {
    props: {
      images,
      teasers,
      contact: await transformEmployee(Employees.thilo),
      quote: await transformQuote(Quotes['coco-msrc']),
    },
  };
};

export default SharedComponents;
