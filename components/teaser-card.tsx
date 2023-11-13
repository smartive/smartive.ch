import NextLink from 'next/link';
import { FC } from 'react';
import { classNames } from '../utils/css';
import { Heading3 } from './nodes';

export type TeaserCardColor = 'apricot' | 'mint' | 'cornflower';

type Props = {
  title: string;
  eyebrow?: string | null;
  description?: string | null;
  link: string;
  linkLabel?: string | null;
  color?: TeaserCardColor;
  newTab?: boolean;
};

export const TeaserCard: FC<Props> = ({ eyebrow, title, description, link, linkLabel, color = 'apricot', newTab }) => (
  <NextLink
    href={link}
    className={classNames(
      'card-shadow grid w-full grid-rows-[1fr,auto] gap-4 overflow-hidden rounded p-8 text-xxs text-black transition-transform active:scale-[.99] lg:gap-6 lg:text-sm',
      {
        apricot: 'bg-apricot-500',
        mint: 'bg-mint-500',
        cornflower: 'bg-cornflower-500',
      }[color],
    )}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : undefined}
  >
    <div className="space-y-6 lg:space-y-8">
      {eyebrow && <p>{eyebrow}</p>}
      <Heading3>{title}</Heading3>
      {description && <p>{description}</p>}
    </div>
    <div>
      <span className="border-b-2">{linkLabel ? linkLabel : 'Angebot anschauen'}</span>
    </div>
  </NextLink>
);
