import React, { FC } from 'react';
import { Url } from 'url';
import { Link, LinkVariants } from '../elements/link';

type Props = {
  links: { label: string; href: Url | string }[];
};

const UnderlineColors = ['border-apricot-500', 'border-mint-500', 'border-cornflower-500'] as const;
const UnderlineHoverColors = ['hover:border-apricot-800', 'hover:border-mint-800', 'hover:border-cornflower-800'] as const;

export const LinkList: FC<Props> = ({ links }) => (
  <div className="flex flex-wrap justify-start text-xxs lg:text-base font-bold">
    {links.map(({ label, href }, index) => (
      <Link
        variant={LinkVariants.Feature}
        href={href}
        key={label}
        className={`${UnderlineColors[index % 3]} ${UnderlineHoverColors[index % 3]} pb-1 mr-8 last:mr-0 mb-2`}
      >
        {label}
      </Link>
    ))}
  </div>
);
