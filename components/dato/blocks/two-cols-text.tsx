import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { TwoColsTextBlockFragment } from '../../../graphql/generated';
import { Grid } from '../../layouts/grid';
import { Heading2 } from '../../nodes';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: TwoColsTextBlockFragment;
};

export const TwoColsTextBlock: FC<Props> = ({
  block: { heading, contentLeft, contentRight, disableMarginTop, disableMarginBottom },
}) => (
  <div className={disableMarginTop || disableMarginBottom ? '' : 'my-12 lg:my-48'}>
    {heading && <Heading2>{heading}</Heading2>}
    <Grid cols={2}>
      {contentLeft && (
        <div>
          <StructuredTextRenderer data={contentLeft as StructuredTextType} />
        </div>
      )}
      {contentRight && (
        <div>
          <StructuredTextRenderer data={contentRight as StructuredTextType} />
        </div>
      )}
    </Grid>
  </div>
);
