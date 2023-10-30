import { StructuredText as StructuredTextType, isEmptyDocument } from 'datocms-structured-text-utils';
import { FC } from 'react';
import { ProjectIntroBlockFragment } from '../../../graphql/generated';
import { Link, LinkColors, Tag, TagColors } from '../../nodes';
import { StructuredTextRenderer } from '../structured-text';

type Props = {
  block: ProjectIntroBlockFragment;
};

export const ProjectIntroBlock: FC<Props> = ({ block: { content, links, tags } }) => (
  <div className="my-12 lg:my-48">
    {tags.length > 0 && (
      <div className="mb-4 flex flex-wrap gap-2 lg:gap-6">
        {tags.map(({ id, label }, index) => (
          <Tag key={id} color={TagColors[index % 3]}>
            {label}
          </Tag>
        ))}
      </div>
    )}

    {!isEmptyDocument(content) && (
      <div className="text-base md:text-lg lg:text-xl">
        <StructuredTextRenderer data={content as StructuredTextType} />
      </div>
    )}

    {links.length > 0 && (
      <div className="flex flex-wrap gap-4 lg:gap-8">
        {links.map(({ id, url, label, newTab }, index) => (
          <Link key={id} href={url} color={LinkColors[index % 3]} target={newTab ? '_blank' : '_self'}>
            {label}
          </Link>
        ))}
      </div>
    )}
  </div>
);
