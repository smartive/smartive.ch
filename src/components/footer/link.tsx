import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ href: string; target?: string; rel?: string; itemProp?: string }>;

export const FooterLink: FC<Props> = ({ children, href, itemProp, target, rel }) => (
  <NextLink
    href={href ?? '#'}
    target={target ?? '_self'}
    rel={rel}
    itemProp={itemProp}
    className="border-b-2 border-transparent no-underline transition-colors duration-150 hover:border-black"
  >
    {children}
  </NextLink>
);
