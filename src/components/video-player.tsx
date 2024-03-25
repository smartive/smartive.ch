'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';

type Props = {
  playbackId: string;
  width?: number | string;
  height?: number | string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  placeholder?: string | null;
};

const MuxVideo = dynamic(() => import('@mux/mux-video-react'), { ssr: false });

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
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
  />
);
