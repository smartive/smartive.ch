import { NewsletterBlockFragment } from '@/graphql/generated';
import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { StructuredTextRenderer } from '../dato-structured-text';
import { BlockWrapper } from '../layouts/block-wrapper';
import { NewsletterForm } from '../newsletter-form';

type Props = {
  block: NewsletterBlockFragment;
};

export const NewsletterBlock: FC<Props> = ({ block: { content, image } }) => (
  <BlockWrapper>
    <div className="grid overflow-hidden rounded bg-white-100 md:grid-cols-2">
      <div className="order-2 p-5 md:order-1 md:p-16">
        {!isEmptyDocument(content) && <StructuredTextRenderer data={content as StructuredTextType} />}
        <NewsletterForm />
      </div>
      {image?.responsiveImage && (
        <div className="relative order-1 min-h-[250px] md:order-2 md:min-h-[200px]">
          <DatoImage data={image.responsiveImage} layout="fill" objectFit="cover" />
        </div>
      )}
    </div>
  </BlockWrapper>
);
