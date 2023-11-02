import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../../../components/dato/content-blocks';
import { Page } from '../../../components/layouts/page';
import { ProjectTag, ProjectTagColors } from '../../../components/project-tag';
import { ProjectDocument, ProjectModelContentField } from '../../../graphql/generated';
import { queryDatoCMS } from '../../../utils/query-dato-cms';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { project, site } = await queryDatoCMS(ProjectDocument, { slug });

  return toNextMetadata([...site.favicon, ...(project?.seo || [])]);
}

export default async function ProjectPage({ params: { slug } }: Params) {
  const { project } = await queryDatoCMS(ProjectDocument, { slug });

  if (!project) notFound();

  return (
    <Page hasMargin>
      {project.tags && (
        <div className="mb-4 flex flex-wrap gap-2 lg:mb-8">
          {project.tags.map((tag, index) => (
            <ProjectTag key={tag.id} slug={tag.slug} title={tag.title} color={ProjectTagColors[index % 3]} />
          ))}
        </div>
      )}

      <ContentBlocks blocks={project.content as Array<ProjectModelContentField>} />
    </Page>
  );
}
