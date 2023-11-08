import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { TeaserSelectionBlockFragment, TeaserSelectionModelTeasersField } from '../../../graphql/generated';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Grid } from '../../layouts/grid';
import { OfferCard, OfferCardColor } from '../../offer-card';
import { ProjectCard } from '../../project-card';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: TeaserSelectionBlockFragment;
};

export const TeaserSelectionBlock: FC<Props> = ({ block: { content, columnCount, teasers } }) => (
  <BlockWrapper>
    <StructuredTextRenderer data={content?.value as StructuredTextType} />
    <Grid cols={(columnCount ?? 3) as 2 | 3 | 4}>
      {teasers?.map((teaser) => renderTeasers(teaser as TeaserSelectionModelTeasersField))}
    </Grid>
  </BlockWrapper>
);

const renderTeasers = (teaser: TeaserSelectionModelTeasersField) => {
  switch (teaser.__typename) {
    case 'ProjectRecord':
      return (
        <ProjectCard
          key={teaser.id}
          slug={teaser.slug}
          title={teaser.title}
          headline={teaser.headline}
          image={teaser.teaserImage.responsiveImage}
        />
      );
    case 'OfferRecord':
      return (
        <OfferCard
          key={teaser.id}
          title={teaser.title}
          link={teaser.legacyLink}
          timespan={teaser.timespan}
          description={teaser.description}
          linkLabel={teaser.linkLabel}
          color={teaser.color as OfferCardColor}
        />
      );
    case 'TeaserCardRecord':
      return (
        <OfferCard
          key={teaser.id}
          title={teaser.title}
          link={teaser.url}
          description={teaser.text}
          linkLabel={teaser.linkLabel}
          color={teaser.color as OfferCardColor}
        />
      );
    default:
      return null;
  }
};
