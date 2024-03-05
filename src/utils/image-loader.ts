'use client';

import { ImageLoaderProps } from 'next/image';

export const rokkaLoader = ({ src, width }) =>
  `https://smartive-10.rokka.io/dynamic/resize-width-${width}/o-af-1/${src.replace('smartive-10.rokka.io/', '')}`;

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  if (src.includes('smartive-10.rokka.io/')) {
    return rokkaLoader({ src, width });
  }

  if (src.includes('www.datocms-assets.com')) {
    return `${src}?auto=format&fit=crop&w=${width}`;
  }

  return `${src}?w=${width}&q=${quality ?? 75}`;
};

export default imageLoader;
