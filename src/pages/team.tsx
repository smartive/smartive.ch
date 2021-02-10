import Head from 'next/head';
import { Navigation } from '../components/navigation';

export default function Team() {
  return (
    <div>
      <Head>
        <title>Schöni Mensche - nur.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>

      <main>Mega viel schöni Mensche mit Bildli</main>
    </div>
  );
}
