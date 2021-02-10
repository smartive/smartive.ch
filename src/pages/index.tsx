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

      <main>Meine erste Homepage</main>
    </div>
  );
}
