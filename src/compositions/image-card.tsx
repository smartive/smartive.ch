import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Url } from 'url';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';

type Props = {
  image: { src: string; alt?: string };
  label: string;
  title: string;
  link: { label: string; href: Url | string };
};

export const ImageCard: FC<Props> = ({ image, label, title, link }) => (
  <Link href={link.href}>
    <div className="group cursor-pointer bg-white-100 rounded overflow-hidden">
      <Image src={image.src} alt={image.alt} objectFit="cover" height="240" width="465" />
      <div className="p-8">
        <Copy className="mb-6">{label}</Copy>
        <Heading3 as="p">{title}</Heading3>
        <span className="border-b group-hover:border-apricot-500 transition-colors duration-150">{link.label}</span>
      </div>
    </div>
  </Link>
);
