'use client';

import { Button } from '@smartive/guetzli';
import { FC, PropsWithChildren } from 'react';
import { fireConfetti } from './fire-confetti';

export const ConfettiLink: FC<PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <div className="shrink">
    <Button as="a" href={href} onMouseEnter={fireConfetti}>
      {children}
    </Button>
  </div>
);
