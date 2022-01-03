import React, { FC } from 'react';
import LogoHeader from '../components/logo-header';

export const LandingPage: FC = ({ children }) => {
  return (
    <div>
      <LogoHeader />
      <div id="pageContent" className="lg:container lg:mx-auto px-4 pt-8">
        {children}
      </div>
    </div>
  );
};
