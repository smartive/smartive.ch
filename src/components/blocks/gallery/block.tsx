import { BlockWrapper } from '@/components/layouts/block-wrapper';
import { GalleryBlockFragment } from '@/graphql/generated';
import { getImagesFromRokka } from '@/services/cloud-storage';
import { classNames } from '@smartive/guetzli';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { FC, Suspense } from 'react';
import { LightboxComponent } from './lightbox';

export const GalleryBlock: FC<{ block: GalleryBlockFragment; dark?: boolean }> = async ({ block: { rokkaname }, dark }) => {
  if (!rokkaname) {
    return null;
  }

  const items = await getImagesFromRokka(rokkaname);

  return (
    <BlockWrapper marginBottom="small" marginTop="small">
      <Suspense fallback={<div>Loading Photos...</div>}>
        <LightboxComponent slides={items} />
      </Suspense>
      <div className="m-0 flex flex-wrap gap-1 p-4">
        {items.map(({ width, height, src, key }, index) => {
          const aspectRatios = width / height;

          return (
            <NextLink
              href={`?image=${key}`}
              scroll={false}
              key={key}
              className={classNames(
                'text-white font-black text-2xl relative flex h-full w-full flex-grow items-center justify-center text-center font-sans sm:h-96 sm:w-auto md:h-80',
                dark ? 'bg-white-100/50' : 'bg-apricot-200',
              )}
              style={{ width: `${aspectRatios * 320}px` }}
            >
              <NextImage
                src={src}
                priority={index < 3}
                sizes="(max-width: 640px) 0vw, 50v"
                className="hidden h-full w-full object-cover sm:block"
                alt=""
                fill
              />
              <NextImage src={src} className="block sm:hidden" alt="" width={width} height={height} priority={index < 3} />
            </NextLink>
          );
        })}
      </div>
    </BlockWrapper>
  );
};
