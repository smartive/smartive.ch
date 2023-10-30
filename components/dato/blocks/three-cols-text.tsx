import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { ThreeColsTextBlockFragment } from '../../../graphql/generated';
import { classNames } from '../../../utils/css';
import { Grid } from '../../layouts/grid';
import { Heading2 } from '../../nodes';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: ThreeColsTextBlockFragment;
};

export const ThreeColsTextBlock: FC<Props> = ({
  block: { heading, contentLeft, contentMiddle, contentRight, disableMarginTop, disableMarginBottom },
}) => (
  <div className={classNames(!disableMarginTop && 'mt-12 lg:mt-48', !disableMarginBottom && 'mb-12 lg:mb-48')}>
    {heading && <Heading2>{heading}</Heading2>}
    <Grid cols={3}>
      {!isEmptyDocument(contentLeft) && (
        <div>
          <StructuredTextRenderer data={contentLeft as StructuredTextType} />
        </div>
      )}
      {!isEmptyDocument(contentMiddle) && (
        <div>
          <StructuredTextRenderer data={contentMiddle as StructuredTextType} />
        </div>
      )}
      {!isEmptyDocument(contentRight) && (
        <div>
          <StructuredTextRenderer data={contentRight as StructuredTextType} />
        </div>
      )}
    </Grid>
  </div>
);
