import React, { FC } from 'react';
import { Heading2 } from '../elements/heading-2';

type Props = {
  title: string;
};

export const BlockList: FC<Props> = ({ title, children }) => (
  <div className="grid grid-flow-row gap-8 xl:gap-16 max-w-prose mx-auto">
    <Heading2>{title}</Heading2>
    {children}
  </div>
);
