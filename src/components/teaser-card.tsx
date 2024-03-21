import { SmartiveColorsType } from '@/utils/color';
import { classNames, Heading3 } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';

type Props = {
  title: string;
  eyebrow?: string | null;
  description?: string | null;
  link: string;
  linkLabel?: string | null;
  color?: SmartiveColorsType;
  newTab?: boolean;
};

export const TeaserCard: FC<Props> = ({ eyebrow, title, description, link, linkLabel, color = 'apricot', newTab }) => (
  <NextLink
    href={link}
    className={classNames(
      'grid w-full grid-rows-[1fr,auto] gap-4 overflow-hidden rounded p-5 text-xxs text-black transition-transform active:scale-[.99] lg:gap-6 lg:p-8 lg:text-sm',
      {
        apricot: 'card-shadow-cornflower bg-apricot-500',
        mint: 'card-shadow-apricot bg-mint-500',
        cornflower: 'card-shadow-mint bg-cornflower-500',
      }[color],
    )}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : undefined}
  >
    <div className="space-y-2 md:space-y-6 lg:space-y-8">
      {eyebrow && <p>{eyebrow}</p>}
      <Heading3>{title}</Heading3>
      {description && <p>{description}</p>}
    </div>
    <div>
      <span className="border-b-2">{linkLabel ? linkLabel : 'Angebot anschauen'}</span>
    </div>
  </NextLink>
);
