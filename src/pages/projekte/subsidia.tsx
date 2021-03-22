import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Testimonial } from '../../components/testimonial';
import { Contact } from '../../compositions/contact';
import { ContentCard } from '../../compositions/content-card';
import { ImageCard } from '../../compositions/image-card';
import { LinkList } from '../../compositions/link-list';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { TextBlock } from '../../compositions/text-block';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import Packages, { Package } from '../../data/packages';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Award, Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Clock } from '../../elements/icons';
import { Grid } from '../../layouts/grid';
import { GridSlider } from '../../layouts/grid-slider';
import { BlobVariations } from '../../utils/blob-variations';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  awards: Award[];
  teasers: Teaser[];
  packages: Package[];
};

const Subsidia: NextPage<Props> = ({ quote, contact, awards, teasers, packages }) => (
  <div>
    <PageHeader
      awards={awards}
      markdownTitle="Subsidia macht den Einzelhandel der Modebranche _mobil_."
      description="Subsidia digitalisiert mit innovativen und modernen Apps den Einzelhandel in der Modebranche. Die wichtigste App ist
      dabei die Kassen-App, die auf jedem Smartphone läuft. Wir begleiten Subsidia seit den Anfängen, egal ob bei der
      Architekturwahl für die Apps, Setup der Cloud-Umgebung mit Google oder sogar beim Teamaufbau."
    >
      <Copy>
        Subsidia digitalisiert mit innovativen und modernen Apps den Einzelhandel in der Modebranche. Die wichtigste App ist
        dabei die Kassen-App, die auf jedem Smartphone läuft. Wir begleiten Subsidia seit den Anfängen, egal ob bei der
        Architekturwahl für die Apps, Setup der Cloud-Umgebung mit Google oder sogar beim Teamaufbau.
      </Copy>
      <LinkList links={[{ label: 'Zur Website', href: 'https://subsidia.ch/' }]} />
    </PageHeader>

    <main>
      <PageSection>
        <Image
          className="rounded bg-mint-200"
          src="/images/projekte/subsidia/pwa-etikett-scan.png"
          alt="Verkäuferin scannt Etikett eines Kleidungsstücks mit dem Smartphone"
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </PageSection>
      <PageSection title="Auf einen Blick">
        <Grid cols={3}>
          <TextBlock title="POC in drei Wochen">
            Am Anfang war die Hypothese: wir können ein Kassensystem als WebApp entwickeln, weil PWA als Technologie schon
            genug weit ist. Das mussten wir aber zuerst beweisen. Innert drei Wochen haben wir mit einem Proof Of Concept
            gezeigt, dass die App problemlos mit Belegdruckern und SIX Zahlungsterminals arbeiten kann. Das unsere WebApp das
            Smartphone mir nichts, dir nichts zu einem Barcode-Scanner verwandelt verkam dabei schon fast zur Nebensache.
          </TextBlock>
          <TextBlock title="MVP nach vier Monaten">
            In vier Monaten haben wir gemeinsam mit dem Team von Subsidia einen MVP gezaubert, der in einer echten Boutique
            verwendet werden konnte. Einkäufe, Retouren und Rabatte waren ein leichtes. Schichten eröffnen und Schichten
            abschliessen funktionierte locker. Die Kassen-App war aber nicht alles. Dazu gab es ein wiederverwendbares Design
            System für zukünftige Apps. Und ein skalierbares Google Cloud Setup auf Kubernetes. In. vier. Monaten! 🚀
          </TextBlock>
          <TextBlock title="Erster Kunde nach 9 Monaten">
            Die Kassen-App wurde durch weitere Funktionen ergänz. Neue Apps wurden entwickelt, so eine App für die
            Warenabwicklung oder die Lagerverwaltung. Alles schön auf die jeweiligen Benutzer abgestimmt. Nach nur neun
            Monaten war das Ökosystem so weit, dass neue Kunden auf das System losgelassen werden konnten. Und das wunschlos
            glücklich.
          </TextBlock>
        </Grid>
      </PageSection>
      <PageSection title="Wie entwickelt man ein modernes Kassensystem?">
        <Copy>
          Mit welchen Technolgien soll ein Kassen- und Warenwirtschaftssystem heute entwickelt werden? Welche Technologien
          bringen welche Chancen und Risiken mit sich? Wo soll der Code gehostet und wie sollen Deployments automatisiert
          werden? Mit unserer Erfahrung konnten wir Subsidia in der Wahl eines idealen und zukunfsorientierten
          Technologie-Stacks unterstützen. Alles was unsicher war, haben wir mit einem Proof of Concept untermauert. Die
          Investitionssumme wird so zielgerichtet eingesetzt.
        </Copy>
        <Copy>
          Mobile Android und iOS-Devices verfügen mit Chrome und Safari über moderne Browser. So lässt sich das Kassensystem
          komplett im Browser entwickeln: Die Kamera liest den Barcode, das angeschlossene Six Payment Terminal übernimmt die
          Zahlung, der Kassendrucker das Drucken der Quittung. Und sollte das WLAN einmal nicht erreichbar sein, funktioniert
          alles auch komplett Offline. Was bis vor kurzem nur mit nativen iOS oder Android Apps möglich war, kann heute mit
          dem Browser umgesetzt werden. Das Resultat: Schneller und günstiger entwickelt sowie einfacher wartbar.
        </Copy>
        <Grid cols={2}>
          <Image
            className="rounded bg-mint-200"
            src="/images/projekte/subsidia/subsidia-pos-screen.png"
            alt="Eine Hand die ein Smartphone mit der Subsidia Kassen-App hält"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
          <Image
            className="rounded bg-mint-200"
            src="/images/projekte/subsidia/verkauf-an-stationaerer-kasse.png"
            alt="Verkaufsberater an einer stationären Kasse hinter einem Bildschirm"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
        </Grid>
        <TextBlock title="Alles in der Cloud">
          Für Subsidia haben wir eine Umgebung aufgesetzt, die agiles Arbeiten einfach macht. Dabei setzen wir auf Continuous
          Integration mit GitLab, Docker und Kubernetes. Alles läuft in der Google Cloud Platform. Pro Feature wird
          automatisiert eine Vorschau-Umgebung erstellt. Somit haben alle Zugriff auf die neuesten Funktionen. Vom
          Projektleiter über den Designer bis hin zum Entwickler wird die Kommunikation vereinfacht. Schnelles Vorwärtskommen
          ist garantiert.
        </TextBlock>
      </PageSection>
      <PageSection>
        <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
      </PageSection>
      <PageSection>
        <Contact contact={contact}>
          Auch heute unterstützt {contact.firstname} Subsidia noch.
          <br /> Du willst mehr wissen? Melde dich bei ihm.
        </Contact>
      </PageSection>
      <PageSection title="Du willst mehr wissen? Das haben wir mit Subsidia gemacht:">
        <GridSlider>
          {packages.map((paeckli) => (
            <ContentCard
              key={paeckli.title}
              {...paeckli}
              label={
                <>
                  <Clock className="h-4 w-4 mr-2 inline" />
                  {paeckli.label}
                </>
              }
            />
          ))}
        </GridSlider>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const packages = [Packages['ideation-sprint'], Packages['speedboat'], Packages['scale-up'], Packages['solution-review']];

  return {
    props: {
      packages,
      teasers: getRandomTeasers(3, Teasers.subsidia.title),
      contact: Employees.dominique,
      quote: Quotes['diego-subsidia'],
      awards: Teasers.subsidia.awards,
    },
  };
};

export default Subsidia;
