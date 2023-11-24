import { Grid } from '@smartive/guetzli';
import { FC } from 'react';
import { ProjectsByTopicsDocument } from '../../graphql/generated';
import { queryDatoCMS } from '../../utils/query-dato-cms';
import { ProjectCard } from './project-card';

type Props = {
  topicIds: string[];
};

export const FilteredProjects: FC<Props> = async ({ topicIds }) => {
  const { allProjects } = await queryDatoCMS({ document: ProjectsByTopicsDocument, variables: { topicIds } });

  if (allProjects.length === 0) return null;

  return (
    <Grid cols={3}>
      {allProjects.map(({ id, slug, title, headline, teaserImage }) => (
        <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
      ))}
    </Grid>
  );
};
