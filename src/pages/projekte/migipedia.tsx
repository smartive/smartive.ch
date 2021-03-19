import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Keyfigure } from '../../components/keyfigure';
import { Testimonial } from '../../components/testimonial';
import { Contact } from '../../compositions/contact';
import { ImageCard } from '../../compositions/image-card';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { TextBlock } from '../../compositions/text-block';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Award, Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../elements/copy';
import { Link } from '../../elements/link';
import { Grid } from '../../layouts/grid';
import { BlobVariations } from '../../utils/blob-variations';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  awards: Award[];
};

const Migipedia: NextPage<Props> = ({ quote, contact, teasers, awards }) => {
  return (
    <div>
      <PageHeader
        markdownTitle="Migipedia – _10 Jahre_ User im Mittelpunkt."
        description="Migipedia.ch ist seit 10 Jahren fester Bestandteil des digitalen Marketings der Migros und schafft Werte für Kundinnen und Kunden sowie fürs Unternehmen. Gemeinsam mit der Migros entwickelten wir eine komplett neue Lösung. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor."
        awards={awards}
      >
        <Copy>
          Seit 2010 ist die Migros-Community online, seit 2014 begleitet smartive die Migros bei der Weiterentwicklung. Die
          Ansprüche der User an die Plattform haben sich in dieser Zeit immer wieder verändert. Der Migipedia-Relaunch von
          2020 trägt dem einmal mehr Rechnung. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <Image
              className="rounded"
              src="/images/projekte/migipedia/RGB_04_kitchen_012.jpg"
              alt="Frau in orangem Pullover isst Joghurt"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              className="rounded"
              src="/images/projekte/migipedia/RGB_01_diskutieren_007.jpg"
              alt="Eine Frau und ein Mann betrachten etwas auf einem Smartphone"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </PageSection>
        <PageSection>
          <Keyfigure
            image={
              <Image src="/images/projekte/migipedia/smartive-phone.png" height="566" width="275" objectFit="contain" />
            }
          >
            <UnorderedList
              title="Migipedia auf einen Blick"
              items={[
                'Auf elf digitalen Touchpoints präsent',
                '120 000 aktiven Nutzer*innen',
                '300 000 Bewertungen verfasst',
                '105 Mio. Mal Bewertungen abgerufen in einem Jahr',
                '60% mehr Bewertungen im Vergleich zum Vorjahr',
                'Reduzierung der Betriebskosten um über 90% durch die Ablösung der bisherigen SaaS-Lösung',
              ]}
              markerColor="apricot"
            />
          </Keyfigure>
        </PageSection>
        <PageSection>
          <Image
            className="rounded"
            src="/images/projekte/migipedia/RGB_05_couch_010.jpg"
            alt="Eine Frau sitzt mit ihrem Sohn im Wohnzimmer. Sie sortieren Migros Mania Sammelelemente."
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </PageSection>
        <PageSection>
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Migipedia.ch verbindet Nutzen für Nutzer*innen mit Mehwert für die Migros. Sie ist seit zehn Jahren fester
              Bestandteil des digitalen Marketings der Migros. Die Community soll attraktiver werden und zu mehr
              User-Interaktionen führen. Sie soll nicht mehr nur auf Migipedia leben, sondern auf vielen weiteren digitalen
              Touchpoints präsent sein.
            </TextBlock>
            <TextBlock title="Unsere Lösung">
              Mit der Migros zusammen haben wir Migipedia von einer Plattform zum modularen Community-Service
              weiterenwickelt. Modernste Web-Technik, personalisierten Empfehlungen sowie komplett überarbeitete UX und UI
              bringen ein App-Feeling ins Web. Bewertungen und Fragen erstrecken sich auf zehn weitere Touchpoints wie die
              Migros App oder melectronics.ch. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor.
            </TextBlock>
          </Grid>
          <Testimonial background="apricot" blobs={BlobVariations.apricot[0]} quote={quote} />
        </PageSection>
        <PageSection title="Wie wir der Migros geholfen haben">
          <Grid cols={2}>
            <TextBlock title="Von der Plattform zum Community-Service">
              Eine Frage zu einem Rezept auf Migusto stellen, einen Einkauf auf SportXX bewerten, eine Produktfrage in der
              Migros-App beantworten, an einem Produkttest auf Migros.ch teilnehmen und im Forum auf Migipedia mitdiskutieren
              – Die Migros-Community ist da, wo die User sind, auf elf unterschiedlichen digitalen Touchpoints der Migros.
              Möglich macht diese Modularisierung <Link href="https://www.reactions.dev">Reactions</Link>, unsere
              Community-Lösung.
            </TextBlock>
            <TextBlock title="Eine App im Web">
              Was, wenn Migipedia eine App wäre? Beinah 80% der Nutzer*innen besuchen Migipedia mit einem Smartphone. Mit dem
              Relaunch von 2020 geht Migipedia einen Schritt weiter als datensparenden Bildgrössen und grosse Touchflächen:
              Aus Apps bekannte UX-Konzepte wie Slider, Client-Side Transition mit Prefethcing und Micro-Interactions machen
              Migipedia zu einer App im Web. Persönlichen Empfehlungen durch Recommender runden das Erlebnis ab.
            </TextBlock>
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
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      teasers: getRandomTeasers(3, Teasers.migipedia.title),
      quote: Quotes['philipp-migipedia'],
      contact: Employees.thomas,
      awards: Teasers.migipedia.awards,
    },
  };
};

export default Migipedia;
