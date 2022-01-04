import React, { forwardRef, ReactNode } from 'react';
import { PositionX, PositionY } from '../foundation/blobs/blob';
import { BrandColor } from '../foundation/colors/colors';
import { Heading3 } from '../foundation/typography/heading-3';
import { Card } from './card';

export type ContentCardProps = {
  label?: string | ReactNode;
  title: string;
  content?: string;
  link: { label: string; href: string; newTab?: boolean };
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
  background: BrandColor;
  onClick?: () => void;
};

export const ContentCard = forwardRef<HTMLAnchorElement, ContentCardProps>(
  ({ title, label, content, link, background, blobs = [], onClick }, ref) => (
    <a
      ref={ref}
      className="grid"
      href={link.href}
      onClick={onClick}
      {...(link.newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <Card background={background} blobs={blobs} interactive>
        <div className={`grid gap-8 ${label ? 'grid-rows-[auto,1fr,auto]' : 'grid-rows-[1fr,auto]'}`}>
          {label && <p className="inline-flex flex-row items-center">{label}</p>}
          <div className="mb-4">
            <Heading3 as="p">{title}</Heading3>
            {content && <p>{content}</p>}
          </div>
          <div className="flex items-end">
            <span className="border-b-2">{link.label}</span>
          </div>
        </div>
      </Card>
    </a>
  )
);
