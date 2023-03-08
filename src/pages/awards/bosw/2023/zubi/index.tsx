import { Copy, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { Image, ImageVariant } from '../../../../../components/image';
import { PageHeader } from '../../../../../compositions/page-header';
import { LandingPage } from '../../../../../layouts/landing-page';
import { Section } from '../../../../../layouts/section';

const STATIC_IMAGES = {
  hero: '/images/awards/bosw/2023/zubi/hero.png',
} as const;

type Props = {
  images: typeof STATIC_IMAGES;
};

const Page: NextPage<Props> = ({ images }) => {
  return (
    <LandingPage>
      <PageHeader
        markdownTitle="Zubi BOSW 2023"
        description="Das haben wir eingereicht"
        tags={[{ short: 'BOSW22', full: 'Eingabe Best of Swiss Web 2023' }]}
      >
        <Copy>Den neuen Online-Shop von Zubi haben wir für vier Kategorien eingereicht.</Copy>

        <LinkList
          links={[
            { label: 'Digital Commerce', href: '2023/zubi/digital-commerce' },
            { label: 'Swiss', href: '2023/zubi/swiss' },
            { label: 'User-Experience', href: '2023/zubi/user-experience' },
            { label: 'Technology', href: '2023/zubi/technology' },
          ]}
        />
      </PageHeader>

      <main>
        <Section>
          <Image
            src={images.hero}
            alt="Screenshot Ops One Cockpit"
            priority
            variant={ImageVariant.FillContainer}
            width={3010}
            height={1694}
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
