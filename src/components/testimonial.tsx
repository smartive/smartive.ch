import { ResponsiveImageFragment } from '@/graphql/generated';
import { SmartiveColorsType } from '@/utils/color';
import { FC } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';
import { Blobs } from './blobs';

type Props = {
  quote: string;
  image?: ResponsiveImageFragment;
  authorName?: string;
  authorDesc?: string;
  color?: SmartiveColorsType;
};

export const Testimonial: FC<Props> = ({ image, quote, authorName, authorDesc, color }) => (
  <div className="relative grid w-full grid-flow-row place-items-center overflow-hidden rounded bg-mint-500 p-8 text-center font-sans text-xxs font-normal lg:p-32 lg:text-sm">
    {image && (
      <div className="z-10 h-24 w-24 lg:h-32 lg:w-32">
        <DatoSRCImage data={image} className="rounded-full" />
      </div>
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
