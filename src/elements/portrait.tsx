import React, { FC } from 'react';
import { ImageWithPlaceholder } from '../utils/image-placeholders';
import { PlaceholderImage } from './placeholder-image';

export enum PortraitVariant {
  Big = 208,
  Small = 128,
}

type Props = {
  image: ImageWithPlaceholder | string;
  alt: string;
  variant: PortraitVariant;
  className?: string;
};

export const Portrait: FC<Props> = ({ image, alt, variant, className = '' }) =>
  IsImageWithPlaceholder(image) ? (
    <PlaceholderImage
      rounded="full"
      image={image}
      alt={alt}
      className={`rounded-full ${className}`}
      layout="fixed"
      objectFit="cover"
      height={variant}
      width={variant}
    />
  ) : (
    <img src={image} alt={alt} height={variant} width={variant} loading="lazy" className={`rounded-full ${className}`} />
  );

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IsImageWithPlaceholder = (image: any): image is ImageWithPlaceholder =>
  typeof image !== 'string' && !!image.blurDataURL;
