import React, { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
};

export const Heading3: FC<Props> = ({ children, as: Tag = 'h3', className = '', ...props }) => (
  <Tag className={`font-sans font-bold text-sm lg:text-lg mb-4 lg:mb-8 ${className}`} {...props}>
    {children}
  </Tag>
);
