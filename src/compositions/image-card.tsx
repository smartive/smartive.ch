import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { AwardTags } from '../components/award-tags';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';
import { Lead } from '../elements/lead';
import { isExternalUrl } from '../utils/url';

export enum ImageCardVariants {
  Big,
  Small,
  Wide,
}

const ImageSizes = {
  [ImageCardVariants.Small]: 'h-60',
  [ImageCardVariants.Big]: 'h-120',
  [ImageCardVariants.Wide]: 'h-60 md:h-full',
} as const;

export type Props = {
  image: { src: string; alt?: string };
  label: string | ReactNode;
  title: string;
  description?: string;
  link: { label: string; href: Url | string };
  awardTags?: string[];
  variant?: ImageCardVariants;
  className?: string;
};

export const ImageCard: FC<Props> = ({
  image,
  label,
  title,
  description,
  link,
  variant = ImageCardVariants.Small,
  awardTags = [],
  className = '',
}) => (
  <Link href={link.href}>
    <div
      className={`relative grid grid-flow-row w-full ${
        variant === ImageCardVariants.Wide ? 'md:grid-cols-3' : ''
      } cursor-pointer border-transparent bg-white-100 rounded overflow-hidden card-shadow ${className}`}
    >
      <div className={`relative w-full ${ImageSizes[variant]}`}>
        {isExternalUrl(image.src) ? (
          <img className="object-cover h-full w-full" src={image.src} alt={image.alt} loading="lazy" />
        ) : (
          <Image src={image.src} alt={image.alt} objectFit="cover" layout="fill" />
        )}
      </div>
      {awardTags.length > 0 && <AwardTags awardTags={awardTags} vertical className="absolute top-0 right-6" />}
      <div className={`p-4 ${variant === ImageCardVariants.Wide ? 'md:col-span-2 md:p-16' : 'lg:m-8'}`}>
        <Copy className="inline-flex items-center mb-4">{label}</Copy>
        <Heading3 as="p">{title}</Heading3>
        {description && <Lead>{description}</Lead>}
        <span className="border-b-2">{link.label}</span>
      </div>
    </div>
  </Link>
);
