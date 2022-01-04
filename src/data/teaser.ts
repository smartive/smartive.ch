import { getPlaceholder, ImageWithPlaceholder } from '../utils/image-placeholders';
import Teasers from './teasers.json';

export type Award = {
  short: string;
  full: string;
};

export type Teaser = {
  label: string;
  title: string;
  link: { label: string; href: string };
  image: ImageWithPlaceholder;
  imageAlt: string;
  awards?: Award[];
};

export const transformTeaser = async (teaser: typeof Teasers.migipedia | typeof Teasers.ofpg): Promise<Teaser> => ({
  ...teaser,
  image: await getPlaceholder(teaser.image),
});
