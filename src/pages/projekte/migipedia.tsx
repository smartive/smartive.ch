import { BlobVariations, Copy, Grid, Keyfigure, LinkList, TextBlock, TextLink, UnorderedList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Contact } from '../../components/contact';
import { Image } from '../../components/image';
import { NextImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import { Employee, getEmployeeByName } from '../../data/employees';

import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Award, Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getRandomTeasers } from '../../utils/teasers';

const STATIC_IMAGES = {
  kitchen: '/images/projekte/migipedia/RGB_04_kitchen_012.jpg',
  diskutieren: '/images/projekte/migipedia/RGB_01_diskutieren_007.jpg',
  phone: '/images/projekte/migipedia/smartive-phone.png',
  couch: '/images/projekte/migipedia/RGB_05_couch_010.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
  awards: Award[];
};

const Migipedia: NextPage<Props> = ({ quote, contact, teasers, awards, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Migipedia – _10 Jahre_ User im Mittelpunkt."
        description="Migipedia.ch ist seit 10 Jahren fester Bestandteil des digitalen Marketings der Migros und schafft Werte für Kund*innen sowie fürs Unternehmen. Gemeinsam mit der Migros entwickelten wir eine komplett neue Lösung. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor."
        tags={awards}
      >
        <Copy>
          Seit 2010 ist die Migros-Community online, seit 2014 begleitet smartive die Migros bei der Weiterentwicklung. Die
          Ansprüche der User an die Plattform haben sich in dieser Zeit immer wieder verändert. Der Migipedia-Relaunch von
          2020 trägt dem einmal mehr Rechnung. Mit Erfolg: Die Community ist heute so lebendig wie nie zuvor.
        </Copy>
        <LinkList
          links={[
            { label: 'Zu Migipedia', href: 'https://migipedia.migros.ch/de' },
            {
              label: 'Zum Jury-Urteil: Gold für Usability',
              href: 'https://www.netzwoche.ch/news/2021-09-06/gold-fuer-migros-community-in-der-kategorie-usability',
            },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <div className="relative w-full h-0 pb-[56.25%] rounded overflow-hidden">
            <iframe
              src="https://www.youtube-nocookie.com/embed/b9q9176Vy0s"
              className="absolute top-0 left-0 w-full h-full"
              title="10 Jahre Migipedia"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Section>

        <Section>
          <Grid cols={2}>
            <Image
              src={images.kitchen}
              alt="Frau in orangem Pullover isst Joghurt"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
            <Image
              src={images.diskutieren}
              alt="Eine Frau und ein Mann betrachten etwas auf einem Smartphone"
              priority
              objectFit="cover"
              width={720}
              height={383}
            />
          </Grid>
        </Section>
        <Section>
          <Keyfigure
            image={<Image src={images.phone} alt="Mobile User Interface" height="566" width="275" objectFit="contain" />}
          >
            <UnorderedList
              title="Migipedia auf einen Blick"
              items={[
                'Auf elf digitalen Touchpoints präsent',
                '120ʼ000 aktive Nutzer*innen',
                '300ʼ000 Bewertungen verfasst',
                '105 Mio. Bewertungen abgerufen in einem Jahr',
                '60% mehr Bewertungen im Vergleich zum Vorjahr',
                'Reduzierung der Betriebskosten um über 90% durch die Ablösung der bisherigen SaaS-Lösung',
              ]}
              markerColor="apricot"
            />
          </Keyfigure>
        </Section>
        <Section>
          <Image
            src={images.couch}
            alt="Eine Frau sitzt mit ihrem Sohn im Wohnzimmer. Sie sortieren Migros Mania Sammelelemente."
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
        </Section>
        <Section>
          <Grid cols={2}>
            <TextBlock title="Die Herausforderung">
              Migipedia.ch verbindet Nutzen für Nutzer*innen mit Mehrwert für die Migros. Sie ist seit zehn Jahren fester
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
        </Section>
        <Section title="Wie wir der Migros geholfen haben">
          <Grid cols={2}>
            <TextBlock title="Von der Plattform zum Community-Service">
              Eine Frage zu einem Rezept auf Migusto stellen, einen Einkauf auf SportXX bewerten, eine Produktfrage in der
              Migros-App beantworten, an einem Produkttest auf Migros.ch teilnehmen und im Forum auf Migipedia mitdiskutieren
              – Die Migros-Community ist da, wo die User sind, auf elf unterschiedlichen digitalen Touchpoints der Migros.
              Möglich macht diese Modularisierung <TextLink href="https://www.reactions.dev">Reactions</TextLink>, unsere
              Community-Lösung.
            </TextBlock>
            <TextBlock title="Eine App im Web">
              Was, wenn Migipedia eine App wäre? Beinahe 80% der Nutzer*innen besuchen Migipedia mit einem Smartphone. Mit
              dem Relaunch von 2020 geht Migipedia einen Schritt weiter als datensparenden Bildgrössen und grosse
              Touchflächen: Aus Apps bekannte UX-Konzepte wie Slider, Client-Side Transition mit Prefetching und
              Micro-Interactions machen Migipedia zu einer App im Web. Persönlichen Empfehlungen durch Recommender runden das
              Erlebnis ab.
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
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  const teasers = getRandomTeasers(3, Teasers.migipedia.title);
  const contact = await getEmployeeByName('Thomas Moser');

  return {
    props: {
      images,
      teasers,
      contact,
      quote: Quotes['philipp-migipedia'],
      awards: Teasers.migipedia.awards,
    },
  };
};

export default Migipedia;
