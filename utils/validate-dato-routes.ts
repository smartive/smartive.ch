import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { PageRecord, PageStructureDocument } from '../graphql/generated';
import { PAGE_STRUCTURE_TAG } from './const';
import { queryDatoCMS } from './query-dato-cms';

export const getLastSlug = (slugs: string[]): string => {
  return slugs[slugs.length - 1];
};

export const validateRoutes = async (page: PageRecord, slugs: string[]) => {
  // Change order of slugs to match the order of the page hierarchy. It's easier to work with.
  slugs = slugs.reverse();

  if (slugs.length === 1) {
    // If there is only one slug, we need to check if the page has a parent.
    if (page.parent) {
      notFound();
    }
  } else if (slugs.length === 2) {
    // If there are two slugs, we need to check if the parent is the correct one.
    if (slugs[1] !== page.parent?.slug) {
      notFound();
    }
  } else if (slugs.length > 2) {
    // If there are more than 2 slugs, we need to check if the parent is the correct one.
    // We do this by calling the queryDatoCMS function for each slug.
    // We do not know the complete hierarchy, so we need to check each slug against its parent.
    for (let i = 0; i < slugs.length; i++) {
      const currentSlug = slugs[i];
      const parentSlug = slugs[i + 1];

      if (parentSlug) {
        const { page } = await queryDatoCMS({
          document: PageStructureDocument,
          variables: { slug: currentSlug },
          includeDrafts: draftMode().isEnabled,
          revalidateTags: [PAGE_STRUCTURE_TAG],
        });
        if (page?.parent?.slug !== parentSlug) {
          notFound();
        }
      }
    }
  }
};
