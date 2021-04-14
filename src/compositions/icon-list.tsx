import React, { FC, ReactNode } from 'react';
import { BrandColor, mapColorToText } from '../utils/colors';

type Props = {
  items: ReactNode[];
  icon: FC<{ className?: string }>;
  iconColor?: BrandColor;
};

export const IconList: FC<Props> = ({ items, icon, iconColor = 'cornflower' }) => (
  <ul className="flex flex-col">
    {items.map((item, i) => (
      <li key={i} className="flex">
        {icon({
          className: `relative w-3 lg:w-4 flex-shrink-0 top-[4px] lg:top-[10px] mr-2 lg:mr-4 ${mapColorToText(iconColor)}`,
        })}
        {item}
      </li>
    ))}
  </ul>
);
