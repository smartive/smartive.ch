import { BlobVariations, Copy, Grid, PageSection, TextBlock, TextLink } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import React from 'react';
import { NextContentCard } from '../../components/content-card';
import { Testimonial } from '../../components/testimonial';
import { PageHeader } from '../../compositions/page-header';
import TextBlocks from '../../data/benefits.json';
import Employees from '../../data/employees.json';
import { Quote, transformQuote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { PlaceholderImage } from '../../elements/placeholder-image';
import { Page } from '../../layouts/page';
import { getPlaceholders, PlaceholderImages } from '../../utils/image-placeholders';

const STATIC_IMAGES = {
  dife: '/images/mood/dominique-lab-finger.jpg',
  mittag: '/images/mood/YB_06742.jpg',
  vortrag: '/images/mood/robert-dife-close-up.jpg',
  coderetreat: '/images/mood/code-retreat-hackday.jpg',
  aescher: '/images/mood/aescher-gruppenbild.jpg',
  terrasse: '/images/mood/code-retreat-terrasse.jpg',
  fussball: '/images/mood/code-retreat-fussball.jpg',
  essen: '/images/mood/code-retreat-lunch.jpg',
} as const;

type Props = {
  images: PlaceholderImages<typeof STATIC_IMAGES>;
  quote: Quote;
};

const Agentur: NextPage<Props> = ({ quote, images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Wir sind _smartive_. Wir stehen für digitale Lösungen und eine bizli andere Firmenkultur."
        description="Wir wollen einen Ort schaffen, an dem wir nicht nur arbeiten, sondern auch Freundschaft und Freiheit leben. Mit Platz für verschiedene Persönlichkeiten, Interessen und Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres Potenzials."
      >
        <Copy>
          Chefgehabe ist uns so fremd wie komplexe Hierarchien und Gärtchendenken. Herausforderungen werden gemeinsam
          angegangen, Probleme offen angesprochen und gelöst. Wir wollen einen Ort schaffen, an dem wir nicht nur arbeiten,
          sondern auch Freundschaft und Freiheit leben. Mit Platz für verschiedene Persönlichkeiten, Interessen und
          Entwicklung. Dies ermöglicht uns die volle Entfaltung unseres Potenzials.
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={2}>
            <PlaceholderImage
              image={images.dife}
              alt="smartive Mitarbeiter mit einem Schild auf dem smartive beworben wird"
              objectFit="cover"
              width={720}
              height={380}
            />
            <div className="hidden md:block md:col-start-2 md:row-span-2 relative">
              <PlaceholderImage
                image={images.mittag}
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="block md:hidden">
              <PlaceholderImage
                image={images.mittag}
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                width={720}
                height={500}
              />
            </div>
            <PlaceholderImage
              image={images.vortrag}
              alt="smartive Mitarbeiter hält einen Vortrag vor mehreren Leuten"
              objectFit="cover"
              width={720}
              height={500}
            />
          </Grid>
          <Grid cols={3}>
            {TextBlocks.map(({ title, content }) => (
              <TextBlock key={title} title={title}>
                {content}
              </TextBlock>
            ))}
          </Grid>
          <Testimonial background="cornflower" blobs={BlobVariations.cornflower[0]} quote={quote} />
          <Grid cols={2}>
            <PlaceholderImage
              image={images.coderetreat}
              alt="smartive Team am arbeiten an einem Tisch im freien mit dem Valle Verzasca im Hintergrund"
              objectFit="cover"
              width={720}
              height={380}
            />
            <PlaceholderImage
              image={images.aescher}
              alt="smartive Team bei einer Wanderung mit dem Gasthaus Aescher-Wildkirchli im Hintergrund"
              objectFit="cover"
              width={720}
              height={380}
            />
            <PlaceholderImage
              image={images.terrasse}
              alt="smartive Team sitzt auf einer Bank mit blauem Himmel und Thunersee im Hintergrund"
              objectFit="cover"
              width={720}
              height={500}
            />
            <PlaceholderImage
              image={images.fussball}
              alt="smartive Team beim Fussballspielen auf einer grünen Wiese"
              objectFit="cover"
              width={720}
              height={380}
            />
            <div className="md:col-span-2">
              <PlaceholderImage
                image={images.essen}
                alt="smartive Team beim Mittagessen im Freien"
                objectFit="cover"
                width={1504}
                height={800}
              />
            </div>
          </Grid>

          <Grid cols={2}>
            <TextBlock title="Fast eine Dekade" number={9}>
              smartive wurde 2012 gegründet. Die Firma ist gewachsen, die Kernidee geblieben: Ein Ort, an dem wir uns alle
              einbringen und so arbeiten, wie es uns entspricht.
            </TextBlock>
            <TextBlock title="Vierzehn Teilhaber*innen" number={14} highlightNumber>
              Darauf sind wir stolz: Vierzehn unserer {Object.values(Employees).length} Mitarbeitenden besitzen
              smartive-Aktien. Es gibt keine externen Aktionärinnen oder Stakeholder.
            </TextBlock>
            <TextBlock title="Persönlichkeiten" number={Object.values(Employees).length}>
              Heute kommen {Object.values(Employees).length} Mitarbeitende in Zürich zusammen und bringen ihre Fähigkeiten
              und ihre Persönlichkeit ein – in Software-Entwicklung, Projektleitung, Design und User Experience.
            </TextBlock>
            <NextContentCard
              label="Schatztruhe 💎"
              title="Adventskalender"
              content="Zum Advent öffnen wir unsere Schatztruhe. Hinter den 24 Türchen verraten unsere smarties ihre Lieblingstools."
              background="mint"
              link={{
                label: 'Zum Adventskalender',
                href: 'https://advent.smartive.ch',
                newTab: true,
              }}
            />
            <TextBlock title="Erfolgreiche Projekte: dreistellig" number={300}>
              In den letzten Jahren haben wir über 300 Projekte erfolgreich gemeistert. Sowohl in Zusammenarbeit mit{' '}
              <NextLink href="/projekte/subsidia" passHref>
                <TextLink href="/projekte/subsidia">Start-Ups</TextLink>
              </NextLink>{' '}
              als auch mit der{' '}
              <NextLink href="/projekte/migipedia/" passHref>
                <TextLink href="/projekte/migipedia/">grössten Arbeitgeberin der Schweiz</TextLink>
              </NextLink>
              .
            </TextBlock>
            <TextBlock title="Aufsteiger des Jahres" number={10}>
              Unsere Projekte werden regelmässig ausgezeichnet. Bei den Best of Swiss Web Awards rangieren wir in den Top 10
              der vergangenen 5 Jahre.
            </TextBlock>
          </Grid>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await getPlaceholders(STATIC_IMAGES);
  return {
    props: {
      images,
      quote: await transformQuote(Quotes['dominique-kultur']),
    },
  };
};

export default Agentur;
