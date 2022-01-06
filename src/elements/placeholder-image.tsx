import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';
import { ImageWithPlaceholder } from '../utils/image-placeholders';

type Props = {
  image: ImageWithPlaceholder;
  rounded?: 'full' | 'default' | 'none';
} & Omit<ImageProps, 'placeholder' | 'src' | 'blurDataURL'>;

export const PlaceholderImage: FC<Props> = ({ image, alt, rounded = 'default', ...props }) => {
  const bgClasses = ['bg-apricot-200', 'bg-cornflower-200', 'bg-mint-200'];
  const randomBg = bgClasses[Math.floor(Math.random() * bgClasses.length)];

  return (
    <Image
      {...image}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      alt={alt}
      className={`transition bg-opacity-50 ${randomBg} ${
        rounded === 'default' ? 'rounded' : rounded === 'full' ? 'rounded-full' : ''
      }`}
    />
  );
};
