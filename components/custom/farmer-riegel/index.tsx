import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { classNames } from '../../../utils/css';
import { StructuredTextRenderer } from '../../dato/structured-text';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { FarmerModel } from './model';

export const Farmer: FC<{ content: StructuredTextType }> = ({ content }) => {
  const hasContent = !isEmptyDocument(content);

  return (
    <BlockWrapper>
      <div className={classNames(hasContent && 'flex flex-col items-center gap-8 sm:flex-row xl:gap-16 ')}>
        <FarmerModel />
        {hasContent && (
          <div className="basis-3/5 text-xs lg:text-base">
            <StructuredTextRenderer data={content} />
          </div>
        )}
      </div>
    </BlockWrapper>
  );
};
