import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Heading2: FC<Props> = ({ children }) => (
  <h2 className="my-4 hyphens-auto font-sans text-base font-bold lg:text-xl">{children}</h2>
);
