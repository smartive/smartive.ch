import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { ProjectIntroBlockFragment } from '../../../graphql/generated';
import { Label, LabelColors, Link, LinkColors } from '../../nodes';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: ProjectIntroBlockFragment;
};

export const ProjectIntroBlock: FC<Props> = ({ block: { content, links, tags } }) => (
  <div className="my-12 lg:my-48">
    {tags.length > 0 && (
      <div className="mb-4 flex flex-wrap">
        {tags.map(({ id, label }, index) => (
          <Label key={id} color={LabelColors[index % 3]}>
            {label}
          </Label>
        ))}
      </div>
    )}

    {!isEmptyDocument(content) && (
      <div className="text-base md:text-lg lg:text-xl">
        <StructuredTextRenderer data={content as StructuredTextType} />
      </div>
    )}

    {links.length > 0 && (
      <div className="flex flex-wrap">
        {links.map(({ id, url, label, newTab }, index) => (
          <Link key={id} href={url} color={LinkColors[index % 3]} target={newTab ? '_blank' : '_self'}>
            {label}
          </Link>
        ))}
      </div>
    )}
  </div>
);
