import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AnniversaryPage: FC<Props> = ({ children }) => (
  <div className="bg-black text-white-200 overflow-auto">
    <div id="pageContent" className="lg:container lg:mx-auto px-4 pt-8 relative">
      {children}
    </div>
  </div>
);
