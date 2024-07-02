import { getAllDatoRoutes } from '@/utils/get-dato-routes';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getAllDatoRoutes({ includeDrafts: false });

  return routes
    .filter(({ noIndex }) => !noIndex)
    .map(({ path, lastModified }) => ({ url: `https://smartive.ch${path}`, lastModified }));
}
