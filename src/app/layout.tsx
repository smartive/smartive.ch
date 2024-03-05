import '@/styles/globals.css';
import PlausibleProvider from 'next-plausible';
import { ibm_plex, inter } from './fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="de" id="top" className={`${inter.variable} ${ibm_plex.variable}`}>
    <head>
      <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN!} />
    </head>
    <body className="bg-white-200 text-black">{children}</body>
  </html>
);

export default RootLayout;
