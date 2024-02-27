import { MetadataRoute } from 'next';
import { getAllDatoRoutes } from '../utils/get-dato-routes';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { pages } = await getAllDatoRoutes(false);

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: pages.filter(({ preventPageIndexing }) => preventPageIndexing).map(({ path }) => path),
    },
    sitemap: 'https://smartive.ch/sitemap.xml',
  };
}
