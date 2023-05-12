import { Copy, Grid, Heading2, Heading3, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import { LandingPage } from '../../layouts/landing-page';
import { Section } from '../../layouts/section';

const STATIC_IMAGES = {
  rocket: '/images/sg/smartive-lego-rocket.png',
  balloon: '/images/sg/christoph-balloon-head.png',
  church: '/images/sg/smartive-sg-church.png',
  kitchen: '/images/sg/smartive-sg-kitchen.png',
  plants: '/images/sg/smartive-sg-plants.png',
  plantsClose: '/images/sg/smartive-sg-plants-closeup.png',
  people: '/images/sg/smartive-sg-people.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Page: NextPage<Props> = ({ images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="smartive Office _St.Gallen_ – Scho no schö do"
        description="Komm vorbei an unserer Eröffnungsfeier am 6. Mai"
      >
        <Image
          src={images.balloon}
          alt="Hängende Grünpflanzen im Büro"
          priority
          variant={ImageVariant.FillContainer}
          width={2907}
          height={1647}
        />
      </PageHeader>

      <main>
        <Heading3>Gallt euch sankt, denn smartive ist jetzt in freut euch!</Heading3>
        <Copy>
          {' '}
          Gemeinsam mit euch haben wir unseren ersten zweiten Standort gebührend getauft, eingeweiht und gefeiert. Das war
          wirklich sehr schön.
        </Copy>
        <LinkList
          links={[
            { label: 'Zu den Fotos vom Eröffnungsfest 📸', href: '/sg/fotos' },
            { label: 'Zur Pressemitteilung', href: '/blog/hoi-st-gallen' },
            { label: 'Zum nächsten smartive Fest in Zürich', href: 'https://smr.tv/sommer' },
          ]}
        />
        <Section>
          <Grid cols={3}>
            <div className="col-span-2">
              <Image
                src={images.kitchen}
                alt="Küchentresen mit Siebträger Kaffeemaschine"
                priority
                variant={ImageVariant.FillContainer}
                width={2907}
                height={1647}
              />
            </div>
            <Image
              src={images.plants}
              alt="Hängende Grünpflanzen im Büro"
              priority
              variant={ImageVariant.FillContainer}
              width={2907}
              height={1647}
            />
          </Grid>
        </Section>

        <Section>
          <Heading2>Warum St.Gallen und warum nicht St-Saphorin-sur-Morges?</Heading2>
          <Copy>
            Weil wir nicht Französisch können, aber Digital unser zweiter Vorname ist. Und der halbte bis anderthalbte von
            Sankdi Gitallen. Passt also. Und natürlich liegt uns die Ostschweiz eh am Herzen – wie die hohe Mitarbeitenden-
            und Kundendichte zeigt. Ausserdem sind zwei Standorte einer mehr, um eine dynamische Arbeitskultur zu leben und
            in die Stube unserer Ostschweizer Kund*innen zu tragen.
          </Copy>
          <Image
            src={images.people}
            alt="smartive Mitarbeiter auf der Dachterasse in St.Gallen"
            priority
            variant={ImageVariant.FillContainer}
            width={1863}
            height={1239}
          />
          <Grid cols={2}>
            <Image
              src={images.rocket}
              alt="Lego Duplo Rakete mit smartive Logo"
              priority
              variant={ImageVariant.FillContainer}
              width={1863}
              height={1239}
            />
            <div className="row-span-2">
              <Image
                src={images.church}
                alt="St.Galler Dom (Kirche) in der Altstadt"
                priority
                variant={ImageVariant.FillContainer}
                width={1863}
                height={1239}
              />
            </div>
            <Image
              src={images.plantsClose}
              alt="Nahaufnahmen von Grünpflanzen im Büro"
              priority
              variant={ImageVariant.FillContainer}
              width={1863}
              height={1239}
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

export default Page;
