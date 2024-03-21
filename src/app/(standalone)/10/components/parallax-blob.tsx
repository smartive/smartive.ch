'use client';

import { FC } from 'react';
import { Scroll } from 'scrollex';
import { Blob, BlobVariants } from '../elements/blob';
import { keyframes } from './ten-head';
import { useSSRSafeRandomNumber } from './use-ssr-safe-random-number';

export const ParallaxBlob: FC<{ variant?: BlobVariants; className?: string }> = ({ variant, className }) => {
  const animateFrom = useSSRSafeRandomNumber(-150, -50);
  const animateTo = useSSRSafeRandomNumber(150, 250);

  return (
    <Scroll.Item keyframes={keyframes.blob(animateFrom, animateTo)} className={className}>
      <Blob variant={variant} />
    </Scroll.Item>
  );
};
