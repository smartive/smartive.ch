import NextLink from 'next/link';
import { FC } from 'react';

export const NewsletterButton: FC = () => (
  <NextLink
    href="https://eepurl.com/ggEjx5"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded bg-black px-4 py-3 text-sm text-white-100 transition-transform duration-150 hover:scale-105"
  >
    Newsletter abonnieren
  </NextLink>
);
