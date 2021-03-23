import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { AwardTags } from '../components/award-tags';
import { Award } from '../data/teaser';
import { Heading3 } from '../identity/heading-3';
import { isExternalUrl } from '../utils/url';

export enum ImageCardVariants {
  Big,
  Small,
  Wide,
}

const ImageSizes = {
  [ImageCardVariants.Small]: 'max-h-60',
  [ImageCardVariants.Big]: 'max-h-120',
  [ImageCardVariants.Wide]: 'max-h-60 md:max-h-full',
} as const;

export type Props = {
  image: { src: string; alt?: string };
  label: string | ReactNode;
  title: string;
  description?: string;
  link: { label: string; href: Url | string; newTab?: boolean };
  awards?: Award[];
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
  awards = [],
  className = '',
}) => {
  const awardClassName = variant === ImageCardVariants.Small ? 'absolute top-0 right-4' : 'absolute top-0 right-10';

  return (
    <Link href={link.href}>
      <a
        {...(link.newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`relative grid w-full ${
          variant === ImageCardVariants.Wide ? 'md:grid-cols-3' : 'grid-rows-[auto,1fr]'
        } cursor-pointer border-transparent bg-white-100 rounded overflow-hidden card-shadow transform transition-transform active:scale-[.99] ${className}`}
      >
        <div className={`relative w-full overflow-hidden ${ImageSizes[variant]}`}>
          {isExternalUrl(image.src) ? (
            <img className="object-cover h-full w-full bg-mint-200" src={image.src} alt={image.alt} loading="lazy" />
          ) : (
            <Image className="bg-mint-200" src={image.src} alt={image.alt} objectFit="cover" height={480} width={720} />
          )}
        </div>
        <div
          className={`grid grid-rows-[auto,1fr,auto] font-sans font-normal text-xxs lg:text-sm p-4 ${
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
        {awards.length > 0 && (
          <AwardTags
            size={variant === ImageCardVariants.Small ? 'S' : 'L'}
            tags={awards}
            vertical
            className={awardClassName}
          />
        )}
      </a>
    </Link>
  );
};
