import { Scroll } from 'scrollex';
import { PageHeader } from '../../compositions/page-header';
import { ParallaxBlob } from './ParallaxBlob';
import { Blob, BlobVariants } from './blob';
import { Logo } from './logo';
import { TextLogo } from './text-logo';

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
      <header className="relative mx-auto w-11/12 max-w-screen-xl overflow-visible bg-white-200">
        <Scroll.Item keyframes={keyframes.blob(0, 200)}>
          <Blob variant={BlobVariants.One} className="absolute -left-14 -top-32 z-0 lg:-left-28 lg:-top-64" />
        </Scroll.Item>
        <Scroll.Item keyframes={keyframes.blob(0, 200)}>
          <Blob variant={BlobVariants.Two} className="absolute -left-24 top-16 z-0 lg:-left-52 lg:top-32" />
        </Scroll.Item>
        <Scroll.Item keyframes={keyframes.blob(0, 200)}>
          <Blob variant={BlobVariants.Three} className="absolute -top-12 left-28 z-0 lg:-top-24 lg:left-48" />
        </Scroll.Item>
        <ParallaxBlob variant={BlobVariants.One} className="absolute -bottom-40 -right-32 z-10 lg:-bottom-56 lg:-right-64" />

        <div className="relative z-50 flex h-80 place-content-center items-center pb-8 text-center lg:h-[550px]">
          <Scroll.Item keyframes={keyframes.logo}>
            <TextLogo />
          </Scroll.Item>
        </div>

        <Logo className="absolute -bottom-16 right-abs-c-5 z-50 w-36 lg:-bottom-32 lg:right-abs-c-7 lg:w-56 xl:right-0" />
      </header>
    </Scroll.Section>
  );
};
