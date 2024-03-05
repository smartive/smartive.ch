import sanitizeHtml from 'sanitize-html';
import { Parser } from 'xml2js';

type RawEpisode = {
  title: string[];
  link: string[];
  pubDate: string[];
  description: string[];
  'itunes:duration': string[];
  enclosure: [{ $: { url: string } }];
  'itunes:image': [{ $: { href: string } }];
};

type ParsedXML = {
  rss: {
    channel: [
      {
        item: RawEpisode[];
      },
    ];
  };
};

export async function getEpisodes() {
  try {
    const response = await fetch('https://anchor.fm/s/eef08ae0/podcast/rss', {
      next: { revalidate: 60 * 60 * 24 },
    });

    const rawResult = await response.text();
    const { rss } = (await new Parser().parseStringPromise(rawResult)) as ParsedXML;
    const episodes = rss.channel[0].item;

    return episodes.map((episode) => {
      const duration = episode['itunes:duration'][0].replace(/^00:/, '');

      return {
        date: episode.pubDate[0],
        duration: {
          seconds: duration.split(':').reduce((sum, time) => sum * 60 + parseInt(time), 0),
          formatted: duration,
        },
        title: episode.title[0],
        description: sanitizeHtml(episode.description[0]),
        enclosure: episode.enclosure[0].$.url,
        image: episode['itunes:image'][0].$.href,
      };
    });
  } catch (error) {
    console.error(error);
  }

  return [];
}

export const toHumanreadableTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = Math.floor(seconds - hours * 3600 - minutes * 60);

  return [hours, minutes, remainingSeconds]
    .map((n) => n.toString().padStart(2, '0'))
    .join(':')
    .replace(/^00:/, '');
};

export type Episode = {
  title: string;
  image: string;
  enclosure: string;
  date: string;
  duration: {
    seconds: number;
    formatted: string;
  };
  description: string;
};
