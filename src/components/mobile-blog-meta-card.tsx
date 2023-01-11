import { Button, Calendar, Clock, Heading3, Share, Tooltip } from '@smartive/guetzli';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { FC, useState } from 'react';
import { Image, ImageVariant } from './image';
import { BlogDetail } from '../data/blog';

type Props = { post: BlogDetail };

export const MobileBlogMetaCard: FC<Props> = ({ post }) => {
  dayjs.locale('de');
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false);
  const date = dayjs(post.date);

  return (
    <div className="rounded bg-white-100">
      <div className="grid grid-flow-col justify-start gap-4 p-4 pb-3">
        {post.avatar && (
          <Image
            src={new URL(`${post.avatar.startsWith('http') ? '' : 'https://'}${post.avatar}`).toString()}
            alt={post.creator}
            rounded="full"
            width={56}
            height={56}
          />
        )}
        <div>
          <Heading3 as="p" className="mb-0 lg:mb-0">
            <span itemProp="author">{post.creator}</span>
          </Heading3>
          <div className="grid grid-cols-[1rem,auto] gap-2 justify-items-center place-items-center">
            <Calendar className="w-4 h-4" />
            <meta
              itemProp="dateCreated datePublished pubDate"
              content={date.isValid() ? date.format('YYYY-MM-DD') : 'Draft'}
            />
            <span>{date.isValid() ? date.format('MMMM YYYY') : 'Draft'}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white-200">
        <Tooltip text="Kopiert!" isOpen={copyTooltipOpen}>
          <button
            className="w-full grid grid-flow-col place-content-between px-4 py-3"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopyTooltipOpen(true);
              setTimeout(() => {
                setCopyTooltipOpen(false);
              }, 1500);
            }}
          >
            <span>Link kopieren</span>
            <span>
              <Share className="inline-block" />
            </span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
