'use client';

import { Blob } from '@smartive/guetzli';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { QuoteBlockFragment } from '../../../graphql/generated';
import { getBlobs } from '../../../utils/getBlobs';

type Props = {
  block: QuoteBlockFragment;
};

export const QuoteBlock: FC<Props> = ({ block: { quote, author, authorImage } }) => (
  <div className="relative my-12 grid w-full grid-flow-row place-items-center overflow-hidden rounded bg-mint-500 p-8 text-center font-sans text-xxs font-normal lg:my-48 lg:p-32 lg:text-sm">
    <div className="z-10">
      {authorImage?.responsiveImage && <DatoImage data={authorImage?.responsiveImage} className="rounded-full" />}
    </div>
    <p className="z-10 mb-4 mt-4 overflow-hidden font-sans text-base font-bold sm:overflow-visible lg:mb-8 lg:text-xl">
      &laquo;
      {quote}
      &raquo;
    </p>
    <p className="z-10">{author}</p>
    {getBlobs('mint-0').map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
