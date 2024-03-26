'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
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
    style={controls ? {} : ({ '--controls': 'none' } as React.CSSProperties)}
    autoPlay={autoplay && 'muted'}
    muted={autoplay ?? false}
    loop={loop ?? false}
    placeholder={placeholder ?? undefined}
  />
);
