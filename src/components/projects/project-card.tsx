import { Heading3 } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';
import { SRCImage as DatoSRCImage, ResponsiveImageType } from 'react-datocms';

type Props = {
  slug: string;
  title: string;
  headline: string;
  image?: ResponsiveImageType;
};

export const ProjectCard: FC<Props> = ({ slug, title, headline, image }) => (
  <NextLink
    href={`/projekte/${slug}`}
    title={`Projekt '${headline}' ansehen`}
    className="card-shadow grid w-full max-w-[720px] grid-rows-[auto,1fr,auto] overflow-hidden rounded bg-white-100 text-black transition-transform active:scale-[.99]"
  >
    {image && <DatoSRCImage data={image} imgStyle={{ width: '100%', maxWidth: '100%' }} />}
    <div className="grid grid-rows-[auto,1fr,auto] p-5 font-sans text-xxs font-normal md:p-6 lg:p-8 lg:text-sm">
      <p>{title}</p>
      <Heading3>{headline}</Heading3>
      <div className="lg:mt-4">
        <span className="border-b-2">Projekt anschauen</span>
      </div>
    </div>
  </NextLink>
);
