import NextLink from 'next/link';
import { FC } from 'react';
import { SmartiveColorsType } from '../../utils/color';
import { classNames } from '../../utils/css';

type Props = {
  slug: string;
  title: string;
  color?: SmartiveColorsType;
};

export const TopicLink: FC<Props> = ({ slug, title, color = 'apricot' }) => (
  <NextLink
    href={`/t/${slug}`}
    title={`Alle Projekte zu "${title}" ansehen`}
    className={classNames(
      'inline-block rounded-sm px-2 py-2 text-xxs text-black transition-all hover:bg-opacity-80 active:scale-95 lg:px-3 lg:py-1 lg:text-xs',
      {
        apricot: 'bg-apricot-500',
        mint: 'bg-mint-500',
        cornflower: 'bg-cornflower-500',
      }[color],
    )}
  >
    {title}
  </NextLink>
);
