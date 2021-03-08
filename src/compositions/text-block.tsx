import React, { FC } from 'react';
import { Url } from 'url';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';
import { Link } from '../elements/link';

export type Props = {
  title: string;
  content: string;
  link?: { label: string; href: Url | string };
};

export const TextBlock: FC<Props> = ({ title, content, link }) => (
  <div>
    <Heading3 as="p">{title}</Heading3>
    <Copy className={link && 'mb-8'}>{content}</Copy>
    {link && <Link href={link.href}>{link.label}</Link>}
  </div>
);
