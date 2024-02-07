import { FC } from 'react';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { Episodes } from './episode';
import { getEpisodes } from './helpers';

export const Podcast: FC = async () => {
  const episodes = await getEpisodes();

  return (
    <BlockWrapper>
      <Episodes episodes={episodes} />
    </BlockWrapper>
  );
};
