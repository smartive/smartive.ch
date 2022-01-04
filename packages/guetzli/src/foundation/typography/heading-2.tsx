import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  noSpacing?: boolean;
};

export const Heading2: FC<Props> = ({ children, as: Tag = 'h2', className = '', noSpacing = false }) => (
  <Tag className={`font-sans font-bold text-base lg:text-xl ${noSpacing ? '' : 'mb-4 lg:mb-8'} ${className}`}>
    {children}
  </Tag>
);
