import { FC, ReactNode } from 'react';
import LogoHeader from '../components/logo-header';

type Props = {
  children?: ReactNode;
  lang?: string;
};

export const LandingPage: FC<Props> = ({ children, lang }) => {
  return (
    <div lang={lang}>
      <LogoHeader />
      <div id="pageContent" className="px-4 pt-8 lg:container lg:mx-auto">
        {children}
      </div>
    </div>
  );
};
