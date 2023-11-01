import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { TextBlockFragment } from '../../../graphql/generated';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: TextBlockFragment;
};

export const TextBlock: FC<Props> = ({ block: { content, disableMarginTop, disableMarginBottom } }) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    {!isEmptyDocument(content) && <StructuredTextRenderer data={content as StructuredTextType} />}
  </BlockWrapper>
);
