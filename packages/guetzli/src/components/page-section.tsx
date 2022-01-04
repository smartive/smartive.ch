import React, { FC, ReactNode } from 'react';
import { Heading2 } from '../foundation/typography/heading-2';

export type PageSectionProps = {
  title?: string;
  children?: ReactNode;
};

export const PageSection: FC<PageSectionProps> = ({ title, children }) => (
  <section className="my-16 lg:my-48">
    {title && <Heading2>{title}</Heading2>}
    {children}
  </section>
);
