import { classNames } from '@smartive/guetzli';
import { FC, ReactNode } from 'react';

type DescriptionListItem = {
  term: ReactNode;
  description?: ReactNode;
  additionalDescription?: ReactNode;
};

type DescriptionListProps = {
  items: (DescriptionListItem | ReactNode)[];
};

export const DescriptionList: FC<DescriptionListProps> = ({ items }) => (
  <dl className="mb-8 list-none rounded bg-white-100">
    {items.map((item, i) => {
      const {
        term,
        description = '',
        additionalDescription = '',
      } = item && typeof item === 'object' && 'term' in item ? item : { term: item };

      return (
        <div
          key={i}
          className={classNames(
            'grid gap-x-4 gap-y-4 border-b-2 border-white-200 p-4 text-xs last:border-b-0 sm:px-6 md:px-8 md:py-6 lg:gap-x-8 lg:px-12 lg:py-8 lg:text-base',
            description ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1',
          )}
        >
          <dt className="col-span-2 font-bold md:max-w-prose lg:col-span-1">{term}</dt>
          {description && <dd>{description}</dd>}
          {additionalDescription && <dd>{additionalDescription}</dd>}
        </div>
      );
    })}
  </dl>
);
