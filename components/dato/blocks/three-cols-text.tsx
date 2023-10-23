import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { ThreeColsTextBlockFragment } from '../../../graphql/generated';
import { Grid } from '../../layouts/grid';
import { Heading2 } from '../../nodes';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: ThreeColsTextBlockFragment;
};

export const ThreeColsTextBlock: FC<Props> = ({
  block: { heading, contentLeft, contentMiddle, contentRight, disableMargin },
}) => (
  <div className={disableMargin ? '' : 'my-12 lg:my-48'}>
    {heading && <Heading2>{heading}</Heading2>}
    <Grid cols={3}>
      {contentLeft && (
        <div>
          <StructuredTextRenderer data={contentLeft as StructuredTextType} />
        </div>
      )}
      {contentMiddle && (
        <div>
          <StructuredTextRenderer data={contentMiddle as StructuredTextType} />
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
