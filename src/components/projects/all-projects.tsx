import { MainProjectsDocument, OtherProjectsDocument, ProjectsOverviewBlockFragment } from '@/graphql/generated';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { draftMode } from 'next/headers';
import { FC } from 'react';
import { Card } from '../card';
import { Grid } from '../layouts/grid';
import { GridSlider } from '../layouts/grid-slider';
import { Testimonial } from '../testimonial';

type Props = {
  selectedTestimonial: ProjectsOverviewBlockFragment['selectedTestimonial'];
};

export const AllProjects: FC<Props> = async ({ selectedTestimonial }) => {
  const { allProjects: mainProjects } = await queryDatoCMS({
    document: MainProjectsDocument,
    includeDrafts: draftMode().isEnabled,
  });
  const { allProjects: otherProjects } = await queryDatoCMS({
    document: OtherProjectsDocument,
    includeDrafts: draftMode().isEnabled,
  });

  return (
    <>
      <Grid cols={2}>
        {mainProjects.map(({ id, slug, title, headline, teaserImage }) => (
          <Card
            key={id}
            link={`/projekte/${slug}`}
            linkTitle={`Projekt '${title}' ansehen`}
            linkLabel="Projekt anschauen"
            eyebrow={title}
            title={headline}
            image={teaserImage.responsiveImage}
          />
        ))}
      </Grid>
      <GridSlider>
        {otherProjects.slice(0, 3).map(({ id, slug, title, headline, teaserImage }) => (
          <Card
            key={id}
            link={`/projekte/${slug}`}
            linkTitle={`Projekt '${title}' ansehen`}
            linkLabel="Projekt anschauen"
            eyebrow={title}
            title={headline}
            image={teaserImage.responsiveImage}
          />
        ))}
      </GridSlider>
      {selectedTestimonial && (
        <Testimonial
          quote={selectedTestimonial.quote}
          image={selectedTestimonial.authorImage?.responsiveImage}
          authorName={selectedTestimonial.authorName ?? undefined}
          authorDesc={selectedTestimonial.authorDesc ?? undefined}
        />
      )}
      <Grid cols={3}>
        {otherProjects.slice(3, otherProjects.length).map(({ id, slug, title, headline, teaserImage }) => (
          <Card
            key={id}
            link={`/projekte/${slug}`}
            linkTitle={`Projekt '${title}' ansehen`}
            linkLabel="Projekt anschauen"
            eyebrow={title}
            title={headline}
            image={teaserImage.responsiveImage}
          />
        ))}
      </Grid>
    </>
  );
};
