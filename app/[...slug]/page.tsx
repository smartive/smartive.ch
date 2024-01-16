import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../../components/content-blocks';
import { Page } from '../../components/layouts/page';
import { PageDocument, PageModelContentField, PageRecord } from '../../graphql/generated';
import { getAllDatoRoutes } from '../../utils/get-dato-routes';
import { queryDatoCMS } from '../../utils/query-dato-cms';
import { validateRoutes } from '../../utils/validate-dato-routes';

type Params = {
  params: {
    slug: string[];
  };
};

const getLastSlug = (slug: string[]) => slug[slug.length - 1];

export async function generateMetadata({ params: { slug } }: Params) {
  const data = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: getLastSlug(slug) },
    includeDrafts: draftMode().isEnabled,
  });

  return toNextMetadata([...data.site.favicon, ...(data.page?.seo ?? [])]);
}

export async function generateStaticParams() {
  const { pages } = await getAllDatoRoutes();

  return pages
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

  if (!page) {
    notFound();
  }

  await validateRoutes(page as unknown as PageRecord, slug);

  return (
    <Page>
      <ContentBlocks blocks={page.content as PageModelContentField[]} />
    </Page>
  );
}
