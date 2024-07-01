import { ImageBlockFragment } from '@/graphql/generated';
import { FC } from 'react';
import { ImageComponent } from '../image';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ImageBlockFragment;
};

export const ImageBlock: FC<Props> = ({ block: { images, priority } }) => {
  if (images.length === 1) {
    const image = images[0];

    if (!image) {
      return null;
    }

    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <>
          <ImageComponent key={image.id} image={image} priority={priority} imgClassName="rounded object-cover" />
          {image?.title && <p className="mt-2 text-xs italic">{image.title}</p>}
        </>
      </BlockWrapper>
    );
  } else if (images.length > 1) {
    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <div className="grid gap-2 sm:auto-cols-[minmax(0,_1fr)] sm:grid-flow-col sm:gap-8 xl:gap-16">
          {images.map((image) => (
            <div key={image.id}>
              <ImageComponent key={image.id} image={image} priority={priority} imgClassName="rounded object-cover" />
              {image?.title && <p className="mt-2 text-xs italic">{image.title}</p>}
            </div>
          ))}
        </div>
      </BlockWrapper>
    );
  }
};
