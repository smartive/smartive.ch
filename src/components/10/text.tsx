import { FC, ReactNode } from 'react';

export const Text: FC<{ children: ReactNode; as?: keyof JSX.IntrinsicElements }> = ({ children, as: Tag = 'p' }) => (
  <Tag className="mb-4 font-sans text-xs font-normal md:text-sm lg:mb-8 lg:text-base">{children}</Tag>
);
