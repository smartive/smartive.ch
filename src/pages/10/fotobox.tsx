/* eslint-disable react/forbid-component-props */
import { GetStaticProps, NextPage } from 'next';
import { getImagesFromRokka, Photo } from '../../services/cloud-storage';
import { SmartGallery } from '../../components/10/gallery';
import { TenHead } from '../../components/10/ten-head';
import { useRouter } from 'next/router';

type Props = {
  photos: Photo[];
};

const Fotobox: NextPage<Props> = ({ photos }) => {
  const router = useRouter();

  return (
    <>
      <TenHead />
      <main id="pageContent" className="relative overflow-hidden bg-black text-white-100">
        <div className="relative mx-auto my-24 sm:mb-0 md:my-44">
          <SmartGallery photos={photos}></SmartGallery>
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
    </>
  );
};

export default Fotobox;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const photos = await getImagesFromRokka('fotobox*');

  return {
    props: {
      photos,
    },
    revalidate: 3600,
  };
};
