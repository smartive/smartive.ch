import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { Blob, PositionX, PositionY } from '../elements/blob';
import { Heading2 } from '../identity/heading-2';
import { BrandColor, mapColorToBG } from '../utils/colors';

const NewsletterSubscription = dynamic(() => import('./newsletter-subscription'), { ssr: false });

type Props = {
  className?: string;
  background?: BrandColor;
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
};

export const NewsletterCard: FC<Props> = ({ className = '', blobs = [], background = 'apricot' }) => (
  <div
    className={`relative grid grid-flow-row place-items-center text-center w-full rounded ${mapColorToBG(
      background
    )} p-8 lg:p-32 lg:text-sm ${className}`}
  >
    <Heading2 as="p" className="z-10">
      Wir schreiben nicht nur Code, sondern auch E-Mails. Auch dir, wenn du willst.
    </Heading2>
    <NewsletterSubscription
      label="Newsletter"
      className="text-left z-10 overflow-hidden sm:overflow-visible"
      button="Jetzt abonnieren"
    />
    {blobs.map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
