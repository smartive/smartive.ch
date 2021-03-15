import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';
import { Navigation } from '../components/navigation';
import { Footer } from '../compositions/footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <div className="min-h-screen grid grid-rows-headerFooter lg:container lg:mx-auto px-4 pt-8">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
      </Head>
      <Navigation />
      <AnimatePresence>
        <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
