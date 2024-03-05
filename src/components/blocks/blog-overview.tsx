import { AllPostsWithoutLatestDocument, BlogOverviewBlockFragment, LatestPostDocument } from '@/graphql/generated';
import { SmartiveColorsType } from '@/utils/color';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { FC, Fragment } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { AvatarFallback } from '../blog/avatar-fallback';
import { BlogpostCard } from '../blog/blogpost-card';
import { BlockWrapper } from '../layouts/block-wrapper';
import { Grid } from '../layouts/grid';
import { Heading2 } from '../nodes';
import { TeaserCard } from '../teaser-card';

require('dayjs/locale/de');

type Props = {
  block: BlogOverviewBlockFragment;
};

export const BlogOverviewBlock: FC<Props> = async ({ block: { teaser } }) => {
  const { blogpost } = await queryDatoCMS({ document: LatestPostDocument });
  const { blogposts } = await queryDatoCMS({ document: AllPostsWithoutLatestDocument });

  return (
    <BlockWrapper>
      {blogpost && (
        <NextLink
          href={`/blog/${blogpost.slug}`}
          className="card-shadow grid overflow-hidden rounded bg-white-100 transition-transform active:scale-[.99] md:grid-cols-2"
        >
          {blogpost?.image?.responsiveImage && (
            <DatoImage data={blogpost.image.responsiveImage} layout="responsive" objectFit="cover" />
          )}
          <div className="grid grid-rows-[auto,auto,1fr,auto] p-5 font-sans text-xs md:p-16 lg:text-base">
            <div className="text flex flex-row items-center gap-4 lg:text-xs">
              {blogpost?.author?.portrait?.responsiveImage ? (
                <DatoImage data={blogpost.author.portrait.responsiveImage} className="rounded-full" />
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
            <BlogpostCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              published={post.published}
              image={post.image.responsiveImage}
              author={post.author?.name ?? post.altAuthor}
              authorImage={post?.author?.portrait?.responsiveImage ?? undefined}
            />
            {index === 3 && teaser && (
              <TeaserCard
                key={teaser.id}
                eyebrow={teaser.eyebrow}
                title={teaser.title}
                link={teaser.url}
                description={teaser.text}
                linkLabel={teaser.linkLabel}
                color={teaser.color as SmartiveColorsType}
                newTab={teaser.newTab ?? false}
              />
            )}
          </Fragment>
        ))}
      </Grid>
    </BlockWrapper>
  );
};
