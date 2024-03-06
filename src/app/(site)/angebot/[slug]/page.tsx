import { ContentBlocks } from '@/components/content-blocks';
import { Page } from '@/components/layouts/page';
import { OfferHeader } from '@/components/offer-header';
import { OfferDocument, OfferModelContentField } from '@/graphql/generated';
import { SmartiveColorsType } from '@/utils/color';
import { getMetadata } from '@/utils/get-metadata';
import { queryDatoCMS } from '@/utils/query-dato-cms';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { offer, site } = await queryDatoCMS({
    document: OfferDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

  return getMetadata([...site.favicon, ...(offer?.seo ?? [])]);
}

export default async function ProjectPage({ params: { slug } }: Params) {
  const { offer } = await queryDatoCMS({
    document: OfferDocument,
    variables: { slug },
    includeDrafts: draftMode().isEnabled,
  });

  if (!offer) {
    notFound();
  }

  return (
    <Page>
      <OfferHeader
        title={offer.title}
        timespan={offer.timespan}
        description={offer.description}
        color={offer.color as SmartiveColorsType}
      />
      <ContentBlocks blocks={offer.content as OfferModelContentField[]} />
    </Page>
  );
}
