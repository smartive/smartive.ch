import React, { FC } from 'react';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';

export type Props = {
  title: string;
  content: string;
};

export const TextBlock: FC<Props> = ({ title, content }) => (
  <div>
    <Heading3 as="p">{title}</Heading3>
    <Copy>{content}</Copy>
  </div>
);
