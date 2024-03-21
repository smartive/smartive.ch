'use client';

import { classNames } from '@smartive/guetzli';
import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Scroll } from 'scrollex';
import { useYearQuery } from '../use-year-query';

export const Section: FC<{
  children: ReactNode;
  className?: string;
  year?: number;
}> = ({ children, className = '', year = 2012 }) => {
  const [, setVisibleYear] = useYearQuery();

  const { ref } = useInView({ onChange: (view) => view && void setVisibleYear(year), threshold: 0.2 });

  return (
    <Scroll.Section>
      <section
        ref={ref}
        className={classNames(
          'relative mx-auto my-24 grid w-11/12 max-w-screen-xl grid-cols-12 gap-4 md:my-32 md:gap-6 lg:my-56 lg:gap-8',
          className,
        )}
      >
        {children}
      </section>
    </Scroll.Section>
  );
};
