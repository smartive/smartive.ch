import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { StructuredTextRenderer } from '../../../components/dato/structured-text';
import { BlockWrapper } from '../../../components/layouts/block-wrapper';
import { Grid } from '../../../components/layouts/grid';
import { Page } from '../../../components/layouts/page';
import { Heading1 } from '../../../components/nodes';
import { ProjectCard } from '../../../components/project-card';
import { ProjectsByTagDocument, TagDocument } from '../../../graphql/generated';
import { queryDatoCMS } from '../../../utils/query-dato-cms';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { projectTag, site } = await queryDatoCMS(TagDocument, { slug });

  return toNextMetadata([...site.favicon, ...(projectTag?.seo || [])]);
}

export default async function TagPage({ params: { slug } }: Params) {
  const { projectTag } = await queryDatoCMS(TagDocument, { slug });

  if (!projectTag) notFound();

  const { allProjects } = await queryDatoCMS(ProjectsByTagDocument, { tagId: projectTag.id });

  return (
    <Page>
      <BlockWrapper marginBottom="small">
        <Heading1>{projectTag.title}</Heading1>
        {!isEmptyDocument(projectTag.content) && <StructuredTextRenderer data={projectTag.content as StructuredTextType} />}
      </BlockWrapper>

      {allProjects.length > 0 && (
        <BlockWrapper marginTop="small">
          <Grid cols={3}>
            {allProjects.map(({ id, slug, title, headline, teaserImage }) => (
              <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
            ))}
          </Grid>
        </BlockWrapper>
      )}
    </Page>
  );
}
