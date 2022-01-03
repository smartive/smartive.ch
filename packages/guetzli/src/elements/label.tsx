import React, { FC, ReactNode } from 'react';

export type LabelProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
};

export const Label: FC<LabelProps> = ({ children, as: Tag = 'span', className = '' }) => (
  <Tag className={`font-sans font-bold text-sm lg:text-base ${className}`}>{children}</Tag>
);
