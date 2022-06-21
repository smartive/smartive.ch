import { merge } from '@smartive/guetzli';
import { FC, ReactNode } from 'react';

type Base = {
  children: ReactNode;
  as?: 'a' | 'button';
  inverted?: boolean;
};

type Link = {
  as: 'a';
  href: string;
  onMouseEnter?: () => void;
} & Base;

type Button = {
  as: 'button';
  onClick?(e): void;
} & Base;

export const Button: FC<Button | Link> = ({ children, as: Tag = 'button', inverted = false, ...rest }) => (
  <Tag
    className={merge([
      'rounded-full  px-8 py-3 font-sans text-sm font-bold transition-transform scale-100 inline-block hover:scale-105',
      inverted ? 'bg-white-100 text-black' : 'bg-black text-white-100',
    ])}
    {...rest}
  >
    {children}
  </Tag>
);
