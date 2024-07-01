import { ImageTextBlockFragment } from '@/graphql/generated';
import { classNames } from '@smartive/guetzli';
import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { StructuredTextRenderer } from '../dato-structured-text';
import { ImageComponent } from '../image';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageTextBlockFragment;
};

export const ImageTextBlock: FC<Props> = ({
  block: { content, image, layout, disableMarginTop, disableMarginBottom, isKeyfigure = true },
}) => (
  <BlockWrapper marginBottom={disableMarginBottom ? 'none' : 'large'} marginTop={disableMarginTop ? 'none' : 'large'}>
    <div
      className={classNames(
        'flex flex-col items-center gap-8 md:flex-row xl:gap-16',
        layout === 'image-right' && 'sm:flex-row-reverse',
        isKeyfigure && 'justify-center rounded bg-cornflower-500 p-8',
      )}
    >
      {image?.responsiveImage && (
        <div className={classNames(isKeyfigure ? 'flex max-w-[300px] items-center justify-center' : 'basis-2/5')}>
          <ImageComponent image={image} imgClassName="rounded object-cover" />
        </div>
      )}
      {!isEmptyDocument(content) && (
        <div className={classNames(isKeyfigure ? 'font-bold md:max-w-[50%]' : 'basis-3/5')}>
          <StructuredTextRenderer data={content as StructuredTextType} />
        </div>
      )}
    </div>
  </BlockWrapper>
);
