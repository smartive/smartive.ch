import { AllPagesDocument } from '../graphql/generated';
import { ALL_PAGES_TAG } from './const';
import { queryDatoCMS } from './query-dato-cms';

type PagePath = {
  slug: string;
  children: PagePath[];
};

const generatePathnames = (pages: PagePath[]): string[] => {
  const pathnames: string[] = [];

  const generatePathname = ({ slug, children }: PagePath, currentPath: string, currentPathname: string) => {
    const newPath = currentPath === '' ? `/${slug}` : `${currentPath}/${slug}`;
    const newCurrentPathname = currentPathname === '' ? slug : `${currentPathname}/${slug}`;

    pathnames.push(newPath);

    if (children.length > 0) {
      children.map((child) => generatePathname(child, newPath, newCurrentPathname));
    }
  };

  pages.map((page) => generatePathname(page, '', ''));

  return pathnames;
};

export const getAllDatoRoutes = async () => {
  const { allPages } = await queryDatoCMS({
    document: AllPagesDocument,
    includeDrafts: true,
    revalidateTags: [ALL_PAGES_TAG],
  });

  return generatePathnames(allPages as PagePath[]);
};
