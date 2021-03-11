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

export type ContentCardProps = {
  label?: string | ReactNode;
  title: string;
  content?: string;
  link: { label: string; href: Url | string };
  background: CardColors;
};

export const ContentCard: FC<ContentCardProps> = ({ title, label, content, link, background }) => (
  <Link href={link.href}>
    <div
      className={`grid grid-rows-headerFooter w-full h-full p-8 gap-8 cursor-pointer ${background} rounded overflow-hidden card-hover`}
    >
      {label && <Copy className="inline-flex flex-row items-center">{label}</Copy>}
      <div>
        <Heading3 as="p">{title}</Heading3>
        {content && <Copy>{content}</Copy>}
      </div>
      <div>
        <span className="border-b">{link.label}</span>
      </div>
    </div>
  </Link>
);
