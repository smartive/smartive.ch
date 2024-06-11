import { ImageTextBlockFragment } from '@/graphql/generated';
import { classNames } from '@smartive/guetzli';
import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';
import { StructuredTextRenderer } from '../dato-structured-text';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageTextBlockFragment;
};

export const ImageTextBlock: FC<Props> = ({ block: { content, image, layout, disableMarginTop, disableMarginBottom } }) => (
  <BlockWrapper marginBottom={disableMarginBottom ? 'none' : 'large'} marginTop={disableMarginTop ? 'none' : 'large'}>
    <div
      className={classNames(
        'flex flex-col items-center gap-8 sm:flex-row xl:gap-16',
        layout === 'image-right' && 'sm:flex-row-reverse',
      )}
    >
      {image?.responsiveImage && (
        <div className="basis-2/5">
          <DatoSRCImage data={image.responsiveImage} className="rounded" style={{ width: '100%', maxWidth: '100%' }} />
        </div>
      )}
      {!isEmptyDocument(content) && (
        <div className="basis-3/5">
          <StructuredTextRenderer data={content as StructuredTextType} />
        </div>
      )}
    </div>
  </BlockWrapper>
);
