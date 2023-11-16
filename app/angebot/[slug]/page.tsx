import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { toNextMetadata } from 'react-datocms/seo';
import { ContentBlocks } from '../../../components/dato/content-blocks';
import { Page } from '../../../components/layouts/page';
import { OfferHeader } from '../../../components/offer-header';
import { OfferDocument, OfferModelContentField } from '../../../graphql/generated';
import { SmartiveColorsType } from '../../../utils/color';
import { queryDatoCMS } from '../../../utils/query-dato-cms';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const { offer, site } = await queryDatoCMS(OfferDocument, { slug });

  return toNextMetadata([...site.favicon, ...(offer?.seo || [])]);
}

export default async function ProjectPage({ params: { slug } }: Params) {
  const { isEnabled } = draftMode();
  const { offer } = await queryDatoCMS(OfferDocument, { slug }, isEnabled);

  if (!offer) notFound();

  return (
    <Page>
      <OfferHeader
        title={offer.title}
        timespan={offer.timespan}
        description={offer.description}
        color={offer.color as SmartiveColorsType}
      />
      <ContentBlocks blocks={offer.content as Array<OfferModelContentField>} />
    </Page>
  );
}
