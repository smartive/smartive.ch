import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../../components/dato/content-blocks';
import { Page } from '../../components/layouts/page';
import { PageDocument, PageModelContentField } from '../../graphql/generated';
import { getAllDatoRoutes } from '../../utils/get-dato-routes';
import { queryDatoCMS } from '../../utils/query-dato-cms';

type Params = {
  params: {
    slug: string[];
  };
};

const getLastSlug = (slug: string[]) => slug[slug.length - 1];

export async function generateMetadata({ params: { slug } }: Params) {
  const data = await queryDatoCMS({ document: PageDocument, variables: { slug: getLastSlug(slug) } });

  return toNextMetadata([...data.site.favicon, ...(data.page?.seo || [])]);
}

export async function generateStaticParams() {
  const routes = await getAllDatoRoutes();

  return routes.map((route) => ({
    slug: route.split('/').filter(Boolean),
  }));
}

export const dynamicParams = false; // Redirects to 404 if route is not generate by generateStaticParams

export default async function ContentPage({ params: { slug } }: Params) {
  const { isEnabled } = draftMode();
  const { page } = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: getLastSlug(slug) },
    includeDrafts: isEnabled,
  });

  if (!page) notFound();

  return (
    <Page>
      <ContentBlocks blocks={page.content as Array<PageModelContentField>} />
    </Page>
  );
}
