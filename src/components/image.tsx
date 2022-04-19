import NextImage, { ImageProps } from 'next/image';
import { FC, ReactNode } from 'react';

export enum ImageVariant {
  PortraitBig = 'portrait-big',
  PortraitSmall = 'portrait-small',
}

type Props = {
  variant?: ImageVariant;
  rounded?: 'full' | 'default' | 'none';
  caption?: string | ReactNode;
} & Omit<ImageProps, 'placeholder' | 'blurDataURL'>;

export const Image: FC<Props> = ({ alt, rounded = 'default', src, caption, variant, ...props }) => {
  const bgClasses = ['bg-apricot-200', 'bg-cornflower-200', 'bg-mint-200'];
  const randomBg = bgClasses[Math.floor(Math.random() * bgClasses.length)];

  if (variant === ImageVariant.PortraitBig || variant === ImageVariant.PortraitSmall) {
    props.width = variant === ImageVariant.PortraitBig ? 208 : 128;
    props.height = variant === ImageVariant.PortraitBig ? 208 : 128;
    props.objectFit = 'cover';
    rounded = 'full';
  }

  return (
    <figure className="w-full min-h-fit h-auto contents">
      <NextImage
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
        src={src}
        alt={alt}
        className={`transition bg-opacity-50 ${randomBg} ${
          rounded === 'default' ? 'rounded' : rounded === 'full' ? 'rounded-full' : ''
        }`}
      />

      {caption && <figcaption className="italic mt-2">{caption}</figcaption>}
    </figure>
  );
};
