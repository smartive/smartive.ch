import {
  BlobVariations,
  Calendar,
  ContentCard,
  Copy,
  Grid,
  ImageCard,
  ImageCardVariants,
  PageSection,
} from '@smartive/guetzli';
import { PostsOrPages } from '@tryghost/content-api';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { GetStaticProps, NextPage } from 'next';
import React, { Fragment } from 'react';
import { PageHeader } from '../../compositions/page-header';
import { LinkedInArticle } from '../../data/linkedin-articles';
import LinkedInArticles from '../../data/linkedin-articles.json';
import { Page } from '../../layouts/page';
import { getGhostClient } from '../../utils/ghost';

type Props = {
  posts: BlogPost[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Code and Culture: Einblicke von unserem Team"
        description="Wenn wir schreiben, schreiben wir meist Code. Hier schreiben wir für einmal über alles, was dahinter steckt – über unsere Firmenkultur und wie wir uns organisieren, welche Ansätze und Technologien bei uns gerade hoch im Kurs sind und wie wir persönliche und technische Herausforderungen meistern. Wirf einen Blick hinter die Kulissen!"
      >
        <Copy>
          Wenn wir schreiben, schreiben wir meist Code. Hier schreiben wir für einmal über alles, was dahinter steckt – über
          unsere Firmenkultur und wie wir uns organisieren, welche Ansätze und Technologien bei uns gerade hoch im Kurs sind
          und wie wir persönliche und technische Herausforderungen meistern. Wirf einen Blick hinter die Kulissen!
        </Copy>
      </PageHeader>

      <main>
        <PageSection>
          <Grid cols={3}>
            {posts.map(({ id, title, description, dateDisplay, link, thumbnail, externalOrigin }, index) => (
              <Fragment key={id}>
                <ImageCard
                  className={index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}
                  variant={index === 0 ? ImageCardVariants.Wide : ImageCardVariants.Small}
                  label={
                    <>
                      <Calendar className="inline-block w-4 h-4 mr-2" />
                      {dateDisplay}
                    </>
                  }
                  title={title}
                  description={index === 0 ? description : ''}
                  link={{
                    label: `weiterlesen${externalOrigin && externalOrigin !== 'Ghost' ? ` auf ${externalOrigin}` : ''}`,
                    href: link,
                    newTab: externalOrigin !== 'Ghost',
                  }}
                  image={{ src: thumbnail, alt: '' }}
                />
                {index === 4 && (
                  <ContentCard
                    title="Suchst du eine Gastautorin für deinen Blog oder einen Speaker für deinen nächsten Event?"
                    link={{ label: 'Melde dich bei Robert', href: 'mailto:robert@smartive.ch' }}
                    background="cornflower"
                    blobs={BlobVariations.cornflower[1]}
                  />
                )}
              </Fragment>
            ))}
          </Grid>
        </PageSection>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  dayjs.locale('de');
  const mediumResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/smartive');
  const mediumPosts: MediumPosts = mediumResponse.ok ? await mediumResponse.json() : [];

  const ghostPostsSingleLanguage = await getGhostClient().posts.browse({
    filter: 'visibility:public+canonical_url:null',
    order: 'published_at DESC',
    limit: 'all',
  });
  const ghostPostsMultiLanguage = await getGhostClient().posts.browse({
    filter: 'visibility:public+canonical_url:-null+tag:German',
    order: 'published_at DESC',
    limit: 'all',
  });

  return {
    props: {
      posts: [
        ...mapMediumPosts(mediumPosts.items),
        ...mapLinkedInPosts(LinkedInArticles),
        ...mapGhostPosts(ghostPostsSingleLanguage),
        ...mapGhostPosts(ghostPostsMultiLanguage),
      ].sort(({ date: first }, { date: second }) => (dayjs(first).isAfter(dayjs(second)) ? -1 : 1)),
    },
    revalidate: 300,
  };
};

const mapMediumPosts = (posts: MediumPost[]): BlogPost[] =>
  posts.map(({ guid, title, description, link, pubDate, thumbnail }) => {
    const matches = description.match(/<h4>[^<>]*<\/h4>/g);
    const desc = matches?.length > 0 ? matches[0] : '';

    return {
      link,
      thumbnail,
      title: decodeURI(title).replace(/&amp;/g, '&'),
      id: guid,
      description: desc.replace('<h4>', '').replace('</h4>', ''),
      date: pubDate,
      dateDisplay: dayjs(pubDate).format('MMMM YYYY'),
      externalOrigin: 'Medium',
    };
  });

const mapLinkedInPosts = (posts: LinkedInArticle[]): BlogPost[] =>
  posts.map(({ title, description, link, date, thumbnail }) => ({
    title,
    link,
    thumbnail,
    description,
    date,
    dateDisplay: dayjs(date).format('MMMM YYYY'),
    id: link,
    externalOrigin: 'LinkedIn',
  }));

const mapGhostPosts = (posts: PostsOrPages): BlogPost[] =>
  posts.map(({ id, title, slug, excerpt, published_at, feature_image }) => ({
    id,
    title,
    link: `/blog/${slug}`,
    thumbnail: feature_image,
    description: excerpt,
    date: published_at,
    dateDisplay: dayjs(published_at).format('MMMM YYYY'),
    externalOrigin: 'Ghost',
  }));

export default Blog;

type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  dateDisplay: string;
  link: string;
  thumbnail: string;
  externalOrigin?: 'Medium' | 'LinkedIn' | 'Ghost';
};

type MediumFeed = {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
};

type MediumPost = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: string[];
};

type MediumPosts = {
  status: string;
  feed: MediumFeed;
  items: MediumPost[];
};
