import { ContentBlocks } from '@/components/content-blocks';
import { Page } from '@/components/layouts/page';
import { PageDocument, PageModelContentField } from '@/graphql/generated';
import { getMetadata } from '@/utils/get-metadata';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const data = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: 'home' },
    includeDrafts: draftMode().isEnabled,
  });

  return getMetadata([...data.site.favicon, ...(data.page?.seo ?? [])]);
}

export default async function ContentPage() {
  const { page } = await queryDatoCMS({
    document: PageDocument,
    variables: { slug: 'home' },
    includeDrafts: draftMode().isEnabled,
  });

  if (!page) {
    notFound();
  }

  return (
    <Page>
      <ContentBlocks blocks={page.content as PageModelContentField[]} />
    </Page>
  );
}
