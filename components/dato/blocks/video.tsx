import { FC } from 'react';
import { VideoBlockFragment } from '../../../graphql/generated';

type Props = {
  block: VideoBlockFragment;
};

export const VideoBlock: FC<Props> = ({ block: { video } }) => {
  // Currently only supports youtube videos
  if (video?.provider !== 'youtube') {
    return null;
  }

  return (
    <div className="my-12 lg:my-48">
      <iframe
        className="aspect-video w-full rounded"
        title={video?.title}
        src={`https://www.youtube-nocookie.com/embed/${video.providerUid}?si=6XsfcGAo_1PfhP1B&amp;controls=0`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
