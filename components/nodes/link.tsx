import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';

export const LinkColors = ['apricot', 'mint', 'cornflower'] as const;

type Props = PropsWithChildren<{ href: string; target?: string; rel?: string; color?: string }>;

export const Link: FC<Props> = ({ children, href, target, rel, color = 'apricot' }) => (
  <NextLink
    href={href ?? '#'}
    target={target ?? '_self'}
    rel={rel ?? undefined}
    className={`border-b-4 border-${color}-500 text-xxs font-bold no-underline transition-colors duration-150 hover:border-black lg:text-base`}
  >
    {children}
  </NextLink>
);
