import { FC } from 'react';
import { VideoBlockFragment } from '../../../graphql/generated';

type Props = {
  block: VideoBlockFragment;
};

const getVideoSrc = (video: VideoBlockFragment['video'], loop: boolean, autoplay: boolean) => {
  switch (video?.provider) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${video.providerUid}?&controls=0&autoplay=${autoplay ? 1 : 0}&loop=${
        loop ? 1 : 0
      }`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${video.providerUid}?autoplay=${autoplay ? 1 : 0}&muted=${
        autoplay ? 1 : 0
      }&loop=${loop ? 1 : 0}&title=0&byline=0&portrait=0&controls=0`;
    default:
      return;
  }
};

export const VideoBlock: FC<Props> = ({ block: { video, loop, autoplay } }) => {
  const videoSrc = getVideoSrc(video, loop ?? false, autoplay ?? false);

  if (!videoSrc) return null;

  return (
    <div className="my-12 lg:my-48">
      <iframe
        className="aspect-video w-full rounded"
        title={video?.title}
        src={videoSrc}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
