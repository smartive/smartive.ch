import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Heading3: FC<Props> = ({ children }) => (
  <h3 className="my-4 font-sans text-sm font-bold peer-[p&]:mt-6 lg:text-lg lg:peer-[p&]:mt-8">{children}</h3>
);
