import React, { FC } from 'react';
import { Url } from 'url';
import { Link } from '../elements/link';
import { Copy } from '../identity/copy';
import { Heading3 } from '../identity/heading-3';

type Props = {
  title: string;
  link?: { label: string; href: Url | string };
  number?: number;
  highlightNumber?: boolean;
};

export const TextBlock: FC<Props> = ({ title, children, link, number, highlightNumber = false }) => (
  <div>
    {number && (
      <p className={`text-xl lg:text-xxl font-bold ${highlightNumber ? 'fancy-text' : ''}`}>
        {new Intl.NumberFormat('de-CH').format(number)}
      </p>
    )}
    <Heading3 as="p">{title}</Heading3>
    <Copy className={link ? 'mb-8' : ''}>{children}</Copy>
    {link && <Link href={link.href}>{link.label}</Link>}
  </div>
);
