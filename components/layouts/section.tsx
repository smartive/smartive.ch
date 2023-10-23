import { FC, ReactNode } from 'react';
import { Heading2 } from '../nodes/heading2';

export type SectionProps = {
  title?: string;
  children?: ReactNode;
};

export const Section: FC<SectionProps> = ({ title, children }) => (
  <section className={`my-16 lg:my-48`}>
    {title && <Heading2>{title}</Heading2>}
    {children}
  </section>
);
