import { FC, ReactNode } from 'react';

type Props = {
  title: string;
  className?: string;
  children: ReactNode;
};

export const Explainer: FC<Props> = ({ children, title, className = '' }) => (
  <abbr title={title} className={`cursor-help ${className}`}>
    {children}
  </abbr>
);
