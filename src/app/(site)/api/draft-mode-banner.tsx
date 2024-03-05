'use client';

import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const DraftModeBanner: FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center justify-center gap-2 bg-apricot-500 p-2 text-xxs font-bold">
      <span>Draft Mode is enabled –</span>
      <a
        href={`/api/draft/disable?url=${pathname}`}
        className="rounded bg-apricot-200 px-2 transition-colors hover:bg-white-200"
        title="Disable Draft Mode"
      >
        Disable
      </a>
    </div>
  );
};
