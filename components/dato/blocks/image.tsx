import { FC } from 'react';
import { Image as DatoImage, ResponsiveImageType } from 'react-datocms';
import { ImageBlockFragment } from '../../../graphql/generated';

type Props = {
  block: ImageBlockFragment;
};

type ImageProps = {
  image: ResponsiveImageType;
  caption?: string;
};

const Image: FC<ImageProps> = ({ image, caption }) => (
  <div>
    <DatoImage data={image} layout="responsive" className="rounded" />
    {caption && <p className="mt-2 text-xs italic">{caption}</p>}
  </div>
);

export const ImageBlock: FC<Props> = ({ block: { images } }) => {
  if (images.length === 1) {
    const { id, title, responsiveImage } = images[0];

    return <Image key={id} image={responsiveImage} caption={title ? title : undefined} />;
  } else if (images.length > 1) {
    return (
      <div
        className={`my-8 grid grid-flow-row grid-cols-${images.length} gap-8 md:auto-rows-fr md:grid-cols-2 xl:my-16 xl:gap-16`}
      >
        {images.map(
          ({ id, title, responsiveImage }) =>
            responsiveImage && <Image key={id} image={responsiveImage} caption={title ? title : undefined} />,
        )}
      </div>
    );
  }
};
