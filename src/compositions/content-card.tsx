import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { Blob, BlobColor, PositionX, PositionY } from '../components/blob';
import { Heading3 } from '../elements/heading-3';

export type ContentCardProps = {
  label?: string | ReactNode;
  title: string;
  content?: string;
  link: { label: string; href: Url | string; newTab?: boolean };
  blobs?: { color: BlobColor; positionX: PositionX; positionY: PositionY }[];
};

export const ContentCard: FC<ContentCardProps> = ({ title, label, content, link, blobs = [] }) => (
  <Link href={link.href}>
    <div className="grid grid-rows-headerFooter w-full h-full p-8 gap-8 cursor-pointer rounded overflow-hidden card-shadow content-card-bg font-sans font-normal text-xxs lg:text-sm">
      {label && <p className="inline-flex flex-row items-center z-10">{label}</p>}
      <div className={`mb-4 z-10 ${label ? '' : 'row-span-2'}`}>
        <Heading3 as="p">{title}</Heading3>
        {content && <p>{content}</p>}
      </div>
      <div className="z-10">
        <span className="border-b-2">{link.label}</span>
      </div>
      {blobs.map(({ color, positionX, positionY }, index) => (
        <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
      ))}
    </div>
  </Link>
);
