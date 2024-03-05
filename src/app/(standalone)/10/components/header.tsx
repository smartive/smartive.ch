import { merge } from '@smartive/guetzli';
import { FC, ReactNode } from 'react';

export const Header: FC<{
  children: ReactNode;
  side: 'right' | 'left';
  year: string;
}> = ({ children, year, side = 'left' }) => (
  <header className="relative">
    <div
      className={merge([
        'flex h-full items-center 2xl:absolute',
        side === 'left' ? 'flex-row 2xl:-left-48' : 'flex-row-reverse 2xl:-right-48',
      ])}
    >
      <span className={merge(['h-0.5 w-16 bg-white-100', side === 'left' ? 'mr-4' : 'ml-4'])} />
      <span className="text-sm font-bold lg:text-base">{year}</span>
    </div>
    {children}
  </header>
);
