import { Copy, Grid, Heading2, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../../../components/image';
import { PageHeader } from '../../../../compositions/page-header';
import { LandingPage } from '../../../../layouts/landing-page';
import { Section } from '../../../../layouts/section';

const STATIC_IMAGES = {
  zubi: '/images/awards/bosw/2023/zubi/zubi-mood.png',
  zwei: '/images/awards/bosw/2023/zwei-people.png',
  mdcf: '/images/awards/bosw/2023/mdcf-people.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Page: NextPage<Props> = ({ images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Unsere Einreichungen"
        description="Das haben wir eingereicht"
        tags={[{ short: 'BOSW23', full: 'Best of Swiss Web 2023' }]}
      >
        <Copy>
          Kein Best of Swiss Web ohne smartive: In diesem Jahr konkurrieren gleich drei unserer Projekte in sieben Kategorien
          um den begehrten Award. Erfahre hier mehr über die einzelnen Projekte und warum sie gewinnen sollten.
        </Copy>
      </PageHeader>

      <main>
        <Section>
          <Grid cols={3}>
            <Image
              src={images.zubi}
              alt="Menschen in den Bergen und ein Screenshot vom Zubi Online-Shop"
              priority
              variant={ImageVariant.FillContainer}
              width={2907}
              height={1647}
            />
            <div className="col-span-2">
              <Heading2>Zubi – der Onlineshop mit Gesicht</Heading2>
              <Copy>
                Zubi.swiss ist mehr als ein reiner Webshop. Es ist die Filiale Nummer Neun des beliebten Appenzeller
                Sportgeschäfts – ein Familienunternehmen mit 75 Jahren Erfahrung.
              </Copy>
              <LinkList
                links={[
                  { label: 'Digital Commerce', href: '2023/zubi/digital-commerce' },
                  { label: 'Swiss', href: '2023/zubi/swiss' },
                  { label: 'User-Experience', href: '2023/zubi/user-experience' },
                  { label: 'Technology', href: '2023/zubi/technology' },
                ]}
              />
            </div>
          </Grid>
        </Section>

        <Section>
          <Grid cols={3}>
            <Image
              src={images.zwei}
              alt="Zwei Menschen schauen in einen Laptop-Bildschirm"
              priority
              variant={ImageVariant.FillContainer}
              width={1025}
              height={661}
            />
            <div className="col-span-2">
              <Heading2>ZWEI Wealth – digitale Plattform für Vermögensverwaltung</Heading2>
              <Copy>
                Die digitale Plattform von ZWEI Wealth verbindet Anleger*innen, Berater*innen und Asset Manager*innen. Sie
                ist die Zukunft der Vermögensverwaltung.
              </Copy>
              <LinkList
                links={[
                  { label: 'Business', href: '2023/zwei-wealth/business' },
                  { label: 'Innovation', href: '2023/zwei-wealth/innovation' },
                  { label: 'User-Experience', href: '2023/zwei-wealth/user-experience' },
                  { label: 'Productivity', href: '2023/zwei-wealth/productivity' },
                ]}
              />
            </div>
          </Grid>
        </Section>

        <Section>
          <Grid cols={3}>
            <Image
              src={images.mdcf}
              alt="smartive Mitarbeitende im Office"
              priority
              variant={ImageVariant.FillContainer}
              width={1863}
              height={1239}
            />
            <div className="col-span-2">
              <Heading2>Migros Digital Campaign Factory: Gewinnen as a Service</Heading2>
              <Copy>Ein no-code Deluxe-Baukasten für digitale Kampagnen der Migros.</Copy>
              <LinkList links={[{ label: 'Productivity', href: '2023/campaign-factory/productivity' }]} />
            </div>
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
