import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../../components/dato/content-blocks';
import { Page } from '../../components/layouts/page';
import { PageDocument, PageModelContentField } from '../../graphql/generated';
import { queryDatoCMS } from '../../utils/query-dato-cms';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const data = await queryDatoCMS(PageDocument, { slug });

  return toNextMetadata([...data.site.favicon, ...(data.page?.seo || [])]);
}

export default async function ContentPage({ params: { slug } }: Params) {
  const { page } = await queryDatoCMS(PageDocument, { slug });

  if (!page) notFound();

  return (
    <Page hasMargin>
      <ContentBlocks blocks={page.content as Array<PageModelContentField>} />
    </Page>
  );
}
