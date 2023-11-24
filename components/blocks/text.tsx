import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { TextBlockFragment } from '../../graphql/generated';
import { StructuredTextRenderer } from '../dato-structured-text';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: TextBlockFragment;
};

export const TextBlock: FC<Props> = ({ block: { content, disableMarginTop, disableMarginBottom } }) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    {!isEmptyDocument(content) && (
      <div className="font-sans text-xs lg:text-base">
        <StructuredTextRenderer data={content as StructuredTextType} />
      </div>
    )}
  </BlockWrapper>
);
