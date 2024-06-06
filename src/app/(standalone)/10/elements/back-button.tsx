import NextLink from 'next/link';
import { FC } from 'react';

export const BackButton: FC = () => (
  <div className="fixed bottom-0 z-50 hidden w-full py-8 lg:block">
    <div className="fixed bottom-5 right-5 scale-100 rounded-full bg-conic-gradient p-1 shadow-sm transition-transform hover:rotate-6 hover:scale-110">
      <NextLink className="bg-white flex h-12 w-12 items-center justify-center rounded-full bg-white-200" href="/10">
        🔙
      </NextLink>
    </div>
  </div>
);
