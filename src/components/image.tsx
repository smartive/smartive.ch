import { FC } from 'react';
import { SRCImage as DatoSRCImage, ResponsiveImageType } from 'react-datocms';

type ImageProps = {
  image?: {
    responsiveImage?: ResponsiveImageType | null;
    url?: string;
    title?: string | null;
  } | null;
  imgClassName?: string;
  priority?: boolean;
};

export const ImageComponent: FC<ImageProps> = ({ image, priority, imgClassName }) => (
  <>
    {image?.responsiveImage ? (
      <DatoSRCImage
        data={image.responsiveImage}
        imgClassName={imgClassName ?? 'object-cover'}
        priority={priority}
        imgStyle={{ width: '100%', maxWidth: '100%', height: '100%' }}
      />
    ) : (
      image?.url && (
        // to enable svg support, we need to use the img tag instead of the DatoSRCImage or NextImage component
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image.url} alt={image?.title ?? ''} className={imgClassName ?? 'object-cover'} />
      )
    )}
  </>
);
