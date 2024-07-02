import { ContentBlocks } from '@/components/content-blocks';
import { Page } from '@/components/layouts/page';
import { PageDocument, PageModelContentField, PageRecord } from '@/graphql/generated';
import { getAllDatoRoutes } from '@/utils/get-dato-routes';
import { getMetadata } from '@/utils/get-metadata';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { getLastSlug, validateRoutes } from '@/utils/validate-dato-routes';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { site, page } = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: getLastSlug(slug) },
    includeDrafts: draftMode().isEnabled,
  });

  return getMetadata([...site.favicon, ...(page?.seo ?? [])]);
}

export async function generateStaticParams() {
  const routes = await getAllDatoRoutes({ pagesOnly: true });

  return routes
    .filter(({ path }) => path !== '/') // We filter out the homepage
    .map(({ path }) => ({
      slug: path.split('/').filter(Boolean),
    }));
}

export const dynamicParams = true;

export default async function ContentPage({ params: { slug } }: Params) {
  const { page } = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: getLastSlug(slug) },
    includeDrafts: draftMode().isEnabled,
  });

  if (!page || page.slug === 'home') {
    notFound();
  }

  // if page does not have a parent, we can skip the validation
  if (page.parent) {
    await validateRoutes(page as unknown as PageRecord, slug);
  }

  return (
    <Page landingPageLayout={page.landingPageLayout}>
      <ContentBlocks blocks={page.content as PageModelContentField[]} />
    </Page>
  );
}
