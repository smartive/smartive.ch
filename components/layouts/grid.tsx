import { FC, PropsWithChildren } from 'react';

const AvailableColumnLayouts = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 xl:grid-cols-4',
} as const;

type Props = PropsWithChildren<{
  cols: keyof typeof AvailableColumnLayouts;
}>;

export const Grid: FC<Props> = ({ cols, children }) => (
  <div className={`grid ${AvailableColumnLayouts[cols]} my-8 grid-flow-row gap-8 md:auto-rows-fr xl:my-16 xl:gap-16`}>
    {children}
  </div>
);
