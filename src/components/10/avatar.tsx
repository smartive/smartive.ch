import NextImage from 'next/legacy/image';
import { FC } from 'react';

type Props = {
  src: string;
};

export const Avatar: FC<Props> = ({ src }) => {
  return (
    <div className="relative inline-flex items-center rounded-full bg-conic-gradient p-1">
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
