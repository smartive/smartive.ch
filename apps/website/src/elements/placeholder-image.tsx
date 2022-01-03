import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';
import { ImageWithPlaceholder } from '../utils/image-placeholders';

type Props = {
  image: ImageWithPlaceholder;
  rounded?: 'full' | 'default' | 'none';
} & Omit<ImageProps, 'placeholder' | 'src' | 'blurDataURL'>;

export const PlaceholderImage: FC<Props> = ({ image, alt, rounded = 'default', ...props }) => (
  <Image
    {...image}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    {...(props as any)}
    alt={alt}
    placeholder="blur"
    // "rounded-clip" is a custom fallback class using clip-path to round corners because the blur filter destroys the border-radius in some browsers
    className={`transition ${
      rounded === 'default' ? 'rounded rounded-clip' : rounded === 'full' ? 'rounded-full rounded-full-clip' : ''
    }`}
  />
);
