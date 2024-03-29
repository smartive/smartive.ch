import { KeyfigureBlockFragment } from '@/graphql/generated';
import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { StructuredTextRenderer } from '../dato-structured-text';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: KeyfigureBlockFragment;
};

export const KeyfigureBlock: FC<Props> = ({ block: { image, content } }) => (
  <BlockWrapper>
    <div className="flex flex-col items-center justify-center gap-8 rounded bg-cornflower-500 p-8 md:flex-row md:gap-16">
      {image?.responsiveImage && <DatoImage data={image?.responsiveImage} className="rounded" />}
      {!isEmptyDocument(content) && (
        <div className="font-bold md:max-w-[50%]">
          <StructuredTextRenderer data={content as StructuredTextType} />
        </div>
      )}
    </div>
  </BlockWrapper>
);
