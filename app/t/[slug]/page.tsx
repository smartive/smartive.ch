import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../../../components/content-blocks';
import { BlockWrapper } from '../../../components/layouts/block-wrapper';
import { Page } from '../../../components/layouts/page';
import { Heading1 } from '../../../components/nodes';
import { FilteredProjects } from '../../../components/projects/filtered-projects';
import { TopicDocument, TopicModelContentField } from '../../../graphql/generated';
import { queryDatoCMS } from '../../../utils/query-dato-cms';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { topic, site } = await queryDatoCMS({ document: TopicDocument, variables: { slug } });

  return toNextMetadata([...site.favicon, ...(topic?.seo || [])]);
}

export default async function TopicPage({ params: { slug } }: Params) {
  const { isEnabled } = draftMode();
  const { topic } = await queryDatoCMS({ document: TopicDocument, variables: { slug }, includeDrafts: isEnabled });

  if (!topic) notFound();

  const hasProjectsOverviewBlock = topic.content.some((block) => block.__typename === 'ProjectsOverviewRecord');

  return (
    <Page>
      {!topic.hideTitle && (
        <header className="mt-12 lg:mt-48">
          <Heading1>{topic.title}</Heading1>
        </header>
      )}

      <ContentBlocks blocks={topic.content as Array<TopicModelContentField>} />

      {!hasProjectsOverviewBlock && (
        <BlockWrapper marginTop="small">
          <FilteredProjects topicIds={[topic.id]} />
        </BlockWrapper>
      )}
    </Page>
  );
}
