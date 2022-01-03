import React, { FC, ReactNode } from 'react';

type DescriptionListItem = {
  term: ReactNode;
  description?: ReactNode;
  additionalDescription?: ReactNode;
};

export type DescriptionListProps = {
  items: (DescriptionListItem | ReactNode)[];
};

export const DescriptionList: FC<DescriptionListProps> = ({ items }) => (
  <dl className="list-none mb-8 bg-white-100 rounded">
    {items.map((item, i) => {
      const {
        term,
        description = '',
        additionalDescription = '',
      } = typeof item === 'object' && 'term' in item! ? item : { term: item };

      return (
        <div
          key={i}
          className={`grid ${
            description ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          } border-b-2 last:border-b-0 border-white-200 p-4 sm:px-6 md:py-6 md:px-8 lg:py-8 lg:px-12 gap-x-4 lg:gap-x-8 gap-y-4 text-xs lg:text-base`}
        >
          <dt className={`font-bold col-span-2 lg:col-span-1 md:max-w-prose`}>{term}</dt>
          {description && <dd>{description}</dd>}
          {additionalDescription && <dd>{additionalDescription}</dd>}
        </div>
      );
    })}
  </dl>
);
