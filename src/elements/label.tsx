import { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Label: FC<Props> = ({ children, as: Tag = 'span', className = '' }) => (
  <Tag className={`font-sans font-bold text-sm ${className}`}>{children}</Tag>
);
