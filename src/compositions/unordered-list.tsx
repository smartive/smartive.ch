import React, { FC } from 'react';
import { Heading2 } from '../elements/heading-2';
import { Label } from '../elements/label';

type Props = {
  title: string;
  items: string[];
};

export const UnorderedList: FC<Props> = ({ title, items }) => (
  <>
    <Heading2>{title}</Heading2>
    <ul>
      {items.map((item) => (
        <li className="list-disc mb-2">
          <Label>{item}</Label>
        </li>
      ))}
    </ul>
  </>
);
