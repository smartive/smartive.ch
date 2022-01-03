import { ImageCard, ImageCardProps } from '@smartive/guetzli';
import NextLink from 'next/link';
import React, { FC } from 'react';
import { PlaceholderImage } from '../elements/placeholder-image';
import { ImageWithPlaceholder } from '../utils/image-placeholders';

type Props = ImageCardProps & { image: ImageWithPlaceholder; imageAlt?: string };

export const NextImageCard: FC<Props> = ({ image, imageAlt, ...props }) => (
  <NextLink href={props.link.href} passHref>
    <ImageCard
      {...props}
      image={<PlaceholderImage image={image} alt={imageAlt} rounded="none" objectFit="cover" height={480} width={720} />}
    />
  </NextLink>
);
