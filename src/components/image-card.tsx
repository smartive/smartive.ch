import { ImageCard, ImageCardProps } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';
import { Image, ImageVariant } from './image';

type Props = ImageCardProps & { image: string; imageAlt?: string };

export const NextImageCard: FC<Props> = ({ image, imageAlt, ...props }) => (
  <NextLink href={props.link.href} legacyBehavior passHref>
    <ImageCard
      {...props}
      image={
        <Image src={image} alt={imageAlt} rounded="none" height={480} width={720} variant={ImageVariant.FillContainer} />
      }
    />
  </NextLink>
);
