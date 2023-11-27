import { MetadataRoute } from 'next';
import { getAllDatoRoutes } from '../utils/get-dato-routes';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { pages, blogposts, offers, projects, topics } = await getAllDatoRoutes(false);

  const indexablePages = pages.filter(({ preventPageIndexing }) => !preventPageIndexing);

  const pagePaths = indexablePages.map(({ path, lastModified }) => ({ url: `https://smartive.ch${path}`, lastModified }));
  const blogpostsPaths = blogposts.map(({ path, lastModified }) => ({ url: `https://smartive.ch${path}`, lastModified }));
  const offersPaths = offers.map(({ path, lastModified }) => ({ url: `https://smartive.ch${path}`, lastModified }));
  const projectsPaths = projects.map(({ path, lastModified }) => ({ url: `https://smartive.ch${path}`, lastModified }));
  const topicsPaths = topics.map(({ path, lastModified }) => ({ url: `https://smartive.ch${path}`, lastModified }));

  return [...pagePaths, ...blogpostsPaths, ...offersPaths, ...projectsPaths, ...topicsPaths];
}
