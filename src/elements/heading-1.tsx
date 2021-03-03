import { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Heading1: FC<Props> = ({ children, as: Tag = 'h1', className = '' }) => (
  <Tag className={`font-sans font-bold text-xxl mb-8 ${className}`}>{children}</Tag>
);
