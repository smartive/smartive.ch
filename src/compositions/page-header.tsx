import { PageHeader as PageHeaderComponent, PageHeaderProps as PageHeaderComponentProps, purify } from '@smartive/guetzli';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { FC } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const OG_IMAGE_SERVICE_URL = `${process.env.NEXT_PUBLIC_OG_IMAGE_SERVICE_URL}/api/og-image`;

type PageHeaderProps = PageHeaderComponentProps & {
  description?: string;
  pageTitle?: string;
  metaOnly?: boolean;
};

export const PageHeader: FC<PageHeaderProps> = ({ description, pageTitle, metaOnly = false, ...props }) => {
  const { asPath } = useRouter();
  const pageUrl = `${SITE_URL}${asPath}`;
  const imageUrl = `${OG_IMAGE_SERVICE_URL}/${encodeURIComponent(props.markdownTitle)}?md=1&fontSize=5rem&fileType=png`;

  const title = pageTitle || purify(props.markdownTitle);

  return (
    <>
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
      {!metaOnly && <PageHeaderComponent {...props} />}
    </>
  );
};
