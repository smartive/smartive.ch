import { AllPostsWithoutLatestDocument, BlogOverviewBlockFragment, LatestPostDocument } from '@/graphql/generated';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { Heading2 } from '@smartive/guetzli';
import dayjs from 'dayjs';
import { draftMode } from 'next/headers';
import NextLink from 'next/link';
import { FC, Fragment } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';
import { AvatarFallback } from '../blog/avatar-fallback';
import { Card, CardColors } from '../card';
import { BlockWrapper } from '../layouts/block-wrapper';
import { Grid } from '../layouts/grid';

require('dayjs/locale/de');

type Props = {
  block: BlogOverviewBlockFragment;
};

export const BlogOverviewBlock: FC<Props> = async ({ block: { teaser } }) => {
  const { blogpost } = await queryDatoCMS({ document: LatestPostDocument, includeDrafts: draftMode().isEnabled });
  const { blogposts } = await queryDatoCMS({
    document: AllPostsWithoutLatestDocument,
    includeDrafts: draftMode().isEnabled,
  });

  return (
    <BlockWrapper>
      {blogpost && (
        <NextLink
          href={`/blog/${blogpost.slug}`}
          className="card-shadow grid overflow-hidden rounded bg-white-100 transition-transform active:scale-[.99] md:grid-cols-2"
        >
          {blogpost?.image?.responsiveImage && (
            <DatoSRCImage data={blogpost.image.responsiveImage} imgStyle={{ maxWidth: '100%' }} />
          )}
          <div className="grid grid-rows-[auto,auto,1fr,auto] p-5 font-sans text-xs md:p-16 lg:text-base">
            <div className="text flex flex-row items-center gap-4 lg:text-xs">
              {blogpost?.author?.imagePortrait?.responsiveImage ? (
                <DatoSRCImage data={blogpost.author.imagePortrait.responsiveImage} imgClassName="rounded-full" />
              ) : (
                <AvatarFallback />
              )}
              <div>
                von {blogpost?.author?.name ?? blogpost?.altAuthor}
                <br />
                {blogpost.published && dayjs(blogpost.published).locale('de').format('MMMM YYYY')}
              </div>
            </div>
            <Heading2>{blogpost.title}</Heading2>
            {blogpost.excerpt && <div>{blogpost.excerpt}</div>}
            <div className="mt-4">
              <span className="border-b-2">Beitrag lesen</span>
            </div>
          </div>
        </NextLink>
      )}
      <Grid cols={3}>
        {blogposts.map((post, index) => (
          <Fragment key={post.id}>
            <Card
              key={post.id}
              link={`/blog/${post.slug}`}
              linkTitle={`Beitrag '${post.title}' lesen`}
              linkLabel="Beitrag lesen"
              title={post.title}
              image={post.image.responsiveImage}
              blogpostData={{
                author: post.author?.name,
                authorImage: post.author?.imagePortrait?.responsiveImage,
                published: post.published,
              }}
            />
            {index === 3 && teaser && (
              <Card
                key={teaser.id}
                eyebrow={teaser.eyebrow}
                title={teaser.title}
                link={teaser.url ?? ''}
                description={teaser.text}
                linkLabel={teaser.linkLabel}
                color={teaser.color as CardColors}
                newTab={teaser.newTab ?? false}
              />
            )}
          </Fragment>
        ))}
      </Grid>
    </BlockWrapper>
  );
};
