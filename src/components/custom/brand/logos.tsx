'use client';

import { Blob, BlobVariations, Logo } from '@smartive/guetzli';
import { FC } from 'react';
import { Link } from '../../nodes';

export const Logos: FC = () => (
  <>
    <div className="space-x-8">
      <Link href="images/brand/smartive.svg" download target="_blank" color="apricot">
        Download SVG
      </Link>
      <Link href="images/brand/smartive.png" download target="_blank" color="mint">
        Download PNG
      </Link>
      <Link href="images/brand/smartive-print.zip" target="_blank" color="cornflower">
        Download Print.zip
      </Link>
    </div>
    <div className="mt-8 grid grid-cols-2 grid-rows-3 overflow-hidden rounded sm:grid-rows-2">
      <div className="col-span-2 grid h-48 place-items-center bg-white-100 sm:col-span-1 sm:h-72 lg:h-96">
        <Logo className="h-8 w-auto lg:h-16" />
      </div>
      <div className="col-span-2 grid place-items-center bg-black sm:col-span-1">
        <Logo inverted className="h-8 w-auto lg:h-16" />
      </div>
      <div className="text-white relative col-span-2 grid place-items-center overflow-hidden bg-apricot-500">
        {BlobVariations.apricot[2].map(({ positionX, positionY, color }, i) => (
          <Blob key={i} positionX={positionX} positionY={positionY} color={color} />
        ))}
        <Logo className="z-10 h-8 w-auto sm:h-12 lg:h-24" />
      </div>
    </div>
  </>
);
