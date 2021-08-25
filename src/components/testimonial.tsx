import { Blob, BlobType, BrandColor, Heading2, highlight, mapColorToBG } from '@smartive/guetzli';
import React, { FC } from 'react';
import { Quote } from '../data/quotes';
import { Portrait, PortraitVariant } from '../elements/portrait';

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
    className={`relative grid grid-flow-row place-items-center text-center w-full overflow-hidden rounded ${mapColorToBG(
      background
    )} p-8 lg:p-32 font-sans font-normal text-xxs mb-4 lg:text-sm ${className}`}
  >
    <div className="z-10">
      <Portrait image={portrait} alt="" variant={PortraitVariant.Small} />
    </div>
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
