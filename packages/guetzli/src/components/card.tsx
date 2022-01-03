import React, { FC } from 'react';
import { Blob, PositionX, PositionY } from '../elements/blob';
import { BrandColor, getContrastColor, mapColorToBG } from '../utils/colors';

export type CardProps = {
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
  background: BrandColor;
  interactive?: boolean;
};

export const Card: FC<CardProps> = ({ children, background, interactive = false, blobs = [] }) => (
  <div
    className={`relative grid w-full h-full p-8 rounded overflow-hidden font-sans font-normal text-xxs lg:text-sm ${mapColorToBG(
      background
    )} ${
      interactive
        ? `cursor-pointer card-shadow-${getContrastColor(background)} transform transition-transform active:scale-[.99]`
        : ''
    }`}
  >
    <div className="grid z-10">{children}</div>
    {blobs.map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
