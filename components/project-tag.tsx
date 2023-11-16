import NextLink from 'next/link';
import { FC } from 'react';
import { SmartiveColorsType } from '../utils/color';
import { classNames } from '../utils/css';

type Props = {
  slug: string;
  title: string;
  color?: SmartiveColorsType;
};

export const ProjectTag: FC<Props> = ({ slug, title, color = 'apricot' }) => (
  <NextLink
    href={`/tags/${slug}`}
    className={classNames(
      'inline-block rounded-sm px-2 py-2 text-xs text-white-100 transition-colors lg:px-4 lg:py-2',
      {
        apricot: 'bg-apricot-500 hover:bg-apricot-800',
        mint: 'bg-mint-500 hover:bg-mint-800',
        cornflower: 'bg-cornflower-500 hover:bg-cornflower-800',
      }[color],
    )}
    title={`Alle Projekte zu "${title}" ansehen`}
  >
    {title}
  </NextLink>
);
