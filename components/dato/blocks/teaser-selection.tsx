import { FC } from 'react';
import { TeaserSelectionBlockFragment, TeaserSelectionModelTeasersField } from '../../../graphql/generated';
import { SmartiveColorsType } from '../../../utils/color';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Grid } from '../../layouts/grid';
import { OfferCard } from '../../offer-card';
import { ProjectCard } from '../../project-card';
import { TeaserCard } from '../../teaser-card';

type Props = {
  block: TeaserSelectionBlockFragment;
};

const Teaser: FC<{ teaser: TeaserSelectionModelTeasersField }> = ({ teaser }) => {
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
          slug={teaser.slug}
          title={teaser.title}
          timespan={teaser.timespan}
          description={teaser.description}
          linkLabel={teaser.linkLabel}
          color={teaser.color as SmartiveColorsType}
        />
      );
    case 'TeaserCardRecord':
      return (
        <TeaserCard
          key={teaser.id}
          eyebrow={teaser.eyebrow}
          title={teaser.title}
          link={teaser.url}
          description={teaser.text}
          linkLabel={teaser.linkLabel}
          color={teaser.color as SmartiveColorsType}
          newTab={teaser.newTab ?? false}
        />
      );
    default:
      return null;
  }
};

export const TeaserSelectionBlock: FC<Props> = ({ block: { teasers, disableMarginTop, disableMarginBottom } }) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    <Grid cols={(teasers?.length ?? 3) as 2 | 3 | 4}>
      {teasers?.map((teaser) => <Teaser key={teaser.id} teaser={teaser as TeaserSelectionModelTeasersField} />)}
    </Grid>
  </BlockWrapper>
);
