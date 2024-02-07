'use client';

import { Logo, Navigation } from '@smartive/guetzli';
import { LazyMotion, domAnimation } from 'framer-motion';
import { usePlausible } from 'next-plausible';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';
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
  landingPageLayout?: boolean;
  children?: ReactNode;
};

export const Page: FC<Props> = ({ landingPageLayout, children }) => {
  const pathname = usePathname();
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <>
      {landingPageLayout ? (
        <header className="py-4 text-center font-sans text-xs font-bold">
          <NextLink href="/" title="zur Startseite">
            <Logo className="mx-auto h-[21px] w-auto py-[4px]" />
          </NextLink>
        </header>
      ) : (
        <header>
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
                  },
                })
              }
              onHomeLinkContextMenu={() => (window.location.href = '/brand')}
            />
          </LazyMotion>
        </header>
      )}
      <main className="mx-auto min-h-[70vh] w-11/12 max-w-[1536px]">{children}</main>
    </>
  );
};
