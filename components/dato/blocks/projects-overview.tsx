import { FC } from 'react';
import { MainProjectsDocument, OtherProjectsDocument, ProjectsOverviewBlockFragment } from '../../../graphql/generated';
import { queryDatoCMS } from '../../../utils/query-dato-cms';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Grid } from '../../layouts/grid';
import { GridSlider } from '../../layouts/grid-slider';
import { ProjectCard } from '../../project-card';
import { SingleTestimonial } from '../../single-testimonial';

type Props = {
  block: ProjectsOverviewBlockFragment;
};

export const ProjectsOverviewBlock: FC<Props> = async ({ block: { selectedTestimonial } }) => {
  const { allProjects: mainProjects } = await queryDatoCMS(MainProjectsDocument);
  const { allProjects: otherProjects } = await queryDatoCMS(OtherProjectsDocument);

  return (
    <BlockWrapper marginTop="small" marginBottom="small">
      <Grid cols={2}>
        {mainProjects.map(({ id, slug, title, headline, teaserImage }) => (
          <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
        ))}
      </Grid>
      <GridSlider>
        {otherProjects.slice(0, 3).map(({ id, slug, title, headline, teaserImage }) => (
          <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
        ))}
      </GridSlider>
      {selectedTestimonial && (
        <SingleTestimonial
          quote={selectedTestimonial.quote}
          image={selectedTestimonial.authorImage?.responsiveImage}
          authorName={selectedTestimonial.authorName ?? undefined}
          authorDesc={selectedTestimonial.authorDesc ?? undefined}
          hasMargin={false}
        />
      )}
      <Grid cols={3}>
        {otherProjects.slice(3, otherProjects.length).map(({ id, slug, title, headline, teaserImage }) => (
          <ProjectCard key={id} slug={slug} title={title} headline={headline} image={teaserImage.responsiveImage} />
        ))}
      </Grid>
    </BlockWrapper>
  );
};
