import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { GetStaticProps, NextPage } from 'next';
import React, { Fragment } from 'react';
import { ContentCard } from '../compositions/content-card';
import { ImageCard, ImageCardVariants } from '../compositions/image-card';
import { PageHeader } from '../compositions/page-header';
import { PageSection } from '../compositions/page-section';
import { LinkedInArticle } from '../data/linkedin-articles';
import LinkedInArticles from '../data/linkedin-articles.json';
import { Copy } from '../elements/copy';
import { Calendar } from '../elements/icons';
import { Grid } from '../layouts/grid';
import { BlobVariations } from '../utils/blob-variations';

type Props = {
  posts: BlogPost[];
};

const Team: NextPage<Props> = ({ posts }) => {
  return (
    <div>
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
                    label: `weiterlesen${externalOrigin ? ` auf ${externalOrigin}` : ''}`,
                    href: link,
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
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  dayjs.locale('de');
  const mediumResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/smartive');
  const mediumPosts: MediumPosts = mediumResponse.ok ? await mediumResponse.json() : [];

  return {
    props: {
      posts: [
        ...mapMediumPosts(mediumPosts.items),
        ...mapLinkedInPosts(LinkedInArticles),
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
      title: decodeURI(title),
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

export default Team;

type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  dateDisplay: string;
  link: string;
  thumbnail: string;
  externalOrigin?: 'Medium' | 'LinkedIn';
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
