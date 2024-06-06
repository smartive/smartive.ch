'use client';

import { Button, classNames, Heading3 } from '@smartive/guetzli';
import NextImage from 'next/image';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { toHumanreadableTime, type Episode as EpisodeType } from './helpers';
import { PauseIcon, PlayIcon } from './icons';

export const Episodes: FC<{ episodes: EpisodeType[] }> = ({ episodes }) => {
  const [visibleEpisodes, setVisibleEpisodes] = useState(3);

  return (
    <>
      <ol className="mb-6 flex max-w-5xl flex-col gap-4">
        {episodes.slice(0, visibleEpisodes).map((episode) => (
          <Episode episode={episode} key={episode.title} />
        ))}
      </ol>
      {episodes.length > visibleEpisodes && (
        <div className="flex items-center justify-center">
          <Button onClick={() => setVisibleEpisodes(visibleEpisodes + 3)} as="button">
            Mehr laden
          </Button>
        </div>
      )}
    </>
  );
};

const Episode: FC<{ episode: EpisodeType }> = ({ episode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const { title, image, enclosure, date: pubDate, duration, description } = episode;
  const date = new Date(pubDate).toLocaleDateString('de-DE');
  const playbackProgress = (currentTime / duration.seconds) * 100;

  const handleProgressChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const newTime = parseFloat(target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleIsPlaying = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      void audio.play().then(() => setIsPlaying(true));
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    const interval = setInterval(() => setCurrentTime(audio.currentTime), 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <li key={title} className="flex flex-col gap-4 rounded-[12px] bg-black p-4 text-[#E3E3E3] sm:flex-row">
      <div className="relative aspect-square min-h-60 w-full min-w-60 items-center sm:h-60 md:max-w-60">
        <NextImage
          alt={`Podcast-Titelbild für ${title}`}
          src={image}
          width={200}
          height={200}
          className="absolute inset-0 h-full w-full rounded-[12px] border border-[#555] object-cover"
        />
        <audio ref={audioRef} src={enclosure} />
      </div>
      <div className="flex flex-col gap-2.5 p-4">
        <p className="text-xxs">{date}</p>
        <Heading3 className="!mb-0 text-mint-500 lg:mb-0">{title}</Heading3>
        <div className="flex gap-4">
          <button onClick={toggleIsPlaying}>{isPlaying ? <PauseIcon /> : <PlayIcon />}</button>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max={duration.seconds}
              value={currentTime}
              onChange={handleProgressChange}
              className="playback-progress-slider bg-mint-500"
              style={{
                backgroundImage: `linear-gradient(to right, rgb(125 221 209) 0%, rgb(125 221 209) ${playbackProgress}%, rgba(255 255 255 / 0.2) ${playbackProgress}%, rgba(255 255 255 / 0.2) 100%)`,
              }}
            />
            <div className="flex justify-between text-xxs">
              <p>{toHumanreadableTime(currentTime)}</p>
              <p>{duration.formatted}</p>
            </div>
          </div>
        </div>
        <div
          className={classNames(!isExpanded && 'line-clamp-3 sm:line-clamp-2', '[&>p>a]:underline')}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="flex justify-between gap-4 text-xxs font-bold">
          <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Weniger lesen' : 'Mehr lesen'}</button>
        </div>
      </div>
    </li>
  );
};
