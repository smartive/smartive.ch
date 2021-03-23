import React, { FC, ReactNode } from 'react';
import { Label } from '../elements/label';
import { Heading2 } from '../identity/heading-2';
import { BrandColor, mapColorToText } from '../utils/colors';

type Props = {
  title?: string;
  items: ReactNode[];
  markerColor?: BrandColor;
};

export const UnorderedList: FC<Props> = ({ title, items, markerColor }) => (
  <div>
    {title && <Heading2>{title}</Heading2>}
    <ul className="list-none">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[auto,1fr] mb-2">
          <svg
            className={`mr-4 ${markerColor ? mapColorToText(markerColor) : 'text-black'}`}
            width="36"
            height="36"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10.5" y="10" width="12" height="12" rx="6" fill="currentColor" />
          </svg>
          <Label className="text-black">{item}</Label>
        </li>
      ))}
    </ul>
  </div>
);
