import Head from 'next/head';
import { Navigation } from '../components/navigation';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wir erschaffen digitale Produkte. Zusammen mit dir.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navigation />
      </header>

      <h1 className="font-bold font-sans text-6xl">
        Wir erschaffen <em className="font-serif font-normal">digitale</em> Produkte. Zusammen mit dir.
      </h1>

      <main>
        <p className="text-cornflower-500 bg-apricot-500">eine erste Homepage</p>
      </main>
    </div>
  );
}
