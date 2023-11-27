import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../components/content-blocks';
import { Page } from '../components/layouts/page';
import { PageDocument, PageModelContentField } from '../graphql/generated';
import { queryDatoCMS } from '../utils/query-dato-cms';

export async function generateMetadata() {
  const data = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: 'home' },
    includeDrafts: draftMode().isEnabled,
  });

  return toNextMetadata([...data.site.favicon, ...(data.page?.seo || [])]);
}

export default async function ContentPage() {
  const { page } = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: 'home' },
    includeDrafts: draftMode().isEnabled,
  });

  if (!page) notFound();

  return (
    <Page>
      <ContentBlocks blocks={page.content as Array<PageModelContentField>} />
    </Page>
  );
}
