import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Heading3: FC<Props> = ({ children }) => (
  <h3 className="my-4 hyphens-auto font-sans text-sm font-bold lg:text-lg">{children}</h3>
);
