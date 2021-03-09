import { FC } from 'react';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Heading2: FC<Props> = ({ children, as: Tag = 'h2', className = '' }) => (
  <Tag className={`font-sans font-bold text-base lg:text-xl mb-8 ${className}`}>{children}</Tag>
);
