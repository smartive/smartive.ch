'use client';

import { Logo, Navigation } from '@smartive/guetzli';
import { LazyMotion, domAnimation } from 'framer-motion';
import { usePlausible } from 'next-plausible';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';
import { classNames } from '../../utils/css';
import { PlausibleEvents } from '../../utils/tracking';

const Main = [
  { label: 'Angebot', link: '/angebot' },
  { label: 'Projekte', link: '/projekte' },
  { label: 'Team', link: '/team' },
  { label: 'Agentur', link: '/agentur' },
  { label: 'Blog', link: '/blog' },
  { label: 'Kontakt', link: '/kontakt' },
];

const Meta = [
  { label: '+41 44 552 55 99', link: 'tel:0041445525599' },
  { label: 'hello@smartive.ch', link: 'mailto:hello@smartive.ch' },
];

type Props = {
  children?: ReactNode;
  hasMargin?: boolean; // TODO: This can be removed, as soon as we moved all pages to dato.
  // Right now, we can't add margin to all pages, because the PageHeader component from Guetzli also has margin on it.
  // This would result in a double margin on all "old" pages (e.g. /was-ist/*)
};

export const Page: FC<Props> = ({ children, hasMargin = false }) => {
  const pathname = usePathname();
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <div>
      <LazyMotion strict features={domAnimation}>
        <Navigation
          mainLinks={Main}
          metaLinks={Meta}
          currentPathname={pathname ?? '/'}
          home={<Logo className="h-[21px] w-auto py-[4px]" />}
          linkWrapper={(props) => <NextLink legacyBehavior prefetch={false} {...props} />}
          onMetaLinkClick={(value: string) =>
            plausible('Contact Click', {
              props: {
                value,
                url: window?.location.toString(),
                component: 'navigation',
                device: 'desktop',
              },
            })
          }
          onHomeLinkContextMenu={() => (window.location.href = '/brand')}
        />
      </LazyMotion>
      <div className={classNames('min-h-[50vh] max-w-[100vw] p-4 lg:container lg:mx-auto', hasMargin && 'my-12 lg:my-48')}>
        {children}
      </div>
    </div>
  );
};
