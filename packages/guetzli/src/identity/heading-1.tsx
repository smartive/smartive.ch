import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Heading1: FC<Props> = ({ children, as: Tag = 'h1', className = '' }) => (
  <Tag className={`font-sans font-bold text-lg lg:text-xxl md:max-w-prose mb-8 ${className}`}>{children}</Tag>
);
