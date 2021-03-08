import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Url } from 'url';
import { AwardTags } from '../components/award-tags';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';

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
      {awardTags.length > 0 && <AwardTags awardTags={awardTags} vertical className="absolute top-0 right-6" />}
      <div className="p-8">
        <Copy className="mb-6">{label}</Copy>
        <Heading3 as="p">{title}</Heading3>
        <span className="border-b group-hover:border-apricot-500 transition-colors duration-150">{link.label}</span>
      </div>
    </div>
  </Link>
);
