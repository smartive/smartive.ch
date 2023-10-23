import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export const Paragraph: FC<Props> = ({ children }) => (
  <p className="my-4 font-sans text-xs md:max-w-prose lg:my-8 lg:text-base">{children}</p>
);
