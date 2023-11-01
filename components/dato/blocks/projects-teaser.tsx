import { FC } from 'react';
import { ProjectsTeaserBlockFragment } from '../../../graphql/generated';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Grid } from '../../layouts/grid';
import { Heading2 } from '../../nodes';
import { ProjectCard } from '../../project-card';

type Props = {
  block: ProjectsTeaserBlockFragment;
};

export const ProjectsTeaserBlock: FC<Props> = ({ block: { heading, projects } }) => (
  <BlockWrapper>
    {heading && <Heading2>{heading}</Heading2>}
    <Grid cols={3}>
      {projects.map(({ id, slug, title, headline, teaserImage }) => (
        <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
      ))}
    </Grid>
  </BlockWrapper>
);
