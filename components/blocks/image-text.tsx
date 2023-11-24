import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { ImageTextBlockFragment } from '../../graphql/generated';
import { StructuredTextRenderer } from '../dato-structured-text';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageTextBlockFragment;
};

export const ImageTextBlock: FC<Props> = ({ block: { content, image, layout } }) => (
  <BlockWrapper>
    <div
      className={`flex flex-col items-center gap-8 sm:flex-row xl:gap-16 ${
        layout === 'image-right' ? 'sm:flex-row-reverse' : ''
      }`}
    >
      {image?.responsiveImage && (
        <div className="basis-2/5">
          <DatoImage data={image.responsiveImage} layout="responsive" className="rounded" />
        </div>
      )}
      {!isEmptyDocument(content) && (
        <div className="basis-3/5 text-xs lg:text-base">
          <StructuredTextRenderer data={content as StructuredTextType} />
        </div>
      )}
    </div>
  </BlockWrapper>
);
