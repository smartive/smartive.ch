'use client';

import { merge } from '@smartive/guetzli';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { Scroll } from 'scrollex';

export const Container: FC<{
  children: ReactNode;
  className?: string;
  year?: number;
}> = ({ children, className = '', year }) => {
  const router = useRouter();
  const { ref } = useInView({ onChange: (view) => view && router.push(`?year=${year}`), threshold: 0.2 });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Scroll.Section>
        <section
          ref={ref}
          className={merge([
            'relative mx-auto my-24 grid w-11/12 max-w-screen-xl grid-cols-12 gap-4 md:my-32 md:gap-6 lg:my-56 lg:gap-8',
            className,
          ])}
        >
          {children}
        </section>
      </Scroll.Section>
    </Suspense>
  );
};
