import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';

export enum CardColors {
  Apricot = 'bg-apricot-500',
  Cornflower = 'bg-cornflower-500',
  Mint = 'bg-mint-500',
}

type Props = {
  label: string | ReactNode;
  title: string;
  content: string;
  link: { label: string; href: Url | string };
  background: CardColors;
};

export const ContentCard: FC<Props> = ({ title, label, content, link, background }) => (
  <Link href={link.href}>
    <div className={`grid grid-rows-headerFooter p-8 gap-8 group cursor-pointer ${background} rounded overflow-hidden`}>
      <Copy className="inline-flex flex-row items-center">{label}</Copy>
      <div>
        <Heading3 as="p">{title}</Heading3>
        <Copy>{content}</Copy>
      </div>
      <div>
        <span className="border-b group-hover:border-apricot-500 transition-colors duration-150">{link.label}</span>
      </div>
    </div>
  </Link>
);
