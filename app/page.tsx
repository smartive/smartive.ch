import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../components/dato/content-blocks';
import { Page } from '../components/layouts/page';
import { PageDocument, PageModelContentField } from '../graphql/generated';
import { queryDatoCMS } from '../utils/query-dato-cms';

export async function generateMetadata() {
  const data = await queryDatoCMS({ document: PageDocument, variables: { slug: 'home' } });

  return toNextMetadata([...data.site.favicon, ...(data.page?.seo || [])]);
}

export default async function ContentPage() {
  const { isEnabled } = draftMode();
  const { page } = await queryDatoCMS({ document: PageDocument, variables: { slug: 'home' }, includeDrafts: isEnabled });

  if (!page) notFound();

  return (
    <Page>
      <ContentBlocks blocks={page.content as Array<PageModelContentField>} />
    </Page>
  );
}
