import { Button, Calendar, Clock, Heading3, Share, Switch, Tooltip } from '@smartive/guetzli';
import { PostOrPage } from '@tryghost/content-api';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { PageHeader } from '../../compositions/page-header';
import { Portrait, PortraitVariant } from '../../elements/portrait';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';
import { getGhostClient } from '../../utils/ghost';

type Props = {
  post: PostOrPage;
};

const BlogPost: NextPage<Props> = ({ post }) => {
  dayjs.locale('de');
  const [copyTooltipOpen, setCopyTooltipOpen] = useState(false);

  return (
    <Page>
      <div itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="abstract" content={post.excerpt} />
        <PageHeader markdownTitle={post.title} description={post.excerpt}>
          <div className="grid md:grid-cols-[66%,auto] gap-4">
            {post.feature_image && (
              <img
                src={post.feature_image}
                alt=""
                loading="eager"
                aria-hidden
                className="w-full h-full rounded object-cover"
                itemProp="image"
              />
            )}
            <div className="grid place-items-center text-center gap-4 p-8 rounded bg-white-100">
              <Portrait
                image={new URL(
                  `${post.primary_author.profile_image.startsWith('http') ? '' : 'https://'}${
                    post.primary_author.profile_image
                  }`
                ).toString()}
                alt=""
                variant={PortraitVariant.Small}
              />
              <Heading3 as="p">
                von <span itemProp="author">{post.primary_author.name}</span>
              </Heading3>
              <div className="grid grid-cols-[1rem,auto] gap-2 justify-items-center place-items-center">
                <Calendar className="w-4 h-4" />
                <meta itemProp="dateCreated datePublished pubDate" content={dayjs(post.published_at).format('YYYY-MM-DD')} />
                <span>{dayjs(post.published_at).format('MMMM YYYY')}</span>
                <Clock className="w-4 h-4" />
                <span>~{post.reading_time} Minuten</span>
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
                {post.canonical_url && (
                  <Button as="a" href={post.canonical_url}>
                    <Switch className="inline-block" />{' '}
                    {post.tags.some((tag) => tag.name === 'German') ? 'Read in English' : 'Auf Deutsch lesen'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </PageHeader>

        <main>
          <Section>
            <article
              className="prose prose-sm md:prose lg:prose-xl xl:prose-2xl"
              itemProp="articleBody text"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Section>
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
    const post = await getGhostClient().posts.read({ slug: params.slug.toString() }, { include: ['authors', 'tags'] });

    return {
      props: {
        post,
      },
      revalidate: 300,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getGhostClient().posts.browse({
    filter: 'visibility:public',
    order: 'published_at DESC',
    limit: 'all',
  });

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export default BlogPost;
