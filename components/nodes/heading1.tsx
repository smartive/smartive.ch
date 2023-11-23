import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Heading1: FC<Props> = ({ children }) => (
  <h1 className="my-8 font-sans text-lg font-bold peer-[p&]:mt-8 md:max-w-prose lg:text-xxl lg:peer-[p&]:mt-12">
    {children}
  </h1>
);
