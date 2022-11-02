import { FC } from 'react';
import { Blob, BlobVariants } from './blob';
import { useSSRSafeRandomNumber } from '@smartive/guetzli';
import { Scroll } from 'scrollex';
import { keyframes } from './ten-head';

export const ParallaxBlob: FC<{ variant?: BlobVariants; className?: string }> = ({ variant, className }) => {
  const animateFrom = useSSRSafeRandomNumber(-150, -50);
  const animateTo = useSSRSafeRandomNumber(150, 250);

  return (
    <Scroll.Item keyframes={keyframes.blob(animateFrom, animateTo)} className={className}>
      <Blob variant={variant} />
    </Scroll.Item>
  );
};
