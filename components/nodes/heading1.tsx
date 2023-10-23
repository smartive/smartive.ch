import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Heading1: FC<Props> = ({ children }) => (
  <h1 className="mb-8 font-sans text-lg font-bold md:max-w-prose lg:text-xxl">{children}</h1>
);
