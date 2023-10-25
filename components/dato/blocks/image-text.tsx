import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { ImageTextBlockFragment } from '../../../graphql/generated';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: ImageTextBlockFragment;
};

export const ImageTextBlock: FC<Props> = ({ block: { content, image, layout } }) => (
  <div
    className={`my-12 flex flex-col items-center gap-8 sm:flex-row lg:my-48 xl:gap-16 ${
      layout === 'image-right' ? 'flex-row-reverse' : ''
    }`}
  >
    {image?.responsiveImage && (
      <div className="basis-2/5">
        <DatoImage data={image.responsiveImage} layout="responsive" className="rounded" />
      </div>
    )}
    {content && (
      <div className="basis-3/5 text-xs lg:text-base">
        <StructuredTextRenderer data={content as StructuredTextType} />
      </div>
    )}
  </div>
);
