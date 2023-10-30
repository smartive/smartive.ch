import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { TextBlockFragment } from '../../../graphql/generated';
import { classNames } from '../../../utils/css';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: TextBlockFragment;
};

export const TextBlock: FC<Props> = ({ block: { content, disableMarginTop, disableMarginBottom } }) => (
  <div className={classNames(!disableMarginTop && 'mt-12 lg:mt-48', !disableMarginBottom && 'mb-12 lg:mb-48')}>
    {!isEmptyDocument(content) && <StructuredTextRenderer data={content as StructuredTextType} />}
  </div>
);
