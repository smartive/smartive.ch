import { getAllDatoRoutes } from '@/utils/get-dato-routes';
import { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const routes = await getAllDatoRoutes({ includeDrafts: false });

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: routes.filter(({ noIndex }) => noIndex).map(({ path }) => path),
    },
    sitemap: 'https://smartive.ch/sitemap.xml',
  };
}
