import { AllRoutesDocument, AllRoutesQuery } from '@/graphql/generated';
import { queryDatoCMS } from './query-dato-cms';

type PagePath = {
  slug: string;
  lastModified: string;
  seometatags?: {
    noIndex: boolean;
  };
  children: PagePath[];
};

type AllRoutes = {
  pages: Route[];
  blogposts: Route[];
  offers: Route[];
  projects: Route[];
  topics: Route[];
};

type Route = {
  path: string;
  lastModified: string;
  noIndex?: boolean;
};

const generatePagePathnames = (pages: PagePath[]): Route[] => {
  const pathnames: Route[] = [];

  const generatePathname = (
    { slug, lastModified, seometatags, children }: PagePath,
    currentPath: string,
    currentPathname: string,
  ) => {
    const newPath = currentPath === '' ? `/${slug}` : `${currentPath}/${slug}`;
    const newCurrentPathname = currentPathname === '' ? slug : `${currentPathname}/${slug}`;

    pathnames.push({ path: newPath, lastModified, noIndex: seometatags?.noIndex });

    if (children && children.length > 0) {
      children.map((child) => generatePathname(child, newPath, newCurrentPathname));
    }
  };

  pages.map((page) => generatePathname(page, '', ''));

  // We replace /home with / because we redirect /home to / in middleware.ts
  const homeIndex = pathnames.findIndex(({ path }) => path === '/home');
  if (homeIndex > -1) {
    pathnames[homeIndex].path = '/';
  }

  return pathnames;
};

const generatePathnames = (data: AllRoutesQuery): Omit<AllRoutes, 'pages'> => {
  const { allBlogposts, allOffers, allProjects, allTopics } = data;

  return {
    blogposts: allBlogposts.map(({ slug, lastModified }) => ({ path: `/blog/${slug}`, lastModified })) || [],
    offers: allOffers.map(({ slug, lastModified }) => ({ path: `/angebot/${slug}`, lastModified })) || [],
    projects: allProjects.map(({ slug, lastModified }) => ({ path: `/projekte/${slug}`, lastModified })) || [],
    topics: allTopics.map(({ slug, lastModified }) => ({ path: `/t/${slug}`, lastModified })) || [],
  };
};

export const getAllDatoRoutes = async (includeDrafts = true): Promise<AllRoutes> => {
  const data = await queryDatoCMS({
    document: AllRoutesDocument,
    includeDrafts,
  });

  const { blogposts, offers, projects, topics } = generatePathnames(data);

  return {
    pages: generatePagePathnames(data.allPages as PagePath[]),
    blogposts,
    offers,
    projects,
    topics,
  };
};
