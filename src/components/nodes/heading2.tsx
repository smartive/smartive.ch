import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Heading2: FC<Props> = ({ children }) => (
  <h2 className="my-4 font-sans text-base font-bold peer-[p&]:mt-6 md:text-lg lg:text-xl lg:peer-[p&]:mt-10">{children}</h2>
);
