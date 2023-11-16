'use client';

import { usePlausible } from 'next-plausible';
import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { PlausibleEvents } from '../utils/tracking';

type Props = PropsWithChildren<{
  href: string;
}>;

export const EmployeeContactLink: FC<Props> = ({ href, children }) => {
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <NextLink
      href={href}
      target="_blank"
      onClick={() => {
        plausible('Contact Click', {
          props: {
            value: href,
            component: 'employee-card',
            url: window?.location.toString(),
          },
        });
      }}
      className="border-b-2 no-underline transition-colors hover:border-apricot-500 focus:outline-none"
    >
      {children}
    </NextLink>
  );
};
