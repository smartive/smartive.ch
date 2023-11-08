import { FC } from 'react';
import { OffersTeaserRecord } from '../../../graphql/generated';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Grid } from '../../layouts/grid';
import { GridSlider } from '../../layouts/grid-slider';
import { Heading2 } from '../../nodes';
import { OfferCard, OfferCardColor } from '../../offer-card';

type Props = {
  block: OffersTeaserRecord;
};

export const OffersTeaserBlock: FC<Props> = ({ block: { heading, offers, disableMarginTop, disableMarginBottom } }) => {
  const offersList = offers.map(({ id, title, description, timespan, linkLabel, legacyLink, color }) => (
    <OfferCard
      key={id}
      timespan={timespan ?? undefined}
      title={title}
      description={description ?? undefined}
      linkLabel={linkLabel ?? undefined}
      link={legacyLink}
      color={color as OfferCardColor}
    />
  ));

  return (
    <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
      {heading && <Heading2>{heading}</Heading2>}

      <div className="hidden md:block">
        <Grid cols={4}>{offersList}</Grid>
      </div>
      <div className="block md:hidden">
        <GridSlider>{offersList}</GridSlider>
      </div>
    </BlockWrapper>
  );
};
