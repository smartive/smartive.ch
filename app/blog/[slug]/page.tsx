import { Heading1 } from '@smartive/guetzli';
import dayjs from 'dayjs';
import { draftMode } from 'next/headers';
import { notFound, permanentRedirect } from 'next/navigation';
import { Image as DatoImage } from 'react-datocms';
import { toNextMetadata } from 'react-datocms/seo';
import { AvatarFallback } from '../../../components/blog/avatar-fallback';
import { CopyUrlButton } from '../../../components/blog/copy-url-button';
import { ReadingTime } from '../../../components/blog/reading-time';
import { ContentBlocks } from '../../../components/content-blocks';
import { GuetzliCalendar } from '../../../components/icons/calendar';
import { GuetzliClock } from '../../../components/icons/clock';
import { Page } from '../../../components/layouts/page';
import { Link } from '../../../components/nodes';
import { BlogpostModelContentField, PostDocument } from '../../../graphql/generated';
import mediumBlogSlugs from '../../../src/data/medium-blog-slugs.json';
import { LANG_STRINGS } from '../../../utils/const';
import { queryDatoCMS } from '../../../utils/query-dato-cms';

require('dayjs/locale/de');

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { blogpost, site } = await queryDatoCMS({ document: PostDocument, variables: { slug } });

  const language = blogpost?.language ?? 'de';

  const datoMetadata = toNextMetadata([...site.favicon]);

  const metadata = {
    title: `${blogpost?.title} – Blog${site.globalSeo?.titleSuffix ?? ''}}`,
    description: blogpost?.excerpt,
    authors: [{ name: blogpost?.author?.name ?? blogpost?.altAuthor }],
    openGraph: {
      title: blogpost?.title,
      description: blogpost?.excerpt,
      images: [
        {
          url: blogpost?.image?.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: blogpost?.published,
      type: 'article',
    },
    other: {
      ['twitter:label1']: LANG_STRINGS[language].writtenBy,
      ['twitter:data1']: blogpost?.author?.name ?? blogpost?.altAuthor,
    },
  };

  return { ...datoMetadata, ...metadata };
}

export default async function BlogpostPage({ params: { slug } }: Params) {
  const isMediumSlug = slug && Object.keys(mediumBlogSlugs).includes(slug.toString().toLowerCase());
  const smartiveBlogSlug = slug && mediumBlogSlugs[slug.toString()];

  if (isMediumSlug) {
    permanentRedirect(smartiveBlogSlug ? `/blog/${smartiveBlogSlug}` : `https://medium.com/smartive/${slug}`);
  }

  const { isEnabled } = draftMode();
  const { blogpost } = await queryDatoCMS({ document: PostDocument, variables: { slug }, includeDrafts: isEnabled });

  if (!blogpost) notFound();

  const { title, content, published, image, author, altAuthor, language } = blogpost;

  return (
    <Page>
      <header className="mt-12 lg:mt-48">
        <Heading1>{title}</Heading1>
        <div className="my-12 grid overflow-hidden rounded bg-white-100 md:grid-cols-[auto,33.5%] lg:my-16">
          {image?.responsiveImage && <DatoImage data={image.responsiveImage} layout="responsive" objectFit="cover" />}
          <div className="flex flex-col items-center gap-4 p-4 pb-8 font-sans text-xs md:p-16 lg:gap-6 lg:text-base">
            {author?.portrait?.responsiveImage ? (
              <DatoImage data={author.portrait.responsiveImage} className="rounded-full" />
            ) : (
              <AvatarFallback width={164} height={164} />
            )}
            <p className="text-sm lg:text-base">
              {LANG_STRINGS[language].by} <strong>{author?.name ?? altAuthor}</strong>
            </p>
            <div className="flex flex-col items-center gap-2 text-xxs lg:text-xs">
              {published && (
                <div className="flex flex-row items-center">
                  <GuetzliCalendar className="mr-2 h-4 w-4" />
                  {dayjs(published).locale(language).format('MMMM YYYY')}
                </div>
              )}
              <div className="flex flex-row items-center">
                <GuetzliClock className="mr-2 h-4 w-4" />
                <ReadingTime elementId="blogpost" lang={language} />
              </div>
            </div>
            <CopyUrlButton lang={language} />
          </div>
        </div>
      </header>
      <div
        id="blogpost"
        itemScope
        itemType="https://schema.org/BlogPosting"
        lang={language}
        className="max-w-[1000px] [&>*:first-child]:mt-0"
      >
        <ContentBlocks blocks={content as Array<BlogpostModelContentField>} />
      </div>
      <div className="my-12 max-w-[1000px] text-center lg:my-48">
        <Link href="/blog">{LANG_STRINGS[language].back}</Link>
      </div>
    </Page>
  );
}
