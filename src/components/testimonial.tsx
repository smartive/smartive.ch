import React, { FC } from 'react';
import { Quote } from '../data/quotes';
import { Heading2 } from '../elements/heading-2';
import { Portrait, PortraitVariant } from '../elements/portrait';
import { BlobType } from '../utils/blob-variations';
import { BrandColor, mapColorToBG } from '../utils/colors';
import { highlight } from '../utils/markdown';
import { Blob } from './blob';

type Props = {
  className?: string;
  quote: Quote;
  background?: BrandColor;
  blobs?: BlobType[];
};

export const Testimonial: FC<Props> = ({
  quote: { text, excerpt, credit, portrait },
  className = '',
  blobs = [],
  background = 'apricot',
}) => (
  <div
    className={`relative grid grid-flow-row place-items-center text-center w-full rounded ${mapColorToBG(
      background
    )} p-8 lg:p-32 font-sans font-normal text-xxs mb-4 lg:text-sm ${className}`}
  >
    <Portrait className="z-10" image={portrait} alt="" variant={PortraitVariant.Small} />
    <Heading2 as="p" className="mt-4 z-10 overflow-hidden sm:overflow-visible">
      &laquo;
      {excerpt ? highlight(excerpt) : highlight(text)}
      &raquo;
    </Heading2>
    {excerpt && <p className="mb-8 text-sm lg:text-base font-bold z-10">{text}</p>}
    <p className="z-10">{credit}</p>
    {blobs.map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
