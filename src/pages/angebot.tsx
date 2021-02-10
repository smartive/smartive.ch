import Head from 'next/head';
import { Navigation } from '../components/navigation';

export default function Angebot() {
  return (
    <div>
      <Head>
        <title>Crazy Angebots-Titel.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>

      <main>Unser Angebot. Nur Rabatte.</main>
    </div>
  );
}
