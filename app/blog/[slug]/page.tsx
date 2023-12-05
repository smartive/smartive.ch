import { draftMode } from 'next/headers';
import { notFound, permanentRedirect } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { BlogpostHeader } from '../../../components/blog/blogpost-header';
import { BlogpostNavigation } from '../../../components/blog/blogpost-navigation';
import { ContentBlocks } from '../../../components/content-blocks';
import { Page } from '../../../components/layouts/page';
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
  const { blogpost, site } = await queryDatoCMS({
    document: PostDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

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

  const { blogpost } = await queryDatoCMS({
    document: PostDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

  if (!blogpost) notFound();

  const { title, content, published, image, author, altAuthor, language } = blogpost;

  return (
    <Page>
      <BlogpostHeader
        title={title}
        published={published}
        image={image?.responsiveImage}
        authorImage={author?.portrait?.responsiveImage ?? undefined}
        author={author?.name ?? altAuthor}
        language={language}
      />
      <div
        id="blogpost"
        itemScope
        itemType="https://schema.org/BlogPosting"
        lang={language}
        className="max-w-[1000px] [&>*:first-child]:mt-0"
      >
        <ContentBlocks blocks={content as Array<BlogpostModelContentField>} />
      </div>
      {published && <BlogpostNavigation currentPostPublished={published} language={language} />}
    </Page>
  );
}
