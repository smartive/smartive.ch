import { StructuredText as StructuredTextType } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { KeyfigureBlockFragment } from '../../../graphql/generated';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: KeyfigureBlockFragment;
};

export const KeyfigureBlock: FC<Props> = ({ block: { image, content } }) => (
  <div className="my-12 flex flex-col items-center justify-center gap-8 rounded bg-cornflower-500 p-8 md:flex-row md:gap-16 lg:my-48">
    {image?.responsiveImage && <DatoImage data={image?.responsiveImage} className="rounded" />}
    {content && (
      <div className="text-base font-bold md:max-w-[50%]">
        <StructuredTextRenderer data={content as StructuredTextType} />
      </div>
    )}
  </div>
);
