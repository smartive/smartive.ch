import NextImage from 'next/legacy/image';
import { FC } from 'react';

type Props = {
  src: string;
};

export const Avatar: FC<Props> = ({ src }) => {
  return (
    <div className="relative rounded-full inline-flex items-center p-1 bg-conic-gradient">
      <NextImage
        className="rounded-full"
        loading="eager"
        width="48"
        height="48"
        objectFit="cover"
        objectPosition="center center"
        quality={100}
        src={src}
      />
    </div>
  );
};
