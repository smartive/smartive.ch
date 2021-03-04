import Image from 'next/image';
import React, { FC } from 'react';

export enum PortraitVariant {
  big = 208,
  small = 128,
}

type Props = {
  image: string;
  alt: string;
  variant: PortraitVariant;
  className?: string;
};

export const Portrait: FC<Props> = ({ image, alt, variant, className = '' }) => (
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
