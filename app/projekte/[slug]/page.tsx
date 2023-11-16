import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../../../components/dato/content-blocks';
import { Page } from '../../../components/layouts/page';
import { ProjectTag } from '../../../components/project-tag';
import { ProjectDocument, ProjectModelContentField } from '../../../graphql/generated';
import { SmartiveColors } from '../../../utils/color';
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
  const { isEnabled } = draftMode();
  const { project } = await queryDatoCMS(ProjectDocument, { slug }, isEnabled);

  if (!project) notFound();

  return (
    <Page>
      {project.tags && (
        <section className="project-tags peer mb-4 mt-12 flex flex-wrap gap-2 lg:mb-8 lg:mt-48">
          {project.tags.map((tag, index) => (
            <ProjectTag key={tag.id} slug={tag.slug} title={tag.title} color={SmartiveColors[index % 3]} />
          ))}
        </section>
      )}

      <ContentBlocks blocks={project.content as Array<ProjectModelContentField>} />
    </Page>
  );
}
