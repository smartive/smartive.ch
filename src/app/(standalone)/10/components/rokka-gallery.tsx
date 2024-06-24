import { Lightbox } from '@/components/lightbox';
import { getImagesFromRokka } from '@/services/rokka';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { FC, Suspense } from 'react';

type Props = {
  rokkaname: string;
};

export const RokkaGallery: FC<Props> = async ({ rokkaname }) => {
  const items = await getImagesFromRokka(rokkaname);

  return (
    <div>
      <Suspense fallback={<div>Lade Fotos...</div>}>
        <Lightbox slides={items} />
      </Suspense>
      <div className="m-0 flex flex-wrap gap-1 p-4">
        {items.map(({ width, height, src, key }, index) => (
          <NextLink
            key={key}
            href={`?image=${key}`}
            scroll={false}
            className="text-white font-black text-2xl relative flex h-full w-full flex-grow items-center justify-center bg-white-100/50 text-center font-sans sm:h-96 sm:w-auto md:h-80"
            style={{ width: `${(width / height) * 320}px` }}
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
        ))}
      </div>
    </div>
  );
};
