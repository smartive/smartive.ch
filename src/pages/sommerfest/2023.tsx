import { Copy, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { SmartGallery } from '../../components/10/gallery';
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
      <PageHeader markdownTitle="Impressionen vom _Sommerfest_ 2023" description="Impressionen vom Sommerfest 2023">
        <Copy>
          Smarteste Menschen, bestes Wetter, veganste Gaumenfreuden, ein Schwipps oder zwei und Espresso vom Scheff – Das war
          das Sommerfest 2023. Schön, dass ihr mit uns gefeiert habt!
        </Copy>
        <LinkList
          links={[
            {
              label: 'zu den anderen Sommerfesten',
              href: '/sommerfest',
            },
            {
              label: 'zu den Fötelis von anderen Parties',
              href: '/sg/fotos',
            },
          ]}
        ></LinkList>
      </PageHeader>

      <main id="pageContent" className="relative overflow-hidden">
        <div className="relative mx-auto sm:mb-0 my-24 md:my-44">
          <SmartGallery photos={photos} dark={false} />
        </div>
      </main>
      <div className="bottom-0 w-full py-8 z-50 fixed hidden lg:block">
        <div className="fixed right-5 bottom-5 rounded-full bg-conic-gradient p-1 transition-transform scale-100 hover:scale-110 hover:rotate-6 shadow-sm">
          <button
            className=" bg-white-200 h-12 w-12 rounded-full bg-white flex items-center justify-center text-base"
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
  const photos = await getImagesFromRokka('sommerfest-2023-*');

  return {
    props: {
      photos,
    },
    revalidate: 3600,
  };
};
