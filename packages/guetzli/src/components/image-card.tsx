import React, { forwardRef, ReactNode } from 'react';
import { Tag, Tags } from '../components/tags';
import { Heading2 } from '../identity/heading-2';
import { Heading3 } from '../identity/heading-3';

export enum ImageCardVariants {
  Big = 'Big',
  Small = 'Small',
  Wide = 'Wide',
}

const ImageSizes = {
  [ImageCardVariants.Small]: 'max-h-60',
  [ImageCardVariants.Big]: 'max-h-120',
  [ImageCardVariants.Wide]: 'max-h-60 md:max-h-full',
} as const;

type Image = { src: string; alt?: string };

export type ImageCardProps = {
  image: Image | ReactNode;
  label: string | ReactNode;
  title: string;
  description?: string;
  link: { label: string; href: string; newTab?: boolean };
  tags?: Tag[];
  variant?: ImageCardVariants;
  className?: string;
  onClick?: () => void;
};

const isImage = (object: any): object is Image => typeof object?.src === 'string';

export const ImageCard = forwardRef<HTMLAnchorElement, ImageCardProps>(
  (
    { image, label, title, description, link, variant = ImageCardVariants.Small, tags = [], className = '', onClick },
    ref
  ) => {
    const tagClassName = variant === ImageCardVariants.Small ? 'absolute top-0 right-4' : 'absolute top-0 right-10';

    return (
      <a
        ref={ref}
        href={link.href}
        onClick={onClick}
        {...(link.newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`relative grid w-full ${
          variant === ImageCardVariants.Wide
            ? 'md:grid-cols-3'
            : variant === ImageCardVariants.Big
            ? 'grid-rows-[480px,auto]'
            : 'grid-rows-[240px,auto]'
        } cursor-pointer border-transparent bg-white-100 rounded overflow-hidden card-shadow transform transition-transform active:scale-[.99] ${className}`}
      >
        <div className={`relative w-full overflow-hidden ${ImageSizes[variant]}`}>
          {isImage(image) ? (
            <img className="object-cover h-full w-full bg-mint-200" src={image.src} alt={image.alt} loading="lazy" />
          ) : (
            image
          )}
        </div>
        <div
          className={`grid grid-rows-[auto,1fr,auto] font-sans font-normal text-xxs lg:text-sm p-4 ${
            variant === ImageCardVariants.Wide ? 'md:col-span-2 md:p-16' : 'lg:p-8'
          }`}
        >
          <p className="inline-flex items-center mb-4">{label}</p>
          <div>
            {variant === ImageCardVariants.Wide ? <Heading2 as="p">{title}</Heading2> : <Heading3 as="p">{title}</Heading3>}
            {description && <p className="mb-4">{description}</p>}
          </div>
          <div>
            <span className="border-b-2">{link.label}</span>
          </div>
        </div>
        {tags.length > 0 && (
          <Tags size={variant === ImageCardVariants.Small ? 'S' : 'L'} tags={tags} vertical className={tagClassName} />
        )}
      </a>
    );
  }
);
