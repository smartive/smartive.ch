import { FC } from 'react';
import { Heading2 } from '../elements/heading-2';

type Props = {
  title?: string;
};

export const PageSection: FC<Props> = ({ title, children }) => (
  <section className="my-16 lg:my-48">
    {title && <Heading2>{title}</Heading2>}
    {children}
  </section>
);
