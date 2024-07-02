import { AllRoutesDocument } from '@/graphql/generated';
import { generatePathForRecord } from './pathnames';
import { queryDatoCMS } from './query-dato-cms';

type Route = {
  path: string;
  lastModified: string;
  noIndex?: boolean;
};

type Options = {
  includeDrafts?: boolean;
  pagesOnly?: boolean;
};

export const getAllDatoRoutes = async ({ includeDrafts = true, pagesOnly = false }: Options = {}): Promise<Route[]> => {
  const data = await queryDatoCMS({
    document: AllRoutesDocument,
    includeDrafts,
  });

  const pages =
    data.allPages.map(({ slug, lastModified, seometatags, parent }) => ({
      path: generatePathForRecord({ slug, type: 'PageRecord', parent }),
      lastModified,
      noIndex: seometatags?.noIndex ?? undefined,
    })) || [];

  // We replace the /home path with / because the homepage is redirected in next.config.js
  const homeIndex = pages.findIndex(({ path }) => path === '/home');
  if (homeIndex > -1) {
    pages[homeIndex].path = '/';
  }

  const blogposts =
    data.allBlogposts.map(({ slug, lastModified, seometatags }) => ({
      path: generatePathForRecord({ slug, type: 'BlogpostRecord' }),
      lastModified,
      noIndex: seometatags?.noIndex ?? undefined,
    })) || [];

  const offers =
    data.allOffers.map(({ slug, lastModified, seometatags }) => ({
      path: generatePathForRecord({ slug, type: 'OfferRecord' }),
      lastModified,
      noIndex: seometatags?.noIndex ?? undefined,
    })) || [];

  const projects =
    data.allProjects.map(({ slug, lastModified, seometatags }) => ({
      path: generatePathForRecord({ slug, type: 'ProjectRecord' }),
      lastModified,
      noIndex: seometatags?.noIndex ?? undefined,
    })) || [];

  const topics =
    data.allTopics.map(({ slug, lastModified, seometatags }) => ({
      path: generatePathForRecord({ slug, type: 'TopicRecord' }),
      lastModified,
      noIndex: seometatags?.noIndex ?? undefined,
    })) || [];

  if (pagesOnly) {
    return pages;
  }

  return [...pages, ...blogposts, ...offers, ...projects, ...topics];
};
