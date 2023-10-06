import { animate } from 'motion';
import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Scroll } from 'scrollex';
import { Footer } from '../components/footer';
import { useKube } from '../components/kube';
import '../styles/globals.css';

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_ENABLED = process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED === 'true';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  useKube();
  useEffect(() => {
    animate(
      '#pageContent',
      {
        opacity: [null, 1],
      },
      { duration: 0.2 },
    );
  }, [pathname]);

  return (
    <PlausibleProvider domain={PLAUSIBLE_DOMAIN} enabled={PLAUSIBLE_ENABLED}>
      <div className="grid min-h-screen grid-rows-[auto,1fr,auto] overflow-hidden">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
          />
        </Head>
        {pathname === '/10' || pathname.startsWith('/10/') ? (
          <Scroll.Container scrollAxis="y" className="h-screen">
            <Component {...pageProps} />
            <Footer />
          </Scroll.Container>
        ) : (
          <>
            <Component {...pageProps} />
            <Footer />
          </>
        )}
      </div>
    </PlausibleProvider>
  );
}
