import { Copy, Grid, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

const STATIC_IMAGES = {
  flyer: '/images/projekte/frontify/210908_FRO2101_3766.jpg',
  meeting: '/images/projekte/frontify/210902_FRO2101_4079.jpg',
  styleguide: '/images/projekte/frontify/210902_FRO2101_3625.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Frontify: NextPage<Props> = ({ images }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Ein Zuhause für Brands"
        description="Frontify. Das vielleicht coolste Scale-Up der Schweiz. Und smartive. Die vielleicht coolste digitale Agentur der
          Schweiz. 😌 Aber wie passt das zusammen?"
      >
        <Copy>
          Frontify. Das vielleicht coolste Scale-Up der Schweiz. Und smartive. Die vielleicht coolste digitale Agentur der
          Schweiz. 😌 Aber wie passt das zusammen?
        </Copy>
        <Copy>
          Ganz einfach: wir begleiten die Brand Management Plattform auf ihrem Weg in die React-Welt. Dabei unterstützen wir
          als integriertes Development-Team bei der Entwicklung des eigenen Design Systems und ein paar anderen richtig
          coolen Features &ndash; über die du bald mehr lesen wirst.
        </Copy>
        <LinkList
          links={[
            {
              href: 'https://www.frontify.com/',
              label: 'Ab zu Frontify',
            },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.flyer}
            alt="Flyer für das Digital Asset Management von Frontify"
            priority
            objectFit="cover"
            width={1504}
            height={800}
          />
          <span className="text-xs text-black">Fotos: Ladina Bischof</span>

          <Grid cols={2}>
            <Image
              src={images.styleguide}
              alt="Style Guide von Frontify auf einem Bildschirm"
              priority
              objectFit="scale-down"
              width={1920}
              height={1440}
            />
            <Image
              src={images.meeting}
              alt="Meeting von Frontify Mitarbeitenden"
              priority
              objectFit="scale-down"
              width={1920}
              height={1440}
            />
          </Grid>
        </Section>
      </main>
    </Page>
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

export default Frontify;
