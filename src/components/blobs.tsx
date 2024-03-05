'use client';

import { SmartiveColorsType } from '@/utils/color';
import { BlobVariationName, getBlobs } from '@/utils/get-blobs';
import { Blob } from '@smartive/guetzli';
import { FC } from 'react';

export const Blobs: FC<{ color?: SmartiveColorsType }> = ({ color = 'mint' }) => (
  <>
    {getBlobs(`${color}-0` as BlobVariationName).map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </>
);
