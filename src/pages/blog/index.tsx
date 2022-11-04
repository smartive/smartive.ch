import { BlobVariations, Calendar, ContentCard, Copy, Grid, ImageCardVariants } from '@smartive/guetzli';
import dayjs from 'dayjs';
import 'dayjs/locale/de';
import { GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import { NextImageCard } from '../../components/image-card';
import { PageHeader } from '../../compositions/page-header';
import { BlogPost, getBlogPosts } from '../../data/blog';
import { Page } from '../../layouts/page';
import { Section } from '../../layouts/section';

type Props = {
  posts: BlogPost[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Page>
      <PageHeader
        markdownTitle="Code and Culture: _Einblicke_ von unserem Team"
        description="Wenn wir schreiben, schreiben wir meist Code. Hier schreiben wir für einmal über alles, was dahinter steckt – über unsere Firmenkultur und wie wir uns organisieren, welche Ansätze und Technologien bei uns gerade hoch im Kurs sind und wie wir persönliche und technische Herausforderungen meistern. Wirf einen Blick hinter die Kulissen!"
      >
        <Copy>
          Wenn wir schreiben, schreiben wir meist Code. Hier schreiben wir für einmal über alles, was dahinter steckt – über
          unsere Firmenkultur und wie wir uns organisieren, welche Ansätze und Technologien bei uns gerade hoch im Kurs sind
          und wie wir persönliche und technische Herausforderungen meistern. Wirf einen Blick hinter die Kulissen!
        </Copy>
      </PageHeader>

      <main itemScope itemType="https://schema.org/Blog">
        <meta itemProp="headline" content="Code and Culture: Einblicke von unserem Team" />
        <meta
          itemProp="abstract"
          content="Wenn wir schreiben, schreiben wir meist Code. Hier schreiben wir für einmal über alles, was dahinter steckt – über unsere Firmenkultur und wie wir uns organisieren, welche Ansätze und Technologien bei uns gerade hoch im Kurs sind und wie wir persönliche und technische Herausforderungen meistern. Wirf einen Blick hinter die Kulissen!"
        />
        {posts.map(({ id, title, slug }) => (
          <div itemProp="blogPost" itemScope itemType="https://schema.org/BlogPosting" key={`blog-post-meta-${id}`}>
            <meta itemProp="url" content={slug} />
            <meta itemProp="headline" content={title} />
          </div>
        ))}
        <Section>
          <Grid cols={3}>
            {posts.map(({ id, title, slug, date, cover, abstract }, index) => (
              <Fragment key={id}>
                {cover ? (
                  <NextImageCard
                    className={index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}
                    variant={index === 0 ? ImageCardVariants.Wide : ImageCardVariants.Small}
                    label={
                      <>
                        <Calendar className="inline-block w-4 h-4 mr-2" />
                        {dayjs(date).locale('de').format('MMMM YYYY')}
                      </>
                    }
                    title={title}
                    imageAlt={title}
                    description={index === 0 ? abstract.reduce((acc, cur) => `${acc}${cur.plain_text}`, '') : ''}
                    link={{
                      label: `weiterlesen`,
                      href: `blog/${slug}`,
                    }}
                    image={cover || ''}
                  />
                ) : (
                  <ContentCard
                    title={title}
                    label={
                      <>
                        <Calendar className="inline-block w-4 h-4 mr-2" />
                        {dayjs(date).locale('de').format('MMMM YYYY')}
                      </>
                    }
                    link={{
                      label: `weiterlesen`,
                      href: `blog/${slug}`,
                    }}
                    background="cornflower"
                    blobs={BlobVariations.cornflower[1]}
                  />
                )}
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
        </Section>
      </main>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  dayjs.locale('de');

  return {
    props: {
      posts: await getBlogPosts(),
    },
    revalidate: 600,
  };
};

export default Blog;
