import { SmartiveColorsType } from '@/utils/color';
import { classNames, Clock, Heading3 } from '@smartive/guetzli';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { FC } from 'react';
import { SRCImage as DatoSRCImage, ResponsiveImageType } from 'react-datocms';
import { AvatarFallback } from './blog/avatar-fallback';
import { ImageComponent } from './image';

require('dayjs/locale/de');

export type CardColors = SmartiveColorsType | 'white';

type Props = {
  title: string;
  timespan?: string | null;
  eyebrow?: string | null;
  description?: string | null;
  link?: string | null;
  linkLabel?: string | null;
  linkTitle?: string;
  color?: CardColors;
  image?: ResponsiveImageType;
  newTab?: boolean;
  blogpostData?: {
    author?: string | null;
    authorImage?: ResponsiveImageType | null;
    published?: string | null;
  };
};

export const Card: FC<Props> = ({
  timespan,
  eyebrow,
  title,
  description,
  link,
  linkLabel,
  linkTitle,
  color = 'white',
  image,
  newTab,
  blogpostData,
}) => {
  if (!link) {
    console.error('Card has no link', title);

    return null;
  }

  return (
    <NextLink
      href={link}
      title={linkTitle ?? title}
      className={classNames(
        'grid w-full grid-rows-[auto,1fr,auto] overflow-hidden rounded text-black transition-transform active:scale-[.99]',
        {
          apricot: 'card-shadow-cornflower bg-apricot-500',
          mint: 'card-shadow-apricot bg-mint-500',
          cornflower: 'card-shadow-mint bg-cornflower-500',
          white: 'card-shadow bg-white-100',
        }[color],
      )}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      <div>{image && <ImageComponent image={{ responsiveImage: image }} />}</div>
      <div className="grid grid-rows-[auto,1fr,auto] p-5 font-sans text-xxs font-normal md:p-6 lg:p-8 lg:text-sm">
        {blogpostData ? (
          <div className="text flex flex-row items-center gap-4 lg:text-xs">
            {blogpostData.authorImage ? (
              <DatoSRCImage data={blogpostData.authorImage} imgClassName="rounded-full" />
            ) : (
              <AvatarFallback />
            )}
            <div>
              von {blogpostData.author}
              <br />
              {blogpostData.published && dayjs(blogpostData.published).locale('de').format('MMMM YYYY')}
            </div>
          </div>
        ) : (
          <div>
            {timespan && (
              <div className="inline-flex flex-row items-center">
                <Clock className="mr-2 inline h-4 w-4" />
                {timespan}
              </div>
            )}
            {eyebrow && <p>{eyebrow}</p>}
          </div>
        )}
        <div>
          <Heading3>{title}</Heading3>
          {description && <p>{description}</p>}
        </div>
        <div className="lg:mt-4">
          <span className="border-b-2">{linkLabel ? linkLabel : 'Anschauen'}</span>
        </div>
      </div>
    </NextLink>
  );
};
