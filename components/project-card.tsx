import NextLink from 'next/link';
import { FC } from 'react';
import { Image as DatoImage, ResponsiveImageType } from 'react-datocms';
import { Heading3 } from './nodes';

type Props = {
  slug: string;
  title: string;
  headline: string;
  image?: ResponsiveImageType;
};

export const ProjectCard: FC<Props> = ({ slug, title, headline, image }) => (
  <NextLink
    href={`/projekte/${slug}`}
    className="card-shadow grid w-full grid-rows-[auto,1fr,auto] overflow-hidden rounded bg-white-100 text-black transition-transform active:scale-[.99]"
  >
    {image && <DatoImage data={image} layout="responsive" />}
    <div className="grid grid-rows-[auto,1fr,auto] p-4 font-sans text-xxs font-normal lg:p-8 lg:text-sm">
      <p className="mb-4">{title}</p>
      <Heading3>{headline}</Heading3>
      <div>
        <span className="border-b-2">Projekt anschauen</span>
      </div>
    </div>
  </NextLink>
);
