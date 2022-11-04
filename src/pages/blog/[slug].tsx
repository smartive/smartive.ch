import { Button, Calendar, Clock, Copy, Heading3, Share, Tooltip } from '@smartive/guetzli';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { Image, ImageVariant } from '../../components/image';
import { NotionRichText } from '../../components/notion-rich-text';
import { PageHeader } from '../../compositions/page-header';
import { BlogDetail, getBlogPost, getBlogPosts } from '../../data/blog';
import { Page } from '../../layouts/page';
import { Block, getBlocks } from '../../services/notion';
import { calculateReadingTime } from '../../utils/notion';
import { renderContent } from '../../utils/notion-block-renderers';

type Props = { post: BlogDetail; blocks: Block[] };

const BlogPost: NextPage<Props> = ({ post, blocks }) => {
  dayjs.locale('de');
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false);
  const readingTime = calculateReadingTime(blocks);
  const plainAbstract = post.abstract.reduce((acc, cur) => `${acc}${cur.plain_text}`, '');
  const date = dayjs(post.date);

  return (
    <Page>
      <Head>{!post.published && <meta name="robots" content="noindex" />}</Head>
      <div itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="abstract" content={plainAbstract} />
        <PageHeader markdownTitle={post.title} description={plainAbstract}>
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
            <div className="grid place-items-center text-center gap-4 p-4 md:p-8 rounded bg-white-100">
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
                <meta
                  itemProp="dateCreated datePublished pubDate"
                  content={date.isValid() ? date.format('YYYY-MM-DD') : 'Draft'}
                />
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
          </div>
        </PageHeader>

        <main className="w-full md:w-2/3">
          <article itemProp="articleBody text">
            {post.abstract && post.abstract.length > 0 && (
              <>
                <Copy>
                  <NotionRichText text={post.abstract} />
                </Copy>
                <hr className="my-8 text-xs lg:text-base" />
              </>
            )}
            {renderContent(blocks)}
          </article>
        </main>
      </div>
    </Page>
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
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
