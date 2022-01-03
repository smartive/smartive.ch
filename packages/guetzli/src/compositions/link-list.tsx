import React, { FC, Key, MouseEventHandler } from 'react';
import { Link, LinkVariants } from '../elements/link';

export type LinkListProps = {
  links: { label: string; href: string; onClick?: MouseEventHandler }[];
  linkWrapper?: FC<{ key: Key; href: string }>;
};

const UnderlineColors = ['border-apricot-500', 'border-mint-500', 'border-cornflower-500'] as const;

export const LinkList: FC<LinkListProps> = ({ links, linkWrapper }) => (
  <div className="flex flex-wrap justify-start text-xxs lg:text-base font-bold">
    {links.map(({ label, href, onClick }, index) => {
      const link = (
        <Link
          variant={LinkVariants.Feature}
          onClick={onClick}
          href={href}
          key={label}
          className={`${UnderlineColors[index % 3]} hover:border-black mr-8 last:mr-0 mb-2`}
        >
          {label}
        </Link>
      );

      return linkWrapper ? linkWrapper({ href, children: link, key: label }) : link;
    })}
  </div>
);
