import { FC, ReactNode } from 'react';

type Props = {
  image?: ReactNode;
};

export const Glance: FC<Props> = ({ image, children }) => {
  const grid = image ? 'grid grid-cols-1 md:grid-cols-3' : '';
  const span = image ? 'col-span-2' : 'max-w-prose mx-auto';

  return (
    <div className={`bg-cornflower-500 rounded  ${grid} p-8 md:px-16 md:gap-6`}>
      {image && <div className="mx-auto mb-8 md:mb-0 md:mx-0">{image}</div>}
      <div className={`${span} flex flex-col justify-center`}>{children}</div>
    </div>
  );
};
