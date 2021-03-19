import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { Blob, PositionX, PositionY } from '../components/blob';
import { Heading3 } from '../elements/heading-3';
import { BrandColor, getContrastColor, mapColorToBG } from '../utils/colors';

export type ContentCardProps = {
  label?: string | ReactNode;
  title: string;
  content?: string;
  link: { label: string; href: Url | string; newTab?: boolean };
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
  background: BrandColor;
};

export const ContentCard: FC<ContentCardProps> = ({ title, label, content, link, background, blobs = [] }) => (
  <Link href={link.href}>
    <a
      className={`relative grid ${
        label ? 'grid-rows-[auto,1fr,auto]' : 'grid-rows-[1fr,auto]'
      } w-full h-full p-8 gap-8 cursor-pointer rounded overflow-hidden card-shadow-${getContrastColor(
        background
      )} ${mapColorToBG(
        background
      )} font-sans font-normal text-xxs lg:text-sm transform transition-transform active:scale-[.99]`}
    >
      {label && <p className="inline-flex flex-row items-center z-10">{label}</p>}
      <div className="mb-4 z-10">
        <Heading3 as="p">{title}</Heading3>
        {content && <p>{content}</p>}
      </div>
      <div className="flex z-10 items-end">
        <span className="border-b-2">{link.label}</span>
      </div>
      {blobs.map(({ color, positionX, positionY }, index) => (
        <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
      ))}
    </a>
  </Link>
);
