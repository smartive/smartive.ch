import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ href: string; target?: string; rel?: string }>;

export const InlineLink: FC<Props> = ({ children, href, target, rel }) => (
  <NextLink
    href={href ?? '#'}
    target={target ?? '_self'}
    rel={rel}
    className="border-b-2 no-underline transition-colors hover:border-apricot-500 focus:outline-none"
  >
    {children}
  </NextLink>
);
