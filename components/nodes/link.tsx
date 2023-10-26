import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';

export const LinkColors = ['apricot', 'mint', 'cornflower'] as const;

const colorClassNames = {
  apricot: 'border-apricot-500',
  mint: 'border-mint-500',
  cornflower: 'border-cornflower-500',
};

type Props = PropsWithChildren<{ href: string; target?: string; rel?: string; color?: string }>;

export const Link: FC<Props> = ({ children, href, target, rel, color = 'apricot' }) => (
  <NextLink
    href={href ?? '#'}
    target={target ?? '_self'}
    rel={rel ?? undefined}
    className={`border-b-4 text-xxs font-bold no-underline transition-colors duration-150 hover:border-black lg:text-base ${colorClassNames[color]}`}
  >
    {children}
  </NextLink>
);
