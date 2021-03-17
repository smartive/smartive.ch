import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { AwardTags } from '../components/award-tags';
import { Heading3 } from '../elements/heading-3';
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
}) => {
  const awardClassName = variant === ImageCardVariants.Small ? 'absolute top-0 right-4' : 'absolute top-0 right-10';

  return (
    <Link href={link.href}>
      <div
        className={`relative grid grid-flow-row w-full ${
          variant === ImageCardVariants.Wide ? 'md:grid-cols-3' : 'grid-rows-headerFooter'
        } cursor-pointer border-transparent bg-white-100 rounded overflow-hidden card-shadow ${className}`}
      >
        <div className={`relative w-full ${ImageSizes[variant]}`}>
          {isExternalUrl(image.src) ? (
            <img className="object-cover h-full w-full" src={image.src} alt={image.alt} loading="lazy" />
          ) : (
            <Image src={image.src} alt={image.alt} objectFit="cover" layout="fill" />
          )}
        </div>
        {awardTags.length > 0 && (
          <AwardTags
            size={variant === ImageCardVariants.Small ? 'S' : 'L'}
            tags={awardTags}
            vertical
            className={awardClassName}
          />
        )}
        <div
          className={`grid grid-rows-headerFooter font-sans font-normal text-xxs lg:text-sm p-4 ${
            variant === ImageCardVariants.Wide ? 'md:col-span-2 md:p-16' : 'lg:p-8'
          }`}
        >
          <p className="inline-flex items-center mb-4">{label}</p>
          <div>
            <Heading3 as="p">{title}</Heading3>
            {description && <p className="mb-4">{description}</p>}
          </div>
          <div>
            <span className="border-b-2">{link.label}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
