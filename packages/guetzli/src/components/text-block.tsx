import React, { FC, ReactNode } from 'react';
import { Link } from '../elements/link';
import { Copy } from '../identity/copy';
import { Heading3 } from '../identity/heading-3';

export type TextBlockProps = {
  title: string;
  link?: { label: string; href: string };
  number?: number;
  unit?: string;
  highlightNumber?: boolean;
  children: ReactNode;
};

export const TextBlock: FC<TextBlockProps> = ({ title, children, link, number, unit, highlightNumber = false }) => (
  <div>
    {number && (
      <p className={`text-xl lg:text-xxl font-bold ${highlightNumber ? 'fancy-text' : ''}`}>
        {new Intl.NumberFormat('de-CH').format(number)}
        {unit ? ` ${unit}` : ''}
      </p>
    )}
    <Heading3 as="p">{title}</Heading3>
    <Copy className={link ? 'mb-8' : ''}>{children}</Copy>
    {link && <Link href={link.href}>{link.label}</Link>}
  </div>
);
