import { ImageCard, ImageCardProps } from '@smartive/guetzli';
import NextLink from 'next/link';
import React, { FC } from 'react';
import { Image } from './image';

type Props = ImageCardProps & { image: string; imageAlt?: string };

export const NextImageCard: FC<Props> = ({ image, imageAlt, ...props }) => (
  <NextLink href={props.link.href} passHref>
    <ImageCard
      {...props}
      image={<Image src={image} alt={imageAlt} rounded="none" objectFit="cover" height={480} width={720} />}
    />
  </NextLink>
);
