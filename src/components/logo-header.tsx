import React, { FC } from 'react';
import { Link, LinkVariants } from '../elements/link';

const LogoHeader: FC = () => (
  <header className="text-center font-sans font-bold text-xs py-4">
    <nav>
      <Link variant={LinkVariants.Navigation} href="/">
        smartive
      </Link>
    </nav>
  </header>
);

export default LogoHeader;
