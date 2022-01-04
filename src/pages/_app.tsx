import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Footer } from '../components/footer';
import { useKube } from '../components/kube';
import '../styles/globals.css';
import { animate } from 'motion';
import { useRouter } from 'next/router';

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
      { duration: 0.2 }
    );
  }, [pathname]);

  return (
    <PlausibleProvider domain={PLAUSIBLE_DOMAIN} enabled={PLAUSIBLE_ENABLED}>
      <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
        <Footer />
      </div>
    </PlausibleProvider>
  );
}
