import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { classNames } from '../../utils/css';

export const LinkColors = ['apricot', 'mint', 'cornflower'] as const;

type Props = PropsWithChildren<{ href: string; target?: string; rel?: string; title?: string; color?: string }>;

export const Link: FC<Props> = ({ children, href, target, rel, title, color = 'apricot' }) => (
  <NextLink
    href={href ?? '#'}
    target={target ?? '_self'}
    rel={rel}
    className={classNames(
      'peer border-b-4 text-xxs font-bold no-underline transition-colors duration-150 hover:border-black peer-[a&]:ml-4 lg:text-base lg:peer-[a&]:ml-8',
      {
        apricot: 'border-apricot-500',
        mint: 'border-mint-500',
        cornflower: 'border-cornflower-500',
      }[color],
    )}
    title={title}
  >
    {children}
  </NextLink>
);
