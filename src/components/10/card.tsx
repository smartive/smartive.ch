import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Card: FC<Props> = ({ children }) => (
  <div className="bg-conic-gradient rounded p-1">
    <div className="bg-white-100 rounded p-8 text-black">{children}</div>
  </div>
);
