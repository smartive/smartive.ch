import React, { FC } from 'react';
import { Heading2 } from '../elements/heading-2';
import { Label } from '../elements/label';

type Props = {
  title?: string;
  items: string[];
};

export const UnorderedList: FC<Props> = ({ title, items }) => (
  <>
    {title && <Heading2>{title}</Heading2>}
    <ul className="list-inside">
      {items.map((item, i) => (
        <li key={i} className="list-disc mb-2">
          <Label>{item}</Label>
        </li>
      ))}
    </ul>
  </>
);
