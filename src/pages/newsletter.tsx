import { Copy, Grid } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { Image } from '../components/image';
import { PageHeader } from '../compositions/page-header';
import { LandingPage } from '../layouts/landing-page';
import { Section } from '../layouts/section';

const NewsletterSubscription = dynamic(
  () => import('../components/newsletter-subscription').then((module) => module.NewsletterSubscription),
  { ssr: false }
);

const STATIC_IMAGES = {
  mittag: '/images/mood/YB_06742.jpg',
  terrasse: '/images/mood/code-retreat-terrasse.jpg',
  coderetreat: '/images/mood/code-retreat-lunch.jpg',
  dife: '/images/mood/robert-dife.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Newsletter: NextPage<Props> = ({ images }) => {
  return (
    <LandingPage>
      <PageHeader markdownTitle="Neugierig, was bei uns läuft?">
        <Copy>
          Du willst wissen, woran wir gerade arbeiten und was hinter den Kulissen passiert? Toll! Genau dafür haben wir einen
          Newsletter. Der Newsletter erscheint in lockeren Abständen und liefert dir einen Einblick in unsere aktuellen
          Projekte, digitale Trends und das smartive-Team.
        </Copy>
        <div className="sm:w-80">
          <NewsletterSubscription button="Abonnieren" />
        </div>
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.mittag}
            alt="smartive Team beim Mittagessen an einem Holztisch"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
          <Grid cols={2}>
            <Image
              src={images.terrasse}
              alt="smartive Team sitzt auf einer Bank mit blauem Himmel und Thunersee im Hintergrund"
              objectFit="cover"
              width={720}
              height={500}
            />
            <div className="hidden md:block md:col-start-2 md:row-span-2 relative">
              <Image
                src={images.coderetreat}
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                layout="responsive"
                width={720}
                height={1064}
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={images.mittag}
                alt="smartive Team am Mittagstisch beim Essen"
                objectFit="cover"
                width={720}
                height={500}
              />
            </div>
            <Image
              src={images.dife}
              alt="smartive Mitarbeiter hält einen Vortrag vor mehreren Leuten"
              objectFit="cover"
              width={720}
              height={500}
            />
          </Grid>
        </Section>
      </main>
    </LandingPage>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = STATIC_IMAGES;
  return {
    props: {
      images,
    },
  };
};

export default Newsletter;
