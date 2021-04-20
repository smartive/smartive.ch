import { BlobVariations, Copy, Grid, Heading3, Keyfigure, PageSection, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Contact } from '../../components/contact';
import { ImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Award, Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  awards: Award[];
  teasers: Teaser[];
};

const SupplyChain: NextPage<Props> = ({ quote, contact, awards, teasers }) => (
  <Page>
    <PageHeader
      awards={awards}
      markdownTitle="_Digitalisierung_ der Lieferkette."
      description="Als grösste Detailhändlerin der Schweiz ist die Migros auf reibungslose Prozesse in der Lieferkette angewiesen. Bestellungen bei externen Zulieferern sollen möglichst effizient abgewickelt und in die eigene Warenbewirtschaftung eingepflegt werden können."
    >
      <Copy>
        Als grösste Detailhändlerin der Schweiz ist die Migros auf reibungslose Prozesse in der Lieferkette angewiesen.
        Bestellungen bei externen Zulieferern sollen möglichst effizient abgewickelt und in die eigene Warenbewirtschaftung
        eingepflegt werden können.
      </Copy>
    </PageHeader>

    <main>
      <PageSection>
        <Image
          className="rounded bg-mint-200"
          src="/images/projekte/supply-chain/man_mit_heber.jpg"
          alt="Ein Mann transportiert Boxen in einem Lager"
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </PageSection>
      <PageSection>
        <Keyfigure
          background="apricot"
          image={
            <Image src="/images/projekte/supply-chain/smartive-phone.png" height="566" width="275" objectFit="contain" />
          }
        >
          <UnorderedList
            title="Kurz und knackig"
            items={[
              'Digitalisierung der Lieferkette führt zu Prozessoptimierung mit hohen Einsparungen (über 700 Personentage).',
              'In 3 Monaten von der Idee zum MVP',
              'Auslieferung neuer Features erfolgt schnell, einfach und unabhängig von Herstellern.',
              'Durch Automatisierung der Prozesse ist die Datenqualität höher, was weitere Optimierung der Prozesse ermöglicht.',
            ]}
            markerColor="cornflower"
          />
        </Keyfigure>
      </PageSection>

      <PageSection title="Zweimal so schnell — und das zweimal.">
        <Copy>
          Das Herzstück ist eine Progressive Web App – kurz PWA. Mit der Smartphone-Kamera wird der weltweit eindeutige
          Barcode (GS1-128) einer Kiste gescannt, die auf dem Display gezeigten Waren eingefüllt und abgehakt. Die Zuordnung
          (welche Menge wovon befindet sich wo?) passiert im Hintergrund.
        </Copy>
        <Copy>
          Ein Testlauf zeigte riesiges Potenzial: Der Versand konnte doppelt so schnell abgewickelt werden – aber auch bei
          der Migros, bei der die Ware eingeht, können Arbeitsschritte eingespart werden. Als Nächstes ist die Erweiterung
          auf fünf Lieferanten geplant, danach die Einführung in weiteren Genossenschaften der Migros.
        </Copy>

        <Grid cols={2}>
          <Image
            className="rounded bg-mint-200"
            src="/images/projekte/supply-chain/boxen-scan.jpg"
            alt="Ein Gebinde im Lager wird mit der neuen Supply Chain App auf einem Smartphone gescannt."
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
          <Image
            className="rounded bg-mint-200"
            src="/images/projekte/supply-chain/converter.jpg"
            alt="Ein Gebinde wird auf einem Laufband verarbeitet."
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
        </Grid>
        <Image
          className="rounded bg-mint-200"
          src="/images/projekte/supply-chain/gebaeude.jpg"
          alt="Migros Logistik Zentrum"
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </PageSection>
      <PageSection>
        <Heading3>Mehr Überblick, weniger Doppelspurigkeit</Heading3>
        <Copy>
          Die Migros Supply Chain App vereinfacht nicht nur die Verknüpfung von Daten und Warenkisten, sondern sorgt auch für
          einen optimalen Datenfluss.
        </Copy>
        <Copy>
          Einerseits weiss die Bestellerin (Migros) nun in jedem Moment, wo sich die Waren befinden, da sie einem Behälter
          zugewiesen sind. So hat sie den Überblick über den Logistikprozess: Was wird geliefert? Was ist bereit? Was ist
          unterwegs? Was kann nicht geliefert werden?
        </Copy>
        <Copy>
          Andererseits werden die Daten neu im von der Migros benötigten Format übermittelt (strukturierte Daten). Dadurch
          erübrigt sich eine erneute Erfassung der gelieferten Ware beim Eingang. Es ist bereits klar, welche Pakete an
          welche Filialen gehen. Doppelte Arbeiten werden eliminiert.
        </Copy>
      </PageSection>
      <PageSection>
        <Testimonial background="apricot" blobs={BlobVariations.apricot[0]} quote={quote} />
      </PageSection>
      <PageSection>
        <Contact contact={contact}>
          {contact.firstname} weiss so einiges über Supply Chain.
          <br /> Melde dich bei ihm, falls du mehr wissen möchtest.
        </Contact>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      teasers: getRandomTeasers(3, Teasers['supply-chain'].title),
      contact: Employees.peter,
      quote: Quotes['daniel-grai'],
      awards: Teasers['supply-chain'].awards,
    },
  };
};

export default SupplyChain;
