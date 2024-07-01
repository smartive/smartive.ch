import { ImageGridBlockFragment } from '@/graphql/generated';
import { classNames } from '@smartive/guetzli';
import { FC } from 'react';
import { ImageComponent } from '../image';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageGridBlockFragment;
};

export const ImageGridBlock: FC<Props> = ({
  block: { image1, image2, image3, layout, disableMarginTop, disableMarginBottom },
}) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:grid-rows-2 xl:gap-16">
      {image1 && (
        <div className={classNames('row-start-1', layout === 'portrait-left' ? 'col-start-2' : 'col-start-1')}>
          <ImageComponent image={image1} imgClassName="rounded w-full object-cover" />
        </div>
      )}
      {image2 && (
        <div className={classNames('row-start-2', layout === 'portrait-left' ? 'col-start-2' : 'col-start-1')}>
          <ImageComponent image={image2} imgClassName="rounded w-full object-cover" />
        </div>
      )}
      {image3 && (
        <div className={classNames('row-span-2 row-start-1', layout === 'portrait-left' ? 'col-start-1' : 'col-start-2')}>
          <ImageComponent image={image3} imgClassName="rounded h-full object-cover" />
        </div>
      )}
    </div>
  </BlockWrapper>
);
