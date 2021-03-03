import { FC } from 'react';
import { Heading2 } from '../elements/heading-2';

type Props = {
  title?: string;
};

export const PageSection: FC<Props> = ({ title, children }) => (
  <div className="my-48">
    {title && <Heading2>{title}</Heading2>}
    {children}
  </div>
);
