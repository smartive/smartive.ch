import { ImageGridBlockFragment, ResponsiveImageFragment } from '@/graphql/generated';
import { classNames } from '@smartive/guetzli';
import { FC } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageGridBlockFragment;
};

const Image: FC<{ image: ResponsiveImageFragment }> = ({ image }) => (
  <DatoSRCImage data={image} style={{ width: '100%', maxWidth: '100%', height: '100%' }} className="rounded object-cover" />
);

export const ImageGridBlock: FC<Props> = ({
  block: { image1, image2, image3, layout, disableMarginTop, disableMarginBottom },
}) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:grid-rows-2 xl:gap-16">
      {image1?.responsiveImage && (
        <div className={classNames('row-start-1', layout === 'portrait-left' ? 'col-start-2' : 'col-start-1')}>
          <Image image={image1.responsiveImage} />
        </div>
      )}
      {image2?.responsiveImage && (
        <div className={classNames('row-start-2', layout === 'portrait-left' ? 'col-start-2' : 'col-start-1')}>
          <Image image={image2.responsiveImage} />
        </div>
      )}
      {image3?.responsiveImage && (
        <div className={classNames('row-span-2 row-start-1', layout === 'portrait-left' ? 'col-start-1' : 'col-start-2')}>
          <Image image={image3.responsiveImage} />
        </div>
      )}
    </div>
  </BlockWrapper>
);
