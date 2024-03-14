import { ContentBlocks } from '@/components/content-blocks';
import { BlockWrapper } from '@/components/layouts/block-wrapper';
import { Page } from '@/components/layouts/page';
import { FilteredProjects } from '@/components/projects/filtered-projects';
import { TopicDocument, TopicModelContentField } from '@/graphql/generated';
import { getMetadata } from '@/utils/get-metadata';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { Heading1 } from '@smartive/guetzli';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { topic, site } = await queryDatoCMS({
    document: TopicDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

  return getMetadata([...site.favicon, ...(topic?.seo ?? [])]);
}

export default async function TopicPage({ params: { slug } }: Params) {
  const { topic } = await queryDatoCMS({
    document: TopicDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

  if (!topic) {
    notFound();
  }

  const hasProjectsOverviewBlock = topic.content.some((block) => block.__typename === 'ProjectsOverviewRecord');

  return (
    <Page>
      {!topic.hideTitle && (
        <header className="mt-12 lg:mt-48">
          <Heading1>{topic.title}</Heading1>
        </header>
      )}

      <ContentBlocks blocks={topic.content as TopicModelContentField[]} />

      {!hasProjectsOverviewBlock && (
        <BlockWrapper marginTop="small">
          <FilteredProjects topicIds={[topic.id]} />
        </BlockWrapper>
      )}
    </Page>
  );
}
