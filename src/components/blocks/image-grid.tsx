import { ImageGridBlockFragment } from '@/graphql/generated';
import { classNames } from '@smartive/guetzli';
import { FC } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageGridBlockFragment;
};

export const ImageGridBlock: FC<Props> = ({
  block: { image1, image2, image3, layout, disableMarginTop, disableMarginBottom },
}) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:grid-rows-2 xl:gap-16">
      {image1?.responsiveImage && (
        <DatoSRCImage
          data={image1.responsiveImage}
          className={classNames('row-start-1 rounded', layout === 'portrait-left' ? 'col-start-2' : 'col-start-1')}
        />
      )}
      {image2?.responsiveImage && (
        <DatoSRCImage
          data={image2.responsiveImage}
          className={classNames('row-start-2 rounded', layout === 'portrait-left' ? 'col-start-2' : 'col-start-1')}
        />
      )}
      {image3?.responsiveImage && (
        <DatoSRCImage
          data={image3.responsiveImage}
          className={classNames(
            'row-span-2 row-start-1 rounded',
            layout === 'portrait-left' ? 'col-start-1' : 'col-start-2',
          )}
        />
      )}
    </div>
  </BlockWrapper>
);
