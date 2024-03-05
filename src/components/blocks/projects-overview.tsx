import { ProjectsOverviewBlockFragment } from '@/graphql/generated';
import { FC } from 'react';
import { BlockWrapper } from '../layouts/block-wrapper';
import { AllProjects } from '../projects/all-projects';
import { FilteredProjects } from '../projects/filtered-projects';

type Props = {
  block: ProjectsOverviewBlockFragment;
};

export const ProjectsOverviewBlock: FC<Props> = ({
  block: { filterByTopics, selectedTestimonial, disableMarginTop, disableMarginBottom },
}) => {
  if (filterByTopics.length > 0) {
    return (
      <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
        <FilteredProjects topicIds={filterByTopics.map(({ id }) => id)} />
      </BlockWrapper>
    );
  }

  return (
    <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
      <AllProjects selectedTestimonial={selectedTestimonial} />
    </BlockWrapper>
  );
};
