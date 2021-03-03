import React, { FC } from 'react';
import { Url } from 'url';
import { Link, LinkVariants } from '../elements/link';

type Props = {
  links: { label: string; href: Url | string }[];
};

const UnderlineColors = ['border-apricot-500', 'border-mint-500', 'border-cornflower-500'] as const;
const UnderlineHoverColors = ['hover:border-apricot-800', 'hover:border-mint-800', 'hover:border-cornflower-800'] as const;

export const LinkList: FC<Props> = ({ links }) => (
  <div className="inline-block text-base font-bold h-9">
    {links.map(({ label, href }, index) => (
      <Link
        variant={LinkVariants.Feature}
        href={href}
        key={index}
        className={`${UnderlineColors[index % 3]} ${UnderlineHoverColors[index % 3]} pb-1 ml-8 first:ml-0`}
      >
        {label}
      </Link>
    ))}
  </div>
);
