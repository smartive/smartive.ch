import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { ImageGridBlockFragment } from '../../../graphql/generated';
import { classNames } from '../../../utils/css';

type Props = {
  block: ImageGridBlockFragment;
};

export const ImageGridBlock: FC<Props> = ({ block: { image1, image2, image3, layout } }) => (
  <div className="my-12 flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:my-48 xl:gap-16">
    {image1?.responsiveImage && (
      <DatoImage
        data={image1.responsiveImage}
        className={classNames('rounded', layout === 'portrait-left' ? 'row-start-2' : 'row-start-1')}
      />
    )}
    {image2?.responsiveImage && (
      <DatoImage
        data={image2.responsiveImage}
        className={classNames('row-start-2 rounded', layout === 'portrait-left' ? 'col-start-2' : 'col-start-1')}
      />
    )}
    {image3?.responsiveImage && (
      <DatoImage
        data={image3.responsiveImage}
        className={classNames('row-span-2 rounded', layout === 'portrait-left' ? 'col-start-1' : 'col-start-2')}
      />
    )}
  </div>
);
