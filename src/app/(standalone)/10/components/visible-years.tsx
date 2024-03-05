'use client';

import { AnimatePresence, motion } from 'framer-motion';
import NextLink from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { ResponsiveImageType } from 'react-datocms/image';
import { Avatar } from '../elements/avatar';
import { fireConfetti } from './fire-confetti';

export const VisibleYears: FC<{
  employees: {
    name: string;
    start: number;
    image: ResponsiveImageType;
  }[];
}> = ({ employees }) => {
  const searchParams = useSearchParams();
  const visibleYear = parseInt(searchParams?.get('year') ?? '');

  const avatars = employees.filter(({ start }) => start <= visibleYear);

  return (
    <div className="fixed bottom-0 z-50 hidden w-full py-4 lg:block">
      {visibleYear ? (
        <div className="mx-auto flex max-w-screen-xl justify-center text-[0px]">
          <motion.div
            layout
            className="inline-flex flex-row justify-center rounded-full bg-white-200 px-[1.3rem] py-1 shadow-sm"
          >
            <AnimatePresence>
              {avatars.map(({ name, image }) => (
                <NextLink href={`/team#${name}`} passHref key={name}>
                  <motion.a
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.3, y: -10, padding: '0px 1.5rem' }}
                    className="-ml-3 -mr-3 block h-full overflow-visible hover:z-50"
                  >
                    <Avatar image={image} />
                  </motion.a>
                </NextLink>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ) : null}
      <div className="fixed bottom-5 right-5 scale-100 rounded-full bg-conic-gradient p-1 shadow-sm transition-transform hover:rotate-6 hover:scale-110">
        <button
          className=" bg-white flex h-12 w-12 items-center justify-center rounded-full bg-white-200"
          onClick={fireConfetti}
        >
          🎉
        </button>
      </div>
    </div>
  );
};
