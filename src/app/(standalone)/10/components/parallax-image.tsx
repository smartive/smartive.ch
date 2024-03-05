'use client';

import { useSSRSafeRandomNumber } from '@smartive/guetzli';
import NextImage, { StaticImageData } from 'next/image';
import { FC } from 'react';
import { Scroll } from 'scrollex';
import { keyframes } from './ten-head';

export const ParallaxImage: FC<{
  alt: string;
  src: StaticImageData;
  effect?: 'heavy' | 'default' | 'minimal';
}> = ({ alt, src }) => {
  const bgClasses = ['bg-apricot-200', 'bg-cornflower-200', 'bg-mint-200'];
  const colorIndex = useSSRSafeRandomNumber(0, bgClasses.length - 1);
  const parallaxIndex = useSSRSafeRandomNumber(0, 1);

  return (
    <div className="relative z-20 h-full w-full overflow-hidden rounded">
      <Scroll.Item keyframes={keyframes.image[parallaxIndex]} className="image-overflow-override relative h-full w-full">
        <NextImage
          className={`relative z-20 scale-125 rounded object-cover object-center transition ${bgClasses[colorIndex]}`}
          src={src}
          alt={alt}
          fill
          sizes="100vw"
        />
      </Scroll.Item>
    </div>
  );
};
