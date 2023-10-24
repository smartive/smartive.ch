'use client';

import { Blob, BrandColor, highlight, mapColorToBG } from '@smartive/guetzli';
import NextImage from 'next/image';
import { FC } from 'react';
import { Quote } from '../src/data/quotes';
import { BlobVariationName, getBlobs } from '../utils/get-blobs';

type Props = {
  className?: string;
  quote: Quote;
  background?: BrandColor;
  blobs?: BlobVariationName;
};

export const Testimonial: FC<Props> = ({
  quote: { text, excerpt, credit, portrait },
  className = '',
  blobs,
  background = 'apricot',
}) => (
  <div
    className={`relative grid w-full grid-flow-row place-items-center overflow-hidden rounded text-center ${mapColorToBG(
      background,
    )} mb-4 p-8 font-sans text-xxs font-normal lg:p-32 lg:text-sm ${className}`}
  >
    <div className="z-10">
      <NextImage src={portrait} width={256} height={256} alt={credit} className="h-32 w-32 rounded-full object-cover" />
    </div>
    <p className="z-10 mb-4 mt-4 overflow-hidden font-sans text-base font-bold sm:overflow-visible lg:mb-8 lg:text-xl">
      &laquo;
      {excerpt ? highlight(excerpt) : highlight(text)}
      &raquo;
    </p>
    {excerpt && <p className="z-10 mb-8 text-sm font-bold lg:text-base">{text}</p>}
    <p className="z-10">{credit}</p>
    {blobs &&
      getBlobs(blobs).map(({ color, positionX, positionY }, index) => (
        <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
      ))}
  </div>
);
