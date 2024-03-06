import { SeoOrFaviconTag, TitleMetaLinkTag, toNextMetadata } from 'react-datocms';

export const getMetadata = (metaData: TitleMetaLinkTag[] | SeoOrFaviconTag[]) => {
  const datoMeta = toNextMetadata(metaData);

  const datoImage = Array.isArray(datoMeta?.openGraph?.images)
    ? datoMeta?.openGraph?.images[0]
    : datoMeta?.openGraph?.images;

  const image = datoImage ?? generateOgImage(datoMeta?.title?.toString() ?? '');

  return {
    ...datoMeta,
    openGraph: {
      ...datoMeta.openGraph,
      images: [{ url: image.url, width: image.width, height: image.height }],
    },
    twitter: {
      ...datoMeta.twitter,
      image: image.url,
    },
  };
};

const generateOgImage = (title: string) => ({
  url: `${process.env.NEXT_PUBLIC_OG_IMAGE_SERVICE_URL}/api/og-image/${encodeURIComponent(title)}?md=1&fontSize=5rem&fileType=png`,
  width: 1200,
  height: 700,
});
