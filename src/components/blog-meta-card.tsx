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
    <div className="grid place-items-center text-center gap-4 p-4 md:p-8 rounded bg-white-100 h-full">
      {post.avatar && (
        <Image
          src={new URL(`${post.avatar.startsWith('http') ? '' : 'https://'}${post.avatar}`).toString()}
          alt={post.creator}
          width={256}
          height={256}
          rounded="full"
          variant={ImageVariant.PortraitBig}
        />
      )}
      <Heading3 as="p">
        von <span itemProp="author">{post.creator}</span>
      </Heading3>
      <div className="grid grid-cols-[1rem,auto] gap-2 justify-items-center place-items-center">
        <Calendar className="w-4 h-4" />
        <meta itemProp="dateCreated datePublished pubDate" content={date.isValid() ? date.format('YYYY-MM-DD') : 'Draft'} />
        <span>{date.isValid() ? date.format('MMMM YYYY') : 'Draft'}</span>
        <Clock className="w-4 h-4" />
        <span>~{readingTime} Minuten</span>
      </div>
      <div className="grid grid-flow-row xl:grid-flow-col gap-4 mt-4">
        <Tooltip text="Kopiert!" isOpen={copyTooltipOpen}>
          <Button
            as="button"
            onClick={() => {
              copyToClipboard(window.location.href);
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

const copyToClipboard = (text: string) => {
  const inputc = document.body.appendChild(document.createElement('input'));
  inputc.value = text;
  inputc.focus();
  inputc.select();
  document.execCommand('copy');
  inputc.parentNode.removeChild(inputc);
};
