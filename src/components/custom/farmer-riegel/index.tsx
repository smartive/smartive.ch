import { classNames } from '@/utils/css';
import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { StructuredTextRenderer } from '../../dato-structured-text';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Farmer } from './farmer';

export const FarmerBlock: FC<{ content: StructuredTextType }> = ({ content }) => {
  const hasContent = !isEmptyDocument(content);

  return (
    <BlockWrapper>
      <div className={classNames(hasContent && 'flex flex-col items-center gap-8 md:flex-row xl:gap-16 ')}>
        <Farmer />
        {hasContent && (
          <div className="basis-3/5 text-xs lg:text-base">
            <StructuredTextRenderer data={content} />
          </div>
        )}
      </div>
    </BlockWrapper>
  );
};
