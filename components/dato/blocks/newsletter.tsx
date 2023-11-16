import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { NewsletterBlockFragment } from '../../../graphql/generated';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { NewsletterForm } from '../../newsletter-form';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: NewsletterBlockFragment;
};

export const NewsletterBlock: FC<Props> = ({ block: { content, image } }) => (
  <BlockWrapper>
    <div className="grid overflow-hidden rounded bg-white-100 md:grid-cols-2">
      <div className="p-4 pb-8 font-sans text-xs md:p-16 lg:text-base">
        {!isEmptyDocument(content) && <StructuredTextRenderer data={content as StructuredTextType} />}
        <NewsletterForm />
      </div>
      {image?.responsiveImage && (
        <div className="relative min-h-[200px]">
          <DatoImage data={image.responsiveImage} layout="fill" objectFit="cover" />
        </div>
      )}
    </div>
  </BlockWrapper>
);
