import { Button, Copy, Grid, Heading1, Heading2, Heading3, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import { Link } from '../../elements/link';
import { LandingPage } from '../../layouts/landing-page';
import { Section } from '../../layouts/section';

const STATIC_IMAGES = {
  rocket: '/images/sg/smartive-lego-rocket.png',
  church: '/images/sg/smartive-sg-church.png',
  kitchen: '/images/sg/smartive-sg-kitchen.png',
  plants: '/images/sg/smartive-sg-plants.png',
  plantsClose: '/images/sg/smartive-sg-plants-closeup.png',
  terrace: '/images/sg/smartive-sg-terrace.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Page: NextPage<Props> = ({ images }) => {
  return (
    <LandingPage>
      <PageHeader markdownTitle="smartive Office _St.Gallen_ – Scho no schö do" description="Das haben wir eingereicht">
        <div className="relative w-full h-0 pb-[56.25%] rounded overflow-hidden">
          <iframe
            src="https://www.youtube-nocookie.com/embed/LWZBuoO7_xM"
            className="absolute top-0 left-0 w-full h-full"
            title="Scho no schö do"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </PageHeader>

      <main>
        <Heading3>
          Gallt euch sankt, denn smartive ist jetzt in freut euch! Und wir gallen uns sehr. So sehr, dass wir für alle
          Besties und Bambini und natürlich für dich die Türen öffnen. Kommt und feiert mit uns bei Risotto und Riserva!
        </Heading3>
        <Copy>Samstag 6. Mai 2023, ab 14:00 Uhr bis 22:00 Uhr</Copy>
        <Copy>Multergasse 26, 9000 St.Gallen</Copy>
        <div className="flex">
          <Button as="a" href="https://smr.tv/opening-sg">
            Ich bin auch dabei!
          </Button>
          <div className="ml-8">
            <LinkList links={[{ label: 'Ich muss mich leider abmelden', href: 'https://smr.tv/opening-sg' }]} />
          </div>
        </div>
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
            src={images.terrace}
            alt="Gartentische auf der Dachterasse in St.Gallen"
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
