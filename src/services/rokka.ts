import Rokka from 'rokka';

type Photo = {
  key: string;
  src: string;
  width: number;
  height: number;
};

const rokkaStorage = Rokka({
  apiKey: process.env.ROKKA_API_KEY,
});

const organization = process.env.ROKKA_ORGANIZATION ?? 'smartive';

export async function getImagesFromRokka(name: string): Promise<Photo[]> {
  const search = {
    name,
  };

  return (
    await rokkaStorage.sourceimages.list(organization, { search: search, limit: 2000, sort: 'created desc' })
  ).body.items.map(
    (f): Photo => ({
      key: f.hash,
      src: `smartive-10.rokka.io/${f.hash}/${f.name}`,
      width: f.width,
      height: f.height,
    }),
  );
}
