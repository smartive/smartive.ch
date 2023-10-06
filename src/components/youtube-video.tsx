import { FC, ReactNode } from 'react';

type Props = {
  url: string;
  caption?: string | ReactNode;
};

export const YoutubeVideo: FC<Props> = ({ url, caption }) => {
  const embedId = url.split('youtu.be/')[1] || url.split('youtube.com/watch?v=')[1];
  return (
    <figure>
      {embedId && (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      {caption && <figcaption className="mt-2 text-center text-xs italic">{caption}</figcaption>}
    </figure>
  );
};
