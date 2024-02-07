import PlausibleProvider from 'next-plausible';
import { draftMode } from 'next/headers';
import { Kube } from '../components/kube';
import '../styles/globals.css';
import { DraftModeBanner } from './api/draft-mode-banner';
import { ibm_plex, inter } from './fonts';
import { Footer } from './footer/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" id="top" className={`${inter.variable} ${ibm_plex.variable}`}>
      <head>
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!} />
      </head>
      <body className="bg-white-200 text-black">
        {draftMode().isEnabled && <DraftModeBanner />}
        {children}
        <Footer />
        <Kube />
      </body>
    </html>
  );
}
