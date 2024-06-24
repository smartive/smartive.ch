import { Heading3 } from '@smartive/guetzli';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { FC } from 'react';
import { SRCImage as DatoSRCImage, ResponsiveImageType } from 'react-datocms';
import { AvatarFallback } from './avatar-fallback';

require('dayjs/locale/de');

type Props = {
  slug: string;
  title: string;
  published?: string | null;
  image: ResponsiveImageType;
  author?: string | null;
  authorImage?: ResponsiveImageType;
};

export const BlogpostCard: FC<Props> = ({ slug, title, published, image, author, authorImage }) => (
  <NextLink
    href={`/blog/${slug}`}
    title={`Beitrag '${title}' lesen`}
    className="card-shadow grid w-full max-w-[720px] grid-rows-[auto,1fr,auto] overflow-hidden rounded bg-white-100 text-black transition-transform active:scale-[.99]"
  >
    <DatoSRCImage data={image} imgStyle={{ width: '100%', maxWidth: '100%' }} />
    <div className="grid grid-rows-[auto,1fr,auto] p-5 font-sans text-xxs font-normal lg:p-8 lg:text-sm">
      <div className="text flex flex-row items-center gap-4 lg:text-xs">
        {authorImage ? <DatoSRCImage data={authorImage} imgClassName="rounded-full" /> : <AvatarFallback />}
        <div>
          von {author}
          <br />
          {published && dayjs(published).locale('de').format('MMMM YYYY')}
        </div>
      </div>
      <Heading3>{title}</Heading3>
      <div>
        <span className="border-b-2">Beitrag lesen</span>
      </div>
    </div>
  </NextLink>
);
