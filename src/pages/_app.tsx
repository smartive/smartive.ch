import { animate } from 'motion';
import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Footer } from '../components/footer';
import { useKube } from '../components/kube';
import '../styles/globals.css';

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_ENABLED = process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED === 'true';

const PrismicPreviewBar = dynamic(
  () => import('../components/prismic-preview-bar').then((module) => module.PrismicPreviewBar),
  {
    ssr: false,
  }
);

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
        {!!pageProps?.prismicPreview && <PrismicPreviewBar />}
        <Component {...pageProps} />
        <Footer />
      </div>
    </PlausibleProvider>
  );
}
