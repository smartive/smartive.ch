import Image from 'next/image';
import React, { FC } from 'react';
import { isExternalUrl } from '../utils/url';

export enum PortraitVariant {
  Big = 208,
  Small = 128,
}

type Props = {
  image: string;
  alt: string;
  variant: PortraitVariant;
  className?: string;
};

export const Portrait: FC<Props> = ({ image, alt, variant, className = '' }) =>
  isExternalUrl(image) ? (
    <img src={image} alt={alt} height={variant} width={variant} loading="lazy" className={`rounded-full ${className}`} />
  ) : (
    <Image
      src={image}
      alt={alt}
      className={`rounded-full ${className}`}
      layout="fixed"
      objectFit="cover"
      height={variant}
      width={variant}
    />
  );
