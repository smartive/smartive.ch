import { FC, ReactNode } from 'react';

type Props = {
  src: string;
  caption?: string | ReactNode;
};

export const Video: FC<Props> = ({ src, caption }) => {
  return (
    <figure>
      <video width="1000" height="562" className="h-auto w-full rounded" controls autoPlay loop muted>
        <source src={src} type="video/mp4"></source>
      </video>

      {caption && <figcaption className="mt-2 text-center text-xs italic">{caption}</figcaption>}
    </figure>
  );
};
