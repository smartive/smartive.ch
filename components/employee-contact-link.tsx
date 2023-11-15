'use client';

import { TextLink } from '@smartive/guetzli';
import { usePlausible } from 'next-plausible';
import { FC, PropsWithChildren } from 'react';
import { PlausibleEvents } from '../utils/tracking';

type Props = PropsWithChildren<{
  href: string;
}>;

export const EmployeeContactLink: FC<Props> = ({ href, children }) => {
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <TextLink
      key={href}
      href={href}
      onClick={() => {
        plausible('Contact Click', {
          props: {
            value: href,
            component: 'employee-card',
            url: window?.location.toString(),
          },
        });
      }}
    >
      {children}
    </TextLink>
  );
};
