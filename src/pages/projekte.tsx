import Head from 'next/head';
import { Navigation } from '../components/navigation';

export default function Projekte() {
  return (
    <div>
      <Head>
        <title>Projekte.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>

      <main>Lueg üseri sexy customers 🔥</main>
    </div>
  );
}
