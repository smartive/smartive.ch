import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { Heading3 } from '../elements/heading-3';

export type ContentCardProps = {
  label?: string | ReactNode;
  title: string;
  content?: string;
  link: { label: string; href: Url | string; newTab?: boolean };
};

export const ContentCard: FC<ContentCardProps> = ({ title, label, content, link }) => (
  <Link href={link.href}>
    <div className="grid grid-rows-headerFooter w-full h-full p-8 gap-8 cursor-pointer rounded overflow-hidden card-shadow content-card-bg font-sans font-normal text-xxs mb-4 lg:text-sm">
      {label && <p className="inline-flex flex-row items-center">{label}</p>}
      <div className="mb-4">
        <Heading3 as="p">{title}</Heading3>
        {content && <p>{content}</p>}
      </div>
      <div>
        <span className="border-b-2">{link.label}</span>
      </div>
    </div>
  </Link>
);
