import React, { FC, ReactNode } from 'react';

export type ExplainerProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export const Explainer: FC<ExplainerProps> = ({ children, title, className = '' }) => (
  <abbr title={title} className={`cursor-help ${className}`}>
    {children}
  </abbr>
);
