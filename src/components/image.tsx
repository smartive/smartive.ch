import { useSSRSafeRandomNumber } from '@smartive/guetzli';
import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';
import { FC, ReactNode } from 'react';

export enum ImageVariant {
  PortraitBig = 'portrait-big',
  PortraitSmall = 'portrait-small',
  FillContainer = 'fill-container',
  Centered = 'centered',
}

const cloudinaryLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  const paramsString = params.join(',');
  return `https://res.cloudinary.com/smartive/image/upload/${paramsString}/${src.replace(
    'https://res.cloudinary.com/smartive/image/upload/',
    ''
  )}`;
};

type Props = {
  variant?: ImageVariant;
  rounded?: 'full' | 'default' | 'none';
  caption?: string | ReactNode;
} & Omit<ImageProps, 'placeholder' | 'blurDataURL'>;

export const Image: FC<Props> = ({ alt, rounded = 'default', src, caption, variant, ...props }) => {
  const bgClasses = ['bg-apricot-200', 'bg-cornflower-200', 'bg-mint-200'];
  const colorIndex = useSSRSafeRandomNumber(0, bgClasses.length - 1);

  if (variant === ImageVariant.PortraitBig || variant === ImageVariant.PortraitSmall) {
    props.width = variant === ImageVariant.PortraitBig ? 208 * 2 : 128 * 2;
    props.height = variant === ImageVariant.PortraitBig ? 208 * 2 : 128 * 2;
    rounded = 'full';
  }

  return (
    <figure className="w-full min-h-fit h-auto contents">
      <NextImage
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
        loader={src.toString().includes('cloudinary') ? cloudinaryLoader : undefined}
        onLoadingComplete={({ classList }) => classList.remove(bgClasses[colorIndex])}
        src={src}
        alt={alt}
        className={`transition bg-opacity-50 ${bgClasses[colorIndex]} ${
          rounded === 'default' ? 'rounded' : rounded === 'full' ? 'rounded-full' : ''
        } ${variant === ImageVariant.PortraitBig || variant === ImageVariant.PortraitSmall ? 'object-cover' : ''} ${
          variant === ImageVariant.FillContainer ? 'object-cover w-full h-full' : ''
        } ${variant === ImageVariant.Centered ? 'object-scale-down object-center w-full h-full' : ''}`}
        style={{
          width:
            variant === ImageVariant.PortraitSmall || variant === ImageVariant.PortraitBig
              ? Number.parseInt(props.width.toString(), 10) / 2
              : undefined,
          height:
            variant === ImageVariant.PortraitSmall || variant === ImageVariant.PortraitBig
              ? Number.parseInt(props.height.toString(), 10) / 2
              : undefined,
        }}
      />

      {caption && <figcaption className="italic mt-2 text-xs">{caption}</figcaption>}
    </figure>
  );
};
