import { Copy, LinkList } from '@smartive/guetzli';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { SmartGallery } from '../../../components/10/gallery';
import { PageHeader } from '../../../compositions/page-header';
import { LandingPage } from '../../../layouts/landing-page';
import { Photo, getImagesFromRokka } from '../../../services/cloud-storage';

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

      <main className="relative overflow-hidden">
        <div className="relative mx-auto my-24 sm:mb-0 md:my-44">
          <SmartGallery photos={photos} dark={false} />
        </div>
      </main>
      <div className="fixed bottom-0 z-50 hidden w-full py-8 lg:block">
        <div className="fixed bottom-5 right-5 scale-100 rounded-full bg-conic-gradient p-1 shadow-sm transition-transform hover:rotate-6 hover:scale-110">
          <button
            className=" bg-white flex h-12 w-12 items-center justify-center rounded-full bg-white-200 text-base"
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
