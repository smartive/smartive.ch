import NextImage from 'next/image';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { ResponsiveImageFragment } from '../graphql/generated';
import { SmartiveColorsType } from '../utils/color';
import { classNames } from '../utils/css';
import { Blobs } from './blobs';

type Props = {
  quote: string;
  image?: ResponsiveImageFragment;
  legacyImage?: string; // TODO: remove when all testimonials are in dato
  authorName?: string;
  authorDesc?: string;
  hasMargin?: boolean;
  color?: SmartiveColorsType;
};

export const Testimonial: FC<Props> = ({ image, quote, authorName, authorDesc, hasMargin = true, legacyImage, color }) => (
  <div
    className={classNames(
      'relative grid w-full grid-flow-row place-items-center overflow-hidden rounded bg-mint-500 p-8 text-center font-sans text-xxs font-normal lg:p-32 lg:text-sm',
      hasMargin && 'my-12 lg:my-48',
    )}
  >
    {image && <DatoImage data={image} className="z-10 rounded-full" />}
    {legacyImage && (
      <NextImage
        src={legacyImage}
        width={256}
        height={256}
        alt={authorName ?? ''}
        className="h-32 w-32 rounded-full object-cover"
      />
    )}
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
    <Blobs color={color} />
  </div>
);
