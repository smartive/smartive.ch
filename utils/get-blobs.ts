'use client';

import { BlobType, BlobVariations } from '@smartive/guetzli';

export type BlobVariationName =
  | 'cornflower-0'
  | 'cornflower-1'
  | 'cornflower-2'
  | 'cornflower-3'
  | 'cornflower-4'
  | 'apricot-0'
  | 'apricot-1'
  | 'apricot-2'
  | 'mint-0'
  | 'mint-1'
  | 'mint-2';

const BlobVariationsMap: Record<BlobVariationName, BlobType[]> = {
  'cornflower-0': BlobVariations.cornflower[0],
  'cornflower-1': BlobVariations.cornflower[1],
  'cornflower-2': BlobVariations.cornflower[2],
  'cornflower-3': BlobVariations.cornflower[3],
  'cornflower-4': BlobVariations.cornflower[4],
  'apricot-0': BlobVariations.apricot[0],
  'apricot-1': BlobVariations.apricot[1],
  'apricot-2': BlobVariations.apricot[2],
  'mint-0': BlobVariations.mint[0],
  'mint-1': BlobVariations.mint[1],
  'mint-2': BlobVariations.mint[2],
};

export const getBlobs = (blobs: BlobVariationName): BlobType[] => {
  if (typeof blobs === 'string') {
    return BlobVariationsMap[blobs];
  }

  return blobs;
};
