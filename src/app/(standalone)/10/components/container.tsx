import { FC, ReactNode, Suspense } from 'react';
import { Section } from './section';

export const Container: FC<{
  children: ReactNode;
  className?: string;
  year?: number;
}> = ({ children, className = '', year }) => (
  <Suspense>
    {/* Use Suspense to prevent prerender error from useSearchParams in Section. */}
    <Section className={className} year={year}>
      {children}
    </Section>
  </Suspense>
);
