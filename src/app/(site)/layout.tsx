import { Footer } from '@/components/footer/footer';
import { Kube } from '@/components/kube';
import '@/styles/globals.css';
import { draftMode } from 'next/headers';
import { ReactNode } from 'react';
import { DraftModeBanner } from './api/draft-mode-banner';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    {draftMode().isEnabled && <DraftModeBanner />}
    {children}
    <Footer />
    <Kube />
  </>
);

export default Layout;
