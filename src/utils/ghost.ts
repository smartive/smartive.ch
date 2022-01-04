import GhostContentAPI from '@tryghost/content-api';

export const getGhostClient = () =>
  new GhostContentAPI({
    url: process.env.GHOST_URL,
    key: process.env.GHOST_KEY,
    version: 'v3',
  });
