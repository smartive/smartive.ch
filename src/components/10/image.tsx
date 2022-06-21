import { useSSRSafeRandomNumber } from '@smartive/guetzli';
import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

type Props = {
  fixSize?: boolean;
} & Omit<ImageProps, 'placeholder' | 'blurDataURL'>;

export const Image: FC<Props> = ({ fixSize, alt, src, ...props }) => {
  const bgClasses = ['bg-apricot-200', 'bg-cornflower-200', 'bg-mint-200'];
  const colorIndex = useSSRSafeRandomNumber(0, bgClasses.length - 1);

  return (
    <NextImage
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      className={`relative z-20 transition rounded ${bgClasses[colorIndex]}`}
      src={src}
      alt={alt}
      objectFit={!fixSize ? 'cover' : 'contain'}
      objectPosition={!fixSize ? 'center center' : undefined}
      layout={!fixSize ? 'fill' : 'intrinsic'}
    />
  );
};
