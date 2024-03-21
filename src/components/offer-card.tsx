import { SmartiveColorsType } from '@/utils/color';
import { classNames, Clock, Heading3 } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';

type Props = {
  slug: string;
  title: string;
  timespan?: string | null;
  description?: string | null;
  linkLabel?: string | null;
  color?: SmartiveColorsType;
};

export const OfferCard: FC<Props> = ({ slug, title, timespan, description, linkLabel, color = 'apricot' }) => (
  <NextLink
    href={`/angebot/${slug}`}
    title={`Angebot '${title}' ansehen`}
    className={classNames(
      'grid w-full grid-rows-[1fr,auto] gap-4 overflow-hidden rounded p-5 text-xxs text-black transition-transform active:scale-[.99] lg:gap-6 lg:p-8 lg:text-sm',
      {
        apricot: 'card-shadow-cornflower bg-apricot-500',
        mint: 'card-shadow-apricot bg-mint-500',
        cornflower: 'card-shadow-mint bg-cornflower-500',
      }[color],
    )}
  >
    <div className="space-y-2 md:space-y-6 lg:space-y-8">
      {timespan && (
        <div className="inline-flex flex-row items-center">
          <Clock className="mr-2 inline h-4 w-4" />
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
