import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { BlobColor, PositionX, PositionY } from '../../components/blob';
import { Glance } from '../../components/glance';
import { Testimonial } from '../../components/testimonial';
import { Contact } from '../../compositions/contact';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Award } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Heading3 } from '../../elements/heading-3';
import { Grid } from '../../layouts/grid';

type Props = {
  quote: Quote;
  contact: Employee;
  awards: Award[];
};

const SupplyChain: NextPage<Props> = ({ quote, contact, awards }) => (
  <div>
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
          className="rounded"
          src="/images/projekte/supply-chain/man_mit_heber.jpg"
          alt="Ein Mann transportiert Boxen in einem Lager"
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </PageSection>
      <PageSection>
        <Glance image={<Image src="/images/smartive-phone.png" height="566" width="275" objectFit="contain" />}>
          <UnorderedList
            title="Kurz und knackig"
            items={[
              'Digitalisierung der Lieferkette führt zu Prozessoptimierung mit hohen Einsparungen (über 700 Personentage).',
              'In 3 Monaten von der Idee zum MVP',
              'Auslieferung neuer Features erfolgt schnell, einfach und unabhängig von Herstellern.',
              'Durch Automatisierung der Prozesse ist die Datenqualität höher, was weitere Optimierung der Prozesse ermöglicht.',
            ]}
          />
        </Glance>
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
            className="rounded"
            src="/images/projekte/supply-chain/boxen-scan.jpg"
            alt="Ein Gebinde im Lager wird mit der neuen Supply Chain App auf einem Smartphone gescannt."
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
          <Image
            className="rounded"
            src="/images/projekte/supply-chain/converter.jpg"
            alt="Ein Gebinde wird auf einem Laufband verarbeitet."
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
        </Grid>
        <Image
          className="rounded"
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
        <Testimonial
          background="bg-apricot-500"
          blobs={[
            { positionX: PositionX.right, positionY: PositionY.top, color: BlobColor.cornflower },
            { positionX: PositionX.right, positionY: PositionY.top, color: BlobColor.mint },
            { positionX: PositionX.left, positionY: PositionY.top, color: BlobColor.cornflower },
            { positionX: PositionX.left, positionY: PositionY.bottom, color: BlobColor.cornflower },
            { positionX: PositionX.left, positionY: PositionY.bottom, color: BlobColor.mint },
          ]}
          quote={quote}
        />
      </PageSection>
      <PageSection>
        <Contact contact={contact}>
          {contact.firstname} unterstützt Subsidia auch heute noch.
          <br /> Melde dich bei ihm, falls du mehr wissen möchtest.
        </Contact>
      </PageSection>
    </main>
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      contact: Employees.peter,
      quote: Quotes['daniel-grai'],
      awards: Teasers['supply-chain'].awards,
    },
  };
};

export default SupplyChain;
