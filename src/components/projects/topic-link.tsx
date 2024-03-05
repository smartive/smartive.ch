import NextLink from 'next/link';
import { FC } from 'react';

type Props = {
  slug: string;
  title: string;
};

export const TopicLink: FC<Props> = ({ slug, title }) => (
  <NextLink
    href={`/t/${slug}`}
    title={`Alle Projekte zu "${title}" ansehen`}
    className="mr-4 mt-2 inline-block border-b-2 text-xxs text-black transition-transform hover:border-apricot-500 active:scale-95 lg:text-xs"
  >
    {title}
  </NextLink>
);
