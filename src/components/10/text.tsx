import { FC, ReactNode } from 'react';

export const Text: FC<{ children: ReactNode; as?: keyof JSX.IntrinsicElements }> = ({ children, as: Tag = 'p' }) => (
  <Tag className="font-sans font-normal text-xs md:text-sm lg:text-base mb-4 lg:mb-8">{children}</Tag>
);
