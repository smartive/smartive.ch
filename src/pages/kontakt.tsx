import { Copy, Grid, Heading3, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import NextLink from 'next/link';
import { Image, ImageVariant } from '../components/image';
import { PageHeader } from '../compositions/page-header';
import { Page } from '../layouts/page';
import { Section } from '../layouts/section';

const STATIC_IMAGES = {
  zh: '/images/mood/Agentur-smartive-34.jpg',
  sg: '/images/sg/smartive-sg-people.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Kontakt: NextPage<Props> = ({ images }) => {
  return (
    <Page>
      <PageHeader markdownTitle="Sag Hallo!">
        <Copy>
          Du möchtest uns kennen lernen? Wir möchten dich kennen lernen. Unbedingt und am liebsten persönlich, egal ob in
          Zürich oder St. Gallen – komm vorbei und schau selbst, what’s all the fuzz about.
        </Copy>
        <LinkList
          linkWrapper={(props) => <NextLink legacyBehavior {...props} />}
          links={[
            { label: '+41 44 552 55 99', href: 'tel:+41 44 552 55 99' },
            { label: 'hello@smartive.ch', href: 'mailto:hello@smartive.ch' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Grid cols={2}>
            <div className="flex flex-col gap-8">
              <Image
                src={images.zh}
                alt="smartive Mitarbeiter im Büro in Zürich"
                variant={ImageVariant.FillContainer}
                width={720}
                height={380}
              />
              <Heading3 as="p" className="!m-0">
                smartive AG
                <br />
                Pfingstweidstrasse 60
                <br />
                CH-8005 Zürich
              </Heading3>
              <p>Eingang Süd vom Westpark, wenn du vor Digitec stehst, bist du auf der falschen Seite.</p>
              <div className="flex flex-wrap justify-start text-xxs lg:text-base font-bold">
                <a
                  href="https://goo.gl/maps/S2oFWNAp6X5qrWhh7"
                  className="no-underline border-b-4 border-mint-500 hover:border-black mr-8 last:mr-0 mb-2 transition-colors duration-150"
                  target="_blank"
                  rel="noreferrer"
                >
                  Anfahrtsplan
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <Image
                src={images.sg}
                alt="smartive Mitarbeiter auf der Dachterasse in St.Gallen"
                variant={ImageVariant.FillContainer}
                width={720}
                height={380}
              />
              <Heading3 as="p" className="!m-0">
                smartive AG
                <br />
                Multergasse 26
                <br />
                CH-9000 St. Gallen
              </Heading3>
              <p>Parkieren wird schwierig, aber vom Parkhaus Oberer Graben sind es nur 2 Minuten zu Fuss. 😇 </p>
              <div className="flex flex-wrap justify-start text-xxs lg:text-base font-bold">
                <a
                  href="https://goo.gl/maps/WVRWhFx7WjGDRUdA8"
                  className="no-underline border-b-4 border-mint-500 hover:border-black mr-8 last:mr-0 mb-2 transition-colors duration-150"
                  target="_blank"
                  rel="noreferrer"
                >
                  Anfahrtsplan
                </a>
              </div>
            </div>
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

export default Kontakt;
