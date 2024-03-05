import { ContentBlocks } from '@/components/content-blocks';
import { Page } from '@/components/layouts/page';
import { TopicLink } from '@/components/projects/topic-link';
import { ProjectDocument, ProjectModelContentField } from '@/graphql/generated';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { project, site } = await queryDatoCMS({
    document: ProjectDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

  return toNextMetadata([...site.favicon, ...(project?.seo ?? [])]);
}

export default async function ProjectPage({ params: { slug } }: Params) {
  const { project } = await queryDatoCMS({
    document: ProjectDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

  if (!project) {
    notFound();
  }

  return (
    <Page>
      {project.topics && (
        <header className="mb-4 mt-12 flex flex-wrap gap-2 lg:mb-8 lg:mt-48">
          {project.topics.map((tag) => (
            <TopicLink key={tag.id} slug={tag.slug} title={tag.title} />
          ))}
        </header>
      )}

      <ContentBlocks blocks={project.content as ProjectModelContentField[]} />
    </Page>
  );
}
