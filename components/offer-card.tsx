import { Clock } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';
import { classNames } from '../utils/css';
import { Heading3 } from './nodes';
import { UseClientWrapper } from './use-client-wrapper';

export type OfferCardColor = 'apricot' | 'mint' | 'cornflower';

type Props = {
  title: string;
  timespan?: string;
  description?: string;
  link: string;
  linkLabel?: string;
  color?: OfferCardColor;
};

export const OfferCard: FC<Props> = ({ title, timespan, description, link, linkLabel, color = 'apricot' }) => (
  <NextLink
    href={link}
    className={classNames(
      'card-shadow grid w-full grid-rows-[auto,1fr,auto] gap-4 overflow-hidden rounded p-8 text-xxs text-black transition-transform active:scale-[.99] lg:gap-6 lg:text-sm',
      {
        apricot: 'bg-apricot-500',
        mint: 'bg-mint-500',
        cornflower: 'bg-cornflower-500',
      }[color],
    )}
  >
    {timespan && (
      <div className="inline-flex flex-row items-center">
        <UseClientWrapper>
          <Clock className="mr-2 inline h-4 w-4" />
        </UseClientWrapper>
        {timespan}
      </div>
    )}
    <div>
      <Heading3>{title}</Heading3>
      {description && <p>{description}</p>}
    </div>
    <div>
      <span className="border-b-2">{linkLabel ? linkLabel : 'Angebot anschauen'}</span>
    </div>
  </NextLink>
);
