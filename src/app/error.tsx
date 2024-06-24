'use client';

import { Page } from '@/components/layouts/page';
import { Link } from '@/components/nodes';
import { Metadata } from 'next';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Ooops! — smartive',
};

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Page>
      <div className="my-32 grid grid-flow-row justify-items-center">
        <div className="mt-16 space-y-8 text-center font-sans text-sm font-bold lg:text-lg">
          <h1>Ooops, da ist leider ist leider etwas schief gelaufen ...</h1>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            <Link href="/" color="apricot">
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
}
