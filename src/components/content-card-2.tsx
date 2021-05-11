import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import { Url } from 'url';
import { Blob, PositionX, PositionY } from '../elements/blob';
import { Heading3 } from '../identity/heading-3';
import { BrandColor, getContrastColor, mapColorToBG } from '../utils/colors';
import SbEditable from 'storyblok-react';

export type ContentCardProps = {
  blok: any;
  label?: string | ReactNode;
  title?: string;
  content?: string;
  link?: { label: string; href: Url | string; newTab?: boolean };
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
  background?: BrandColor;
};

export const ContentCard2: FC<ContentCardProps> = ({ blok, blobs = [] }) => {
  if (blok.component !== 'content-card') return null;

  return (
    <SbEditable content={blok}>
      <Link href={blok.link.url}>
        <a
          {...(blok.link.newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
          className={`relative grid ${
            blok.duration ? 'grid-rows-[auto,1fr,auto]' : 'grid-rows-[1fr,auto]'
          } w-full h-full p-8 gap-8 cursor-pointer rounded overflow-hidden card-shadow-${getContrastColor(
            blok.color
          )} ${mapColorToBG(
            blok.color
          )}  font-sans font-normal text-xxs lg:text-sm transform transition-transform active:scale-[.99]`}
        >
          {blok.duration && <p className="inline-flex flex-row items-center z-10">{blok.duration}</p>}
          <div className="mb-4 z-10">
            <Heading3 as="p">{blok.title}</Heading3>
            {blok.content && <p>{blok.content}</p>}
          </div>
          <div className="flex z-10 items-end">
            <span className="border-b-2">{blok.linkLabel}</span>
          </div>
          {blobs.map(({ color, positionX, positionY }, index) => (
            <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
          ))}
        </a>
      </Link>
    </SbEditable>
  );
};
