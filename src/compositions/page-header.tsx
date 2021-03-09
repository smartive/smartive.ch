import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { FC } from 'react';
import { AwardTags } from '../components/award-tags';
import { Heading1 } from '../elements/heading-1';
import { highlight, purify } from '../utils/markdown';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const OG_IMAGE_SERVICE_URL = process.env.NEXT_PUBLIC_OG_IMAGE_SERVICE_URL;

type Props = {
  markdownTitle: string;
  description?: string;
  awardTags?: string[];
};

export const PageHeader: FC<Props> = ({ markdownTitle, description, children, awardTags }) => {
  const { asPath } = useRouter();
  const pageUrl = `${SITE_URL}${asPath}`;
  const imageUrl = `${OG_IMAGE_SERVICE_URL}/${encodeURIComponent(markdownTitle)}.png?md=1&fontSize=5rem`;

  const title = purify(markdownTitle);
  const display = purify(markdownTitle, /[*`]/g); // only remove * and ` but keep _

  return (
    <header className="my-12 lg:my-48">
      <Head>
        <title>{title}</title>

        {description && <meta name="description" content={description} />}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:image" content={imageUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={title} />
        {description && <meta property="twitter:description" content={description} />}
        <meta property="twitter:image" content={imageUrl} />
      </Head>
      {awardTags && awardTags.length > 0 && (
        <div className="grid grid-flow-col gap-4 mb-3">
          <AwardTags awardTags={awardTags} />
        </div>
      )}
      {title && <Heading1>{display.includes('_') ? highlight(display) : display}</Heading1>}
      {children}
    </header>
  );
};
