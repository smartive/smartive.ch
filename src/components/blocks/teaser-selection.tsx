import {
  BlogpostCardFragment,
  OffersFragment,
  ProjectsFragment,
  TeaserCardFragment,
  TeaserSelectionRecord,
} from '@/graphql/generated';
import { LinkableRecords, generatePathForRecord } from '@/utils/pathnames';
import { FC } from 'react';
import { Card, CardColors } from '../card';
import { BlockWrapper } from '../layouts/block-wrapper';
import { Grid } from '../layouts/grid';

type Props = {
  block: TeaserSelectionRecord;
};

const Teaser: FC<{ teaser: ProjectsFragment | OffersFragment | TeaserCardFragment | BlogpostCardFragment }> = ({
  teaser,
}) => {
  let internalLink: string | null = null;

  if (teaser.__typename === 'TeaserCardRecord') {
    if (!teaser.isExternalUrl && teaser.link?.slug) {
      internalLink = generatePathForRecord({
        slug: teaser.link?.slug,
        type: teaser.link.__typename as LinkableRecords,
        parent: teaser.link.__typename === 'PageRecord' ? teaser.link.parent : undefined,
      });
    }
  }

  switch (teaser.__typename) {
    case 'ProjectRecord':
      return (
        <Card
          key={teaser.id}
          link={generatePathForRecord({ slug: teaser.slug, type: teaser.__typename })}
          linkTitle={`Projekt '${teaser.title}' ansehen`}
          linkLabel="Projekt anschauen"
          eyebrow={teaser.title}
          title={teaser.headline}
          image={teaser.teaserImage.responsiveImage}
        />
      );
    case 'OfferRecord':
      return (
        <Card
          key={teaser.id}
          link={generatePathForRecord({ slug: teaser.slug, type: teaser.__typename })}
          linkTitle={`Angebot '${teaser.title}' ansehen`}
          linkLabel={teaser.linkLabel}
          title={teaser.title}
          timespan={teaser.timespan}
          description={teaser.description}
          color={teaser.color as CardColors}
          image={teaser.offerImage?.responsiveImage}
        />
      );
    case 'TeaserCardRecord':
      return (
        <Card
          key={teaser.id}
          eyebrow={teaser.eyebrow}
          title={teaser.title}
          link={teaser.isExternalUrl ? teaser.url : internalLink}
          description={teaser.text}
          linkLabel={teaser.linkLabel}
          color={teaser.color as CardColors}
          image={teaser.teaserCardImage?.responsiveImage}
          newTab={teaser.newTab ?? false}
        />
      );
    case 'BlogpostRecord':
      return (
        <Card
          key={teaser.id}
          link={generatePathForRecord({ slug: teaser.slug, type: teaser.__typename })}
          linkTitle={`Beitrag '${teaser.title}' lesen`}
          linkLabel="Beitrag lesen"
          title={teaser.title}
          image={teaser.image.responsiveImage}
          blogpostData={{
            author: teaser.author?.name,
            authorImage: teaser.author?.imagePortrait?.responsiveImage,
            published: teaser.published,
          }}
        />
      );
    default:
      return null;
  }
};

export const TeaserSelectionBlock: FC<Props> = ({ block: { teasers, disableMarginTop, disableMarginBottom } }) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    <Grid cols={teasers?.length ?? 3}>
      {teasers?.map((teaser) => <Teaser key={teaser.id} teaser={teaser as TeaserCardFragment} />)}
    </Grid>
  </BlockWrapper>
);
