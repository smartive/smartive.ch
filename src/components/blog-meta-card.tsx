import { Button, Calendar, Clock, Heading3, Share, Tooltip } from '@smartive/guetzli';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { FC, useState } from 'react';
import { Image, ImageVariant } from './image';
import { BlogDetail } from '../data/blog';

type Props = { post: BlogDetail; readingTime: number };

export const BlogMetaCard: FC<Props> = ({ post, readingTime }) => {
  dayjs.locale('de');
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false);
  const date = dayjs(post.date);

  return (
    <div className="grid justify-center place-content-between gap-4 p-4 md:p-8 rounded bg-white-100 h-full">
      <div className="grid place-items-center text-center gap-4">
        {post.avatar && (
          <Image
            src={new URL(`${post.avatar.startsWith('http') ? '' : 'https://'}${post.avatar}`).toString()}
            alt={post.creator}
            rounded="full"
            variant={ImageVariant.PortraitBig}
          />
        )}
        <Heading3 as="p" className="!mb-0 !lg:mb-0">
          von <span itemProp="author">{post.creator}</span>
        </Heading3>
        <div className="grid grid-cols-[1rem,auto] gap-2 justify-items-center place-items-center">
          <Calendar className="w-4 h-4" />
          <meta
            itemProp="dateCreated datePublished pubDate"
            content={date.isValid() ? date.format('YYYY-MM-DD') : 'Draft'}
          />
          <span>{date.isValid() ? date.format('MMMM YYYY') : 'Draft'}</span>
          <Clock className="w-4 h-4" />
          <span>~{readingTime} Minuten</span>
        </div>
      </div>
      <div className="text-center">
        <Tooltip text="Kopiert!" isOpen={copyTooltipOpen}>
          <Button
            as="button"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopyTooltipOpen(true);
              setTimeout(() => {
                setCopyTooltipOpen(false);
              }, 1500);
            }}
          >
            <Share className="inline-block" /> Link kopieren
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};
