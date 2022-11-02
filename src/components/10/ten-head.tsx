import { Scroll } from 'scrollex';
import { PageHeader } from '../../compositions/page-header';
import { Blob, BlobVariants } from './blob';
import { TextLogo } from './text-logo';
import { Logo } from './logo';
import { ParallaxBlob } from './ParallaxBlob';

export const keyframes = {
  image: [
    ({ section }) => ({
      [section.topAt('container-bottom')]: {
        translateX: 30,
      },
      [section.bottomAt('container-top')]: {
        translateX: -30,
      },
    }),
    ({ section }) => ({
      [section.topAt('container-bottom')]: {
        translateX: -30,
      },
      [section.bottomAt('container-top')]: {
        translateX: 30,
      },
    }),
  ],
  logo: ({ section }) => ({
    [section.topAt('container-bottom')]: {
      scale: -0.5,
      translateY: -150,
    },
    [section.bottomAt('container-top')]: {
      scale: 1.25,
      translateY: 50,
    },
  }),
  blob:
    (from: number, to: number) =>
    ({ section }) => ({
      [section.topAt('container-bottom')]: {
        translateY: to,
      },
      [section.bottomAt('container-top')]: {
        translateY: from,
      },
    }),
} as const;

export const TenHead = () => {
  return (
    <Scroll.Section>
      <PageHeader markdownTitle="smartive wird 10 🥳" metaOnly></PageHeader>
      <header className="relative bg-white-200 w-11/12 max-w-screen-xl mx-auto overflow-visible">
        <Scroll.Item keyframes={keyframes.blob(0, 200)}>
          <Blob variant={BlobVariants.One} className="absolute -top-32 -left-14 lg:-top-64 lg:-left-28 z-0" />
        </Scroll.Item>
        <Scroll.Item keyframes={keyframes.blob(0, 200)}>
          <Blob variant={BlobVariants.Two} className="absolute top-16 lg:top-32 -left-24 lg:-left-52 z-0" />
        </Scroll.Item>
        <Scroll.Item keyframes={keyframes.blob(0, 200)}>
          <Blob variant={BlobVariants.Three} className="absolute -top-12 lg:-top-24 left-28 lg:left-48 z-0" />
        </Scroll.Item>
        <ParallaxBlob variant={BlobVariants.One} className="absolute -bottom-40 lg:-bottom-56 -right-32 lg:-right-64 z-10" />

        <div className="relative text-center h-80 lg:h-[550px] flex items-center place-content-center z-50 pb-8">
          <Scroll.Item keyframes={keyframes.logo}>
            <TextLogo />
          </Scroll.Item>
        </div>

        <Logo className="absolute w-36 lg:w-56 right-abs-c-5 lg:right-abs-c-7 -bottom-16 lg:-bottom-32 xl:right-0 z-50" />
      </header>
    </Scroll.Section>
  );
};
