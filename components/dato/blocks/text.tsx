import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { TextBlockFragment } from '../../../graphql/generated';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: TextBlockFragment;
};

export const TextBlock: FC<Props> = ({ block: { content, disableMarginTop, disableMarginBottom } }) => (
  <div className={disableMarginTop || disableMarginBottom ? '' : 'my-12 lg:my-48'}>
    {content && <StructuredTextRenderer data={content as StructuredTextType} />}
  </div>
);
