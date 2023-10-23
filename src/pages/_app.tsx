import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { Scroll } from 'scrollex';
import { ibm_plex, inter } from '../../app/fonts';
import { Footer } from '../../app/footer/footer';
import '../../styles/globals.css';
import { useKube } from '../components/kube';

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_ENABLED = process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED === 'true';

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  useKube();

  return (
    <PlausibleProvider domain={PLAUSIBLE_DOMAIN || ''} enabled={PLAUSIBLE_ENABLED}>
      <div className={`grid min-h-screen grid-rows-[auto,1fr,auto] overflow-hidden ${inter.variable} ${ibm_plex.variable}`}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
          />
        </Head>
        {pathname === '/10' || pathname?.startsWith('/10/') ? (
          <Scroll.Container scrollAxis="y" className="h-screen font-sans">
            <Component {...pageProps} />
            <Footer />
          </Scroll.Container>
        ) : (
          <div className="font-sans">
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
      </div>
    </PlausibleProvider>
  );
}
