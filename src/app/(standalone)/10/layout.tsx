'use client';

import { ReactNode } from 'react';
import { Scroll } from 'scrollex';
import { TenHead } from './components/ten-head';

const Layout = ({ children }: { children: ReactNode }) => (
  <Scroll.Container scrollAxis="y" className="h-screen font-sans">
    <TenHead />
    <main className="relative overflow-hidden bg-black text-white-100">{children}</main>
  </Scroll.Container>
);

export default Layout;
