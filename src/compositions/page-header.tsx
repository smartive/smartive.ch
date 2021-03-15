import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { FC } from 'react';
import { AwardTags } from '../components/award-tags';
import { Heading1 } from '../elements/heading-1';
import { highlight, purify } from '../utils/markdown';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const OG_IMAGE_SERVICE_URL = process.env.NEXT_PUBLIC_OG_IMAGE_SERVICE_URL;

export enum PageHeaderVariants {
  Simple,
  Card,
}

const HeaderSpacing = {
  [PageHeaderVariants.Simple]: 'my-12 lg:my-48',
  [PageHeaderVariants.Card]: 'my-12 lg:my-24',
} as const;

type PageHeaderProps = {
  markdownTitle: string;
  description?: string;
  awardTags?: string[];
  variant?: PageHeaderVariants;
};

type SimplePageHeaderProps = {
  display?: string;
  awardTags?: string[];
};

type CardPageHeaderProps = {
  display?: string;
};

const SimplePageHeader: FC<SimplePageHeaderProps> = ({ display, awardTags, children }) => (
  <>
    {awardTags && awardTags.length > 0 && (
      <div className="grid grid-flow-col gap-4 mb-3">
        <AwardTags tags={awardTags} />
      </div>
    )}
    {display && <Heading1>{display.includes('_') ? highlight(display) : display}</Heading1>}
    {children}
  </>
);

const CardPageHeader: FC<CardPageHeaderProps> = ({ display, children }) => (
  <div className="grid grid-flow-row justify-items-center text-center bg-cornflower-500 rounded p-12 md:p-20 lg:p-32">
    {display && <Heading1>{display}</Heading1>}
    {children}
  </div>
);

export const PageHeader: FC<PageHeaderProps> = ({
  markdownTitle,
  description,
  children,
  awardTags,
  variant = PageHeaderVariants.Simple,
}) => {
  const { asPath } = useRouter();
  const pageUrl = `${SITE_URL}${asPath}`;
  const imageUrl = `${OG_IMAGE_SERVICE_URL}/${encodeURIComponent(markdownTitle)}.png?md=1&fontSize=5rem`;

  const title = purify(markdownTitle);
  const display = purify(markdownTitle, /[*`]/g); // only remove * and ` but keep _

  return (
    <header className={`${HeaderSpacing[variant]}`}>
      <Head>
        <title>{title} — smartive</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

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
      {variant === PageHeaderVariants.Simple && (
        <SimplePageHeader display={display} awardTags={awardTags}>
          {children}
        </SimplePageHeader>
      )}
      {variant === PageHeaderVariants.Card && <CardPageHeader display={display}>{children}</CardPageHeader>}
    </header>
  );
};
