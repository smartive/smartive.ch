import { FC } from 'react';
import { ProjectsOverviewBlockFragment } from '../../graphql/generated';
import { BlockWrapper } from '../layouts/block-wrapper';
import { AllProjects } from '../projects/all-projects';
import { FilteredProjects } from '../projects/filtered-projects';

type Props = {
  block: ProjectsOverviewBlockFragment;
};

export const ProjectsOverviewBlock: FC<Props> = async ({ block: { filterByTopics, selectedTestimonial } }) => {
  if (filterByTopics.length > 0) {
    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <FilteredProjects topicIds={filterByTopics.map(({ id }) => id)} />
      </BlockWrapper>
    );
  }

  return (
    <BlockWrapper marginTop="small" marginBottom="small">
      <AllProjects selectedTestimonial={selectedTestimonial} />
    </BlockWrapper>
  );
};
