import React, { FC, ReactNode } from 'react';
import { BrandColor, mapColorToText } from '../foundation/colors/colors';

export type IconListProps = {
  items: ReactNode[];
  icon: FC<{ className?: string }>;
  iconColor?: BrandColor;
};

export const IconList: FC<IconListProps> = ({ items, icon, iconColor = 'cornflower' }) => (
  <ul className="flex flex-col lg:text-base">
    {items.map((item, i) => (
      <li key={i} className="flex items-baseline">
        {icon({
          className: `relative w-3 lg:w-4 flex-shrink-0 top-[2px] lg:top-[0] mr-2 lg:mr-4 ${mapColorToText(iconColor)}`,
        })}
        {item}
      </li>
    ))}
  </ul>
);
