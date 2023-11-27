import { MetadataRoute } from 'next';
import DOMAIN_REDIRECTS from '../domain-redirects';
import { getAllDatoRoutes } from '../utils/get-dato-routes';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { pages } = await getAllDatoRoutes(false);

  const disallowedPages = pages.filter(({ preventPageIndexing }) => preventPageIndexing).map(({ path }) => path);

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/welcome/', ...disallowedPages, ...DOMAIN_REDIRECTS.map(({ key }) => `/r/${key}`)],
    },
    sitemap: 'https://smartive.ch/sitemap.xml',
  };
}
