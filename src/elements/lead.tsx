import { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Lead: FC<Props> = ({ children, as: Tag = 'p', className = '' }) => (
  <Tag className={`font-sans font-normal text-base mt-8 first:mt-0 ${className}`}>{children}</Tag>
);
