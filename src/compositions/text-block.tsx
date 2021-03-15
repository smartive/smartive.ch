import React, { FC } from 'react';
import { Url } from 'url';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';
import { Link } from '../elements/link';

type Props = {
  title: string;
  link?: { label: string; href: Url | string };
  number?: number;
};

export const TextBlock: FC<Props> = ({ title, children, link, number }) => (
  <div>
    {number && <p className="text-xl lg:text-xxl font-bold">{new Intl.NumberFormat('de-CH').format(number)}</p>}
    <Heading3 as="p">{title}</Heading3>
    <Copy className={link ? 'mb-8' : ''}>{children}</Copy>
    {link && <Link href={link.href}>{link.label}</Link>}
  </div>
);
