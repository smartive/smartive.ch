import { FC } from 'react';
import { VideoBlockFragment } from '../../graphql/generated';
import { BlockWrapper } from '../layouts/block-wrapper';
import { VideoPlayer } from '../video-player';

type Props = {
  block: VideoBlockFragment;
};

type GetVideoSrcOptions = {
  controls: boolean;
  loop: boolean;
  autoplay: boolean;
};

const getVideoSrc = (video: VideoBlockFragment['video'], { controls, loop, autoplay }: GetVideoSrcOptions) => {
  switch (video?.provider) {
    case 'youtube':
      return `https://www.youtube-nocookie.com/embed/${video.providerUid}?&controls=${controls ? 1 : 0}&autoplay=${
        autoplay ? 1 : 0
      }&loop=${loop ? 1 : 0}`;
    case 'vimeo':
      return `https://player.vimeo.com/video/${video.providerUid}?autoplay=${autoplay ? 1 : 0}&muted=${
        autoplay ? 1 : 0
      }&loop=${loop ? 1 : 0}&title=0&byline=0&portrait=0&controls=${controls ? 1 : 0}}`;
    default:
      return;
  }
};

export const VideoBlock: FC<Props> = ({ block: { videoType, video, videoFile, loop, autoplay, controls } }) => {
  if (videoType === 'external') {
    const videoSrc = getVideoSrc(video, { controls: controls ?? true, loop: loop ?? false, autoplay: autoplay ?? false });

    if (!videoSrc) return null;

    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        <iframe
          className="aspect-video w-full rounded"
          title={video?.title}
          src={videoSrc}
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </BlockWrapper>
    );
  }

  if (videoType === 'upload') {
    return (
      <BlockWrapper marginTop="small" marginBottom="small">
        {videoFile?.video?.muxPlaybackId ? (
          <VideoPlayer
            playbackId={videoFile.video.muxPlaybackId}
            controls={controls}
            autoplay={autoplay}
            loop={loop}
            width={videoFile?.width ?? undefined}
            height={videoFile?.height ?? undefined}
          />
        ) : (
          <div className="'mb-4 border-l-4 border-error bg-error bg-opacity-10 p-4 text-base text-error">
            Sorry, das Video konnte nicht geladen werden. 😔
          </div>
        )}
      </BlockWrapper>
    );
  }
};
