'use client';

import { Photo } from '@/services/cloud-storage';
import NextImage from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export const LightboxComponent: FC<{ slides: Photo[] }> = ({ slides }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams?.get('image');
  const currentImage = search ? slides.findIndex((slide) => slide.key.includes(search)) : -1;

  return (
    <Lightbox
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
