import { ImageCard, ImageCardProps } from '@smartive/guetzli';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { FC } from 'react';

type Props = ImageCardProps & { image: { src: string; alt?: string } };

export const NextImageCard: FC<Props> = ({ image, ...props }) => (
  <NextLink href={props.link.href} passHref>
    <ImageCard
      {...props}
      image={<Image className="bg-mint-200" src={image.src} alt={image.alt} objectFit="cover" height={480} width={720} />}
    />
  </NextLink>
);
