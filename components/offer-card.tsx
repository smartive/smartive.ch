import { Clock } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';
import { classNames } from '../utils/css';
import { Heading3 } from './nodes';
import { UseClientWrapper } from './use-client-wrapper';

export type OfferColor = 'apricot' | 'mint' | 'cornflower';

type Props = {
  slug: string;
  title: string;
  timespan?: string | null;
  description?: string | null;
  linkLabel?: string | null;
  color?: OfferColor;
};

export const OfferCard: FC<Props> = ({ slug, title, timespan, description, linkLabel, color = 'apricot' }) => (
  <NextLink
    href={`/angebot/${slug}`}
    className={classNames(
      'card-shadow grid w-full grid-rows-[1fr,auto] gap-4 overflow-hidden rounded p-8 text-xxs text-black transition-transform active:scale-[.99] lg:gap-6 lg:text-sm',
      {
        apricot: 'bg-apricot-500',
        mint: 'bg-mint-500',
        cornflower: 'bg-cornflower-500',
      }[color],
    )}
  >
    <div className="space-y-6 lg:space-y-8">
      {timespan && (
        <div className="inline-flex flex-row items-center">
          <UseClientWrapper>
            <Clock className="mr-2 inline h-4 w-4" />
          </UseClientWrapper>
          {timespan}
        </div>
      )}
      <Heading3>{title}</Heading3>
      {description && <p>{description}</p>}
    </div>
    <div>
      <span className="border-b-2">{linkLabel ? linkLabel : 'Angebot anschauen'}</span>
    </div>
  </NextLink>
);
