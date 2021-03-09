import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { FC } from 'react';
import { AwardTags } from '../components/award-tags';
import { Decoration } from '../elements/decoration';
import { Heading1 } from '../elements/heading-1';

export type MetaInfos = {
  title?: string;
  decoration?: string;
  description?: string;
  image?: string;
};

type Props = {
  title?: string;
  decoration?: string;
  metaInfos?: MetaInfos;
  awardTags?: string[];
};

export const PageHeader: FC<Props> = ({ title, decoration, children, metaInfos, awardTags }) => {
  const { asPath } = useRouter();
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`;

  return (
    <header className="my-12 lg:my-48">
      <Head>
        <title>{metaInfos?.title ?? title}</title>
        {metaInfos && (
          <>
            <meta name="description" content={metaInfos.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={metaInfos.title ?? title} />
            <meta property="og:description" content={metaInfos.description} />
            <meta property="og:image" content={metaInfos.image} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={pageUrl} />
            <meta property="twitter:title" content={metaInfos.title ?? title} />
            <meta property="twitter:description" content={metaInfos.description} />
            <meta property="twitter:image" content={metaInfos.image} />
          </>
        )}
      </Head>
      {awardTags && awardTags.length > 0 && (
        <div className="grid grid-flow-col gap-4 mb-3">
          <AwardTags awardTags={awardTags} />
        </div>
      )}
      {title && (
        <Heading1>
          {decoration && title.includes(decoration) ? (
            <>
              {title.split(decoration)[0]}
              <Decoration>{decoration}</Decoration>
              {title.split(decoration)[1]}
            </>
          ) : (
            title
          )}
        </Heading1>
      )}
      {children}
    </header>
  );
};
