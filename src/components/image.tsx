import NextImage from 'next/image';
import { FC, ReactNode } from 'react';

type Props = {
  width: string | number;
  height: string | number;
  alt: string;
  src: string;
  caption?: string | ReactNode;
};

export const Image: FC<Props> = ({ width, height, alt, src, caption }) => {
  return (
    <figure className="w-full min-h-fit h-auto">
      <NextImage width={width} height={height} layout="responsive" src={src} alt={alt} />

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
