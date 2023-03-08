import { Copy, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../../../../components/image';
import { PageHeader } from '../../../../../compositions/page-header';
import { LandingPage } from '../../../../../layouts/landing-page';
import { Section } from '../../../../../layouts/section';

const STATIC_IMAGES = {
  keyvisual: '/images/awards/bosw/2023/zubi/zubi-keyvisual.jpg',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Page: NextPage<Props> = ({ images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="zubi.swiss – der Onlineshop mit Gesicht"
        description="Das haben wir eingereicht"
        tags={[{ short: 'BOSW22', full: 'Eingabe Best of Swiss Web 2023' }]}
      >
        <Copy>
          Den neuen Online-Shop von Zubi haben wir in vier verschiedenen Kategorien eingereicht. Such dir eine aus und schaus
          dir an:
        </Copy>

        <LinkList
          links={[
            { label: 'Digital Commerce', href: 'zubi/digital-commerce' },
            { label: 'Swiss', href: 'zubi/swiss' },
            { label: 'User-Experience', href: 'zubi/user-experience' },
            { label: 'Technology', href: 'zubi/technology' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.keyvisual}
            alt="Screenshot Ops One Cockpit"
            priority
            variant={ImageVariant.FillContainer}
            width={2400}
            height={1360}
          />
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
