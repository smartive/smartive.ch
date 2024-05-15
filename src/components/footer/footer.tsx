import { SwissMadeSoftwareLogo } from '@/components/logos/swiss-made-software';
import NextLink from 'next/link';
import { FC } from 'react';
import { BackToTop } from './back-to-top';
import { FooterLink } from './link';

const Address = {
  name: 'smartive AG',
  street: 'Pfingstweidstrasse 60',
  country: 'CH',
  postalCode: '8005',
  locality: 'Zürich',
  telephone: '+41 44 552 55 99',
  email: 'hello@smartive.ch',
} as const;

export const Footer: FC = () => (
  <footer className="bg-cornflower-500">
    <div className="container mx-auto h-full px-4 pb-8 pt-8 font-sans text-sm font-bold md:pt-24 lg:text-base xl:pt-32">
      <div className="grid grid-flow-row justify-between gap-4 md:grid-flow-col">
        <address
          className="grid grid-flow-row place-self-start not-italic"
          itemScope
          itemType="http://schema.org/Organization"
        >
          <span itemProp="name">{Address.name}</span>
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
            <span itemProp="streetAddress">{Address.street}</span>
            <br />
            <span itemProp="addressCountry">{Address.country}</span>-<span itemProp="postalCode">{Address.postalCode}</span>
            &nbsp;
            <span itemProp="addressLocality">{Address.locality}</span>
          </div>
          <span>
            <FooterLink href={`tel:${Address.telephone}`} itemProp="telephone">
              {Address.telephone}
            </FooterLink>
          </span>
          <span>
            <FooterLink href={`mailto:${Address.email}`} itemProp="email">
              {Address.email}
            </FooterLink>
          </span>
        </address>

        <div className="grid grid-flow-row justify-items-start place-self-end">
          <FooterLink href="https://www.linkedin.com/company/smartive-ag/" target="_blank">
            LinkedIn
          </FooterLink>
          <FooterLink href="https://www.instagram.com/smartive_ch/" target="_blank">
            Instagram
          </FooterLink>
          <div className="mt-4 justify-self-center">
            <NextLink
              href="/newsletter"
              className="inline-block rounded bg-black px-4 py-2 text-sm text-white-100 transition-transform duration-150 hover:scale-105 lg:py-3"
            >
              Newsletter abonnieren
            </NextLink>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row justify-center md:grid-flow-col md:justify-between">
        <SwissMadeSoftwareLogo />
        <BackToTop />
      </div>
    </div>
  </footer>
);
