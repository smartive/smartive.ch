import { ImageCard as ImageCardComponent, ImageCardProps } from '@smartive/guetzli';
import Image from 'next/image';
import React, { FC } from 'react';

type Props = ImageCardProps & { image: { src: string; alt?: string } };

export const ImageCard: FC<Props> = ({ image, ...props }) => (
  <ImageCardComponent
    image={<Image className="bg-mint-200" src={image.src} alt={image.alt} objectFit="cover" height={480} width={720} />}
    {...props}
  />
);
