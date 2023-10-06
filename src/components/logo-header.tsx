import { Logo, NavItem } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';

const LogoHeader: FC = () => (
  <header className="py-4 text-center font-sans text-xs font-bold">
    <nav>
      <NextLink href="/" passHref legacyBehavior>
        <NavItem href="/">
          <Logo className="mx-auto h-[21px] w-auto py-[4px]" />
        </NavItem>
      </NextLink>
    </nav>
  </header>
);

export default LogoHeader;
