import { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Copy: FC<Props> = ({ children, as: Tag = 'p', className = '' }) => (
  <Tag className={`font-sans font-normal text-xxs mb-4 lg:text-sm max-w-prose ${className}`}>{children}</Tag>
);
