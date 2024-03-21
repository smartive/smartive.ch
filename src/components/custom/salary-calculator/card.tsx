'use client';

import { Blob, PositionX, PositionY } from '@/components/blobs/blob';
import { BrandColor, classNames, mapColorToBG, useContrastColor } from '@smartive/guetzli';
import { FC, ReactNode } from 'react';

type CardProps = {
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
  background: BrandColor;
  interactive?: boolean;
  children?: ReactNode;
};

export const Card: FC<CardProps> = ({ children, background, interactive = false, blobs = [] }) => {
  const contrastColor = useContrastColor(background);

  return (
    <div
      className={classNames(
        'relative grid h-full w-full overflow-hidden rounded p-8 font-sans text-xxs font-normal lg:text-sm',
        interactive && `cursor-pointer card-shadow-${contrastColor} transition-transform active:scale-[.99]`,
        mapColorToBG(background),
      )}
    >
      <div className="z-10 grid">{children}</div>
      {blobs.map(({ color, positionX, positionY }, index) => (
        <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
      ))}
    </div>
  );
};
