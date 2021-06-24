import { getPlaiceholder } from 'plaiceholder';

export type ImageWithPlaceholder = {
  type?: string;
  src: string;
  blurDataURL: string;
};

export type PlaceholderImages<T> = { [key in keyof T]: ImageWithPlaceholder };

export const getPlaceholders = async <T>(images: T) =>
  await Promise.all(Object.keys(images).map(async (key) => await getPlaceholder(images[key]))).then((values) =>
    Object.keys(images).reduce(
      (prev, curr, index) => ({ ...prev, [curr]: { ...values[index] } }),
      {} as PlaceholderImages<T>
    )
  );

export const getPlaceholder = async (imagePath: string): Promise<ImageWithPlaceholder> => {
  const {
    base64,
    img: { src, type },
  } = await getPlaiceholder(imagePath);

  return {
    src,
    type,
    blurDataURL: base64,
  };
};
