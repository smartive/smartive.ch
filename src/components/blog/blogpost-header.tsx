import { LANG_STRINGS, Language } from '@/utils/const';
import { Calendar, Clock, Heading1 } from '@smartive/guetzli';
import dayjs from 'dayjs';
import { FC } from 'react';
import { SRCImage as DatoSRCImage, ResponsiveImageType } from 'react-datocms';
import { AvatarFallback } from './avatar-fallback';
import { CopyUrlButton } from './copy-url-button';
import { ReadingTime } from './reading-time';

require('dayjs/locale/de');

type Props = {
  title: string;
  published?: string | null;
  image: ResponsiveImageType;
  author?: string | null;
  authorImage?: ResponsiveImageType;
  language: Language;
};

export const BlogpostHeader: FC<Props> = ({ title, image, author, authorImage, published, language }) => (
  <header className="mt-12 lg:mt-48">
    <Heading1>{title}</Heading1>
    <div className="my-12 grid overflow-hidden rounded bg-white-100 md:grid-cols-[auto,33.5%] lg:my-16">
      <DatoSRCImage data={image} imgStyle={{ objectFit: 'cover', width: '100%', maxWidth: '100%' }} />
      <div className="grid auto-cols-max grid-flow-col auto-rows-max items-center gap-4 p-5 font-sans md:grid-flow-row md:justify-center md:gap-6 md:p-16 lg:text-base">
        <div className="flex w-full justify-center">
          <div className="h-20 w-20 lg:h-40 lg:w-40">
            {authorImage ? (
              <DatoSRCImage data={authorImage} imgClassName="rounded-full" />
            ) : (
              <AvatarFallback className="h-full w-full" />
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-center md:gap-4 lg:gap-6">
          <p className="text-xs md:text-sm lg:text-base">
            {LANG_STRINGS[language].by} <strong>{author}</strong>
          </p>
          <div className="flex flex-col text-xxs md:items-center md:gap-2 lg:text-xs">
            {published && (
              <div className="flex flex-row items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {dayjs(published).locale(language).format('MMMM YYYY')}
              </div>
            )}
            <div className="flex flex-row items-center">
              <Clock className="mr-2 h-4 w-4" />
              <ReadingTime elementId="blogpost" language={language} />
            </div>
          </div>
          <CopyUrlButton language={language} />
        </div>
      </div>
    </div>
  </header>
);
