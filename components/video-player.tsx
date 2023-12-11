'use client';

import MuxVideo from '@mux/mux-video-react';
import { FC } from 'react';

type Props = {
  playbackId: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean | null;
  autoplay?: boolean | null;
  loop?: boolean | null;
  placeholder?: string | null;
};

export const VideoPlayer: FC<Props> = ({ playbackId, width, height, controls, autoplay, loop, placeholder }) => (
  <MuxVideo
    playbackId={playbackId}
    streamType="on-demand"
    controls={controls ?? true}
    autoPlay={autoplay ?? false}
    muted={autoplay ?? false}
    loop={loop ?? false}
    width={width}
    height={height}
    className="rounded"
    placeholder={placeholder}
  />
);
