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
      <main id="pageContent" className="relative bg-black text-white-100 overflow-hidden">
        <div className="relative mx-auto sm:mb-0 my-24 md:my-44">
          <SmartGallery photos={photos}></SmartGallery>
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
