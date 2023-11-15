'use client';

import { Blob, Clock, mapColorToBG } from '@smartive/guetzli';
import { FC } from 'react';
import { classNames } from '../utils/css';
import { BlobVariationName, getBlobs } from '../utils/get-blobs';
import { Heading1, Paragraph } from './nodes';
import { OfferColor } from './offer-card';
import { UseClientWrapper } from './use-client-wrapper';

type Props = {
  title: string;
  timespan?: string | null;
  description?: string | null;
  color?: OfferColor;
};

export const OfferHeader: FC<Props> = ({ title, timespan, description, color = 'apricot' }) => (
  <div
    className={classNames(
      'relative mb-12 mt-8 grid w-full grid-flow-row place-items-center overflow-hidden rounded p-8 text-center font-sans text-xxs font-normal lg:mb-48 lg:p-32 lg:text-sm',
      mapColorToBG(color),
    )}
  >
    <div className="z-10">
      <Heading1>{title}</Heading1>
    </div>
    {timespan && (
      <div className="z-10 inline-flex flex-row items-center font-sans text-sm font-bold lg:text-base">
        <UseClientWrapper>
          <Clock className="mr-2 inline h-6 w-6" /> {timespan}
        </UseClientWrapper>
      </div>
    )}
    {description && (
      <div className="z-10 font-sans text-xs lg:text-base">
        <Paragraph>{description}</Paragraph>
      </div>
    )}
    {getBlobs(`${color}-0` as BlobVariationName).map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
