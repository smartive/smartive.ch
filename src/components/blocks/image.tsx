import { ImageBlockFragment } from '@/graphql/generated';
import { FC } from 'react';
import { SRCImage as DatoSRCImage, ResponsiveImageType } from 'react-datocms';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageBlockFragment;
};

type ImageProps = {
  image: ResponsiveImageType;
  caption?: string;
  priority?: boolean;
};

const Image: FC<ImageProps> = ({ image, caption, priority }) => (
  <div>
    <DatoSRCImage data={image} className="rounded" priority={priority} style={{ width: '100%', maxWidth: '100%' }} />
    {caption && <p className="mt-2 text-xs italic">{caption}</p>}
  </div>
);

export const ImageBlock: FC<Props> = ({ block: { images, priority } }) => {
  if (images.length === 1) {
    const { id, title, responsiveImage } = images[0];

    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <Image key={id} image={responsiveImage} caption={title ?? undefined} priority={priority} />
      </BlockWrapper>
    );
  } else if (images.length > 1) {
    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <div className="grid gap-2 sm:auto-cols-[minmax(0,_1fr)] sm:grid-flow-col sm:gap-8 xl:gap-16">
          {images.map(
            ({ id, title, responsiveImage }) =>
              responsiveImage && <Image key={id} image={responsiveImage} caption={title ?? undefined} priority={priority} />,
          )}
        </div>
      </BlockWrapper>
    );
  }
};
