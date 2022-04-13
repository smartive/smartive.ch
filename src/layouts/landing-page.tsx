import { FC, ReactNode } from 'react';
import LogoHeader from '../components/logo-header';

type Props = {
  children?: ReactNode;
};

export const LandingPage: FC<Props> = ({ children }) => {
  return (
    <div>
      <LogoHeader />
      <div id="pageContent" className="lg:container lg:mx-auto px-4 pt-8">
        {children}
      </div>
    </div>
  );
};
