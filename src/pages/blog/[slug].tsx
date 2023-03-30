import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { BlogMetaCard } from '../../components/blog-meta-card';
import { Image, ImageVariant } from '../../components/image';
import { MobileBlogMetaCard } from '../../components/mobile-blog-meta-card';
import { PageHeader } from '../../compositions/page-header';
import { BlogDetail, getBlogPost, getBlogPosts } from '../../data/blog';
import { Page } from '../../layouts/page';
import { Block, getBlocks } from '../../services/notion';
import { calculateReadingTime } from '../../utils/notion';
import { renderContent } from '../../utils/notion-block-renderers';
import mediumBlogSlugs from '../../data/medium-blog-slugs.json';

type Props = { post: BlogDetail; blocks: Block[] };

const BlogPost: NextPage<Props> = ({ post, blocks }) => {
  const readingTime = calculateReadingTime(blocks);
  const plainAbstract = post.abstract.reduce((acc, cur) => `${acc}${cur.plain_text}`, '');

  return (
    <Page>
      <Head>{!post.published && <meta name="robots" content="noindex" />}</Head>
      <div itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="abstract" content={plainAbstract} />
        <PageHeader markdownTitle={post.title} description={plainAbstract} image={post.cover ?? null}>
          <div className="grid md:grid-cols-[66%,auto] gap-4">
            {post.cover && (
              <div>
                <Image
                  src={post.cover}
                  alt={post.title}
                  priority
                  aria-hidden
                  width={1000}
                  height={800}
                  itemProp="image"
                  variant={ImageVariant.FillContainer}
                />
              </div>
            )}
            <div className="hidden md:block h-full">
              <BlogMetaCard post={post} readingTime={readingTime} />
            </div>
            <div className="block md:hidden">
              <MobileBlogMetaCard post={post} />
            </div>
          </div>
        </PageHeader>

        <main className="w-full md:w-2/3 my-12 md:my-16 lg:my-48">
          <article itemProp="articleBody text" lang={post.language}>
            {renderContent(blocks)}
          </article>
        </main>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const isMediumSlug = Object.keys(mediumBlogSlugs).includes(params.slug.toString().toLowerCase());
  const mediumSlug: string | undefined = mediumBlogSlugs[params.slug.toString()];

  if (isMediumSlug) {
    return mediumSlug
      ? {
          redirect: {
            destination: `/blog/${mediumSlug}`,
            permanent: true,
          },
        }
      : {
          redirect: {
            destination: `https://medium.com/smartive/${params.slug}`,
            permanent: false,
          },
        };
  }

  try {
    const post = await getBlogPost(params.slug.toString());
    const blocks = await getBlocks(post.id);

    return {
      props: {
        post,
        blocks,
      },
      revalidate: post.published ? 600 : 1,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
      revalidate: 300,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export default BlogPost;
