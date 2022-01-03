import { Link, LinkVariants, Logo } from '@smartive/guetzli';
import NextLink from 'next/link';
import React, { FC } from 'react';

const LogoHeader: FC = () => (
  <header className="text-center font-sans font-bold text-xs py-4">
    <nav>
      <NextLink href="/" passHref>
        <Link variant={LinkVariants.Navigation}>
          <Logo className="h-[21px] w-auto py-[4px] mx-auto" />
        </Link>
      </NextLink>
    </nav>
  </header>
);

export default LogoHeader;
