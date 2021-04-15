import React, { FC } from 'react';
import { Link, LinkVariants } from '../elements/link';
import { Logo } from '../identity/logo';

const LogoHeader: FC = () => (
  <header className="text-center font-sans font-bold text-xs py-4">
    <nav>
      <Link variant={LinkVariants.Navigation} href="/">
        <Logo className="h-[21px] w-auto py-[4px] mx-auto" />
      </Link>
    </nav>
  </header>
);

export default LogoHeader;
