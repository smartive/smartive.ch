import Head from 'next/head';
import { Navigation } from '../components/navigation';

export default function Agentur() {
  return (
    <div>
      <Head>
        <title>Anderscht als di andere</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>

      <main>
        Unsere Geschäftsleitung hat uns ausgebremst. Also haben wir sie <em>abgeschafft</em>.
      </main>
    </div>
  );
}
