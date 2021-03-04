import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Url } from 'url';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';

const TagColors = ['bg-apricot-500', 'bg-mint-500', 'bg-cornflower-500'] as const;

export enum ImageCardVariants {
  'BIG',
  'SMALL',
}

export type Props = {
  image: { src: string; alt?: string };
  label: string;
  title: string;
  link: { label: string; href: Url | string };
  awardTags?: string[];
  variant?: ImageCardVariants;
};

export const ImageCard: FC<Props> = ({ image, label, title, link, variant = ImageCardVariants.SMALL, awardTags = [] }) => (
  <Link href={link.href}>
    <div className="group cursor-pointer bg-white-100 rounded overflow-hidden relative">
      <Image
        src={image.src}
        alt={image.alt}
        objectFit="cover"
        height={variant === ImageCardVariants.BIG ? '480' : '240'}
        width={variant === ImageCardVariants.BIG ? '720' : '465'}
      />
      {awardTags.length > 0 && (
        <div className="grid grid-flow-col gap-6 absolute top-0 right-6">
          {awardTags.map((tag, index) => (
            <Copy
              key={tag}
              className={`${
                TagColors[index % 3]
              } text-white-100 rounded-t-sm p-3 transform origin-center rotate-180 writing-vertical`}
            >
              {tag}
            </Copy>
          ))}
        </div>
      )}
      <div className="p-8">
        <Copy className="mb-6">{label}</Copy>
        <Heading3 as="p">{title}</Heading3>
        <span className="border-b group-hover:border-apricot-500 transition-colors duration-150">{link.label}</span>
      </div>
    </div>
  </Link>
);
