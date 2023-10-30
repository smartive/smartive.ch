import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { classNames } from '../../utils/css';

export const LinkColors = ['apricot', 'mint', 'cornflower'] as const;

type Props = PropsWithChildren<{ href: string; target?: string; rel?: string; color?: string }>;

export const Link: FC<Props> = ({ children, href, target, rel, color = 'apricot' }) => (
  <NextLink
    href={href ?? '#'}
    target={target ?? '_self'}
    rel={rel ?? undefined}
    className={classNames(
      'border-b-4 text-xxs font-bold no-underline transition-colors duration-150 hover:border-black lg:text-base',
      {
        apricot: 'border-apricot-500',
        mint: 'border-mint-500',
        cornflower: 'border-cornflower-500',
      }[color],
    )}
  >
    {children}
  </NextLink>
);
