import { FC } from 'react';
import { Image as DatoImage, ResponsiveImageType } from 'react-datocms';
import { ImageBlockFragment } from '../../../graphql/generated';
import { BlockWrapper } from '../../layouts/block-wrapper';

type Props = {
  block: ImageBlockFragment;
};

type ImageProps = {
  image: ResponsiveImageType;
  caption?: string;
};

const Image: FC<ImageProps> = ({ image, caption }) => (
  <>
    <DatoImage data={image} layout="responsive" className="rounded" />
    {caption && <p className="mt-2 text-xs italic">{caption}</p>}
  </>
);

export const ImageBlock: FC<Props> = ({ block: { images } }) => {
  if (images.length === 1) {
    const { id, title, responsiveImage } = images[0];

    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <Image key={id} image={responsiveImage} caption={title ? title : undefined} />
      </BlockWrapper>
    );
  } else if (images.length > 1) {
    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <div className="grid gap-2 sm:auto-cols-[minmax(0,_1fr)] sm:grid-flow-col sm:gap-8 xl:gap-16">
          {images.map(
            ({ id, title, responsiveImage }) =>
              responsiveImage && <Image key={id} image={responsiveImage} caption={title ? title : undefined} />,
          )}
        </div>
      </BlockWrapper>
    );
  }
};
