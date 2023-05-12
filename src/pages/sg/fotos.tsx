/* eslint-disable react/forbid-component-props */
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
      <main id="pageContent" className="relative text-white-100 overflow-hidden">
        <div className="relative mx-auto sm:mb-0 my-24 md:my-44">
          <SmartGallery photos={photos} dark={false} />
        </div>
      </main>
      <div className="bottom-0 w-full py-8 z-50 fixed hidden lg:block">
        <div className="fixed right-5 bottom-5 rounded-full bg-conic-gradient p-1 transition-transform scale-100 hover:scale-110 hover:rotate-6 shadow-sm">
          <button
            className=" bg-white-200 h-12 w-12 rounded-full bg-white flex items-center justify-center"
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
