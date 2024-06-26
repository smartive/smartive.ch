'use client';

import dynamic from 'next/dynamic';
import { CSSProperties, FC } from 'react';
import { Video } from 'react-datocms/video-player';

type Props = {
  video: Video;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  placeholder?: string | null;
};

const DatoVideoPlayer = dynamic(() => import('react-datocms/video-player').then((module) => module.VideoPlayer));

export const VideoPlayer: FC<Props> = ({ video, controls, autoplay, loop, placeholder }) => (
  <DatoVideoPlayer
    className="overflow-hidden rounded"
    data={video}
    style={
      {
        aspectRatio: `${video.width} / ${video.height}`,
        '--seek-backward-button': 'none',
        '--seek-forward-button': 'none',
        '--captions-button0': 'none',
        '--airplay-button': 'none',
        '--fullscreen-button': 'none',
        '--pip-button': 'none',
        '--playback-rate-button': 'none',
        '--cast-button': 'none',
        '--rendition-selectmenu': 'none',
        transform: 'translate3d(0, 0, 0)',
        ...(controls ? {} : { '--top-controls': 'none', '--bottom-controls': 'none' }),
      } as CSSProperties
    }
    autoPlay={autoplay && 'muted'}
    muted={autoplay ?? false}
    loop={loop ?? false}
    placeholder={placeholder ?? undefined}
    primaryColor="#FFFFFF"
    secondaryColor="#252525"
    accentColor="#6986E8"
  />
);
