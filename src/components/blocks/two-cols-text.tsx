import { TwoColsTextBlockFragment } from '@/graphql/generated';
import { Heading2 } from '@smartive/guetzli';
import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { StructuredTextRenderer } from '../dato-structured-text';
import { BlockWrapper } from '../layouts/block-wrapper';
import { Grid } from '../layouts/grid';

type Props = {
  block: TwoColsTextBlockFragment;
};

export const TwoColsTextBlock: FC<Props> = ({
  block: { heading, contentLeft, contentRight, disableMarginTop, disableMarginBottom },
}) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    {heading && <Heading2>{heading}</Heading2>}
    <Grid cols={2}>
      {!isEmptyDocument(contentLeft) && <StructuredTextRenderer data={contentLeft as StructuredTextType} />}
      {!isEmptyDocument(contentRight) && <StructuredTextRenderer data={contentRight as StructuredTextType} />}
    </Grid>
  </BlockWrapper>
);
