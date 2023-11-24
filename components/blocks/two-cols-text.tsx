import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { TwoColsTextBlockFragment } from '../../graphql/generated';
import { StructuredTextRenderer } from '../dato-structured-text';
import { BlockWrapper } from '../layouts/block-wrapper';
import { Grid } from '../layouts/grid';
import { Heading2 } from '../nodes';

type Props = {
  block: TwoColsTextBlockFragment;
};

export const TwoColsTextBlock: FC<Props> = ({
  block: { heading, contentLeft, contentRight, disableMarginTop, disableMarginBottom },
}) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    {heading && <Heading2>{heading}</Heading2>}
    <Grid cols={2}>
      {!isEmptyDocument(contentLeft) && (
        <div className="font-sans text-xs lg:text-base">
          <StructuredTextRenderer data={contentLeft as StructuredTextType} />
        </div>
      )}
      {!isEmptyDocument(contentRight) && (
        <div className="font-sans text-xs lg:text-base">
          <StructuredTextRenderer data={contentRight as StructuredTextType} />
        </div>
      )}
    </Grid>
  </BlockWrapper>
);
