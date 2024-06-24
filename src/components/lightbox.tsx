'use client';

import NextImage from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { Lightbox as LightboxComponent } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type Props = {
  slides: { key: string; src: string; width: number; height: number }[];
};

export const Lightbox: FC<Props> = ({ slides }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams?.get('image');
  const currentImage = search ? slides.findIndex((slide) => slide.key.includes(search)) : -1;

  return (
    <LightboxComponent
      open={currentImage !== -1}
      close={() =>
        router.push(`?`, {
          scroll: false,
        })
      }
      index={currentImage}
      render={{
        slide: ({ slide: { src, width, height } }) => (
          <NextImage src={src} width={width} height={height} alt="" className="max-h-[90vh] max-w-[90vw] object-contain" />
        ),
      }}
      slides={slides}
    />
  );
};
