import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Card: FC<Props> = ({ children }) => (
  <div className="rounded bg-conic-gradient p-1">
    <div className="rounded bg-white-100 p-8 text-black">{children}</div>
  </div>
);
