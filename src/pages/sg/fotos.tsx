/* eslint-disable react/forbid-component-props */
import { Copy, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { SmartGallery } from '../../components/10/gallery';
import { Image, ImageVariant } from '../../components/image';
import { PageHeader } from '../../compositions/page-header';
import { LandingPage } from '../../layouts/landing-page';
import { Photo, getImagesFromRokka } from '../../services/cloud-storage';

type Props = {
  photos: Photo[];
};

const Fotos: NextPage<Props> = ({ photos }) => {
  const router = useRouter();

  return (
    <LandingPage>
      <PageHeader
        markdownTitle="smartive Office _St.Gallen_ – Scho no schö do"
        description="Impressionen unserer Eröffnungsfeier vom 6. Mai"
      >
        <Image
          src="/images/sg/smartive-opening-balloons.jpg"
          alt="Smartive Luftballons"
          priority
          variant={ImageVariant.FillContainer}
          width={1205}
          height={803}
        />
      </PageHeader>

      <main className="relative overflow-hidden">
        <Copy>
          Die Eröffnungsfeier des Jahres. Bei smartive in St. Gallen. Mit Risotto und Riserva vom Geschmacksträger. Danke,
          dass ihr dabei wart.
        </Copy>
        <LinkList
          links={[
            {
              label: 'Das haben wir eröffnet',
              href: '/sg',
            },
            {
              label: 'Da gibts die nächste Party',
              href: '/sommerfest',
            },
          ]}
        ></LinkList>
        <div className="relative mx-auto my-24 sm:mb-0 md:my-44">
          <SmartGallery photos={photos} dark={false} />
        </div>
      </main>
      <div className="fixed bottom-0 z-50 hidden w-full py-8 lg:block">
        <div className="fixed bottom-5 right-5 scale-100 rounded-full bg-conic-gradient p-1 shadow-sm transition-transform hover:rotate-6 hover:scale-110">
          <button
            className=" bg-white flex h-12 w-12 items-center justify-center rounded-full bg-white-200"
            onClick={() => router.back()}
          >
            🔙
          </button>
        </div>
      </div>
    </LandingPage>
  );
};

export default Fotos;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const photos = await getImagesFromRokka('Smartive-Eroeffnung-Office-SG-2023*');

  return {
    props: {
      photos,
    },
    revalidate: 3600,
  };
};
