'use client';

import { Blob } from '@smartive/guetzli';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { ResponsiveImageFragment } from '../../../../graphql/generated';
import { getBlobs } from '../../../../utils/get-blobs';

type Props = {
  quote: string;
  image?: ResponsiveImageFragment;
  authorName?: string;
  authorDesc?: string;
};

export const SingleTestimonial: FC<Props> = ({ image, quote, authorName, authorDesc }) => (
  <div className="relative my-12 grid w-full grid-flow-row place-items-center overflow-hidden rounded bg-mint-500 p-8 text-center font-sans text-xxs font-normal lg:my-48 lg:p-32 lg:text-sm">
    {image && <DatoImage data={image} className="z-10 rounded-full" />}
    <p className="z-10 mb-4 mt-4 overflow-hidden whitespace-pre-line font-sans text-base font-bold sm:overflow-visible lg:mb-8 lg:text-xl">
      &laquo;
      {quote}
      &raquo;
    </p>
    {authorName && (
      <p className="z-10">
        {authorName}
        {authorDesc && `, ${authorDesc}`}
      </p>
    )}
    {getBlobs('mint-0').map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
