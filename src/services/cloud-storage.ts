import Rokka from 'rokka';

export type Photo = {
  key: string;
  src: string;
  width: number;
  height: number;
};

const rokkaStorage = Rokka({
  apiKey: process.env.ROKKA_API_KEY,
});

const organization = process.env.ROKKA_ORGANIZATION;

export const rokkaLoader = ({ src, width }) => {
  return `https://smartive-10.rokka.io/dynamic/resize-width-${width}/o-af-1/${src}`;
};

export async function getImagesFromRokka(type: string): Promise<Photo[]> {
  const search = {
    name: type,
  };
  return (
    await rokkaStorage.sourceimages.list(organization, { search: search, limit: 2000, sort: 'created desc' })
  ).body.items.map(
    (f): Photo => ({
      key: f.hash,
      src: f.hash + '/' + f.name,
      width: f.width,
      height: f.height,
    })
  );
}
