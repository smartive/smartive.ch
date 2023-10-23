import { Metadata } from 'next';
import { CryingCloud } from '../components/crying-cloud';
import { Page } from '../components/layouts/page';
import { Link } from '../components/nodes/link';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden — smartive',
};

const NotFound = () => {
  return (
    <Page>
      <div className="my-32 grid grid-flow-row justify-items-center">
        <CryingCloud />
        <div className="mt-16 space-y-8 text-center font-sans text-sm font-bold lg:text-lg">
          <h1>Ooops, scheint als ob es hier nichts zu sehen gibt ...</h1>
          <p>Du könntest stattdessen:</p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            <Link href="/projekte" color="apricot">
              Unsere Projekte ansehen
            </Link>
            <Link href="/blog" color="mint">
              In unserem Blog stöbern
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default NotFound;
