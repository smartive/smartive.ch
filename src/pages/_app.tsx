import type { AppProps } from 'next/app';
import React from 'react';
import { Footer } from '../compositions/footer';
import { Navigation } from '../components/navigation';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen grid grid-rows-headerFooter md:container md:mx-auto md:px-4 md:pt-8">
      <header>
        <Navigation />
      </header>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
