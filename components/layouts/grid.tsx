import { FC, PropsWithChildren } from 'react';
import { classNames } from '../../utils/css';

const AvailableColumnLayouts = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 xl:grid-cols-4',
} as const;

type Props = PropsWithChildren<{
  cols: keyof typeof AvailableColumnLayouts;
}>;

export const Grid: FC<Props> = ({ cols, children }) => (
  <div
    className={classNames(
      'my-8 grid grid-flow-row gap-4 md:auto-rows-fr md:gap-8 xl:my-16 xl:gap-16',
      AvailableColumnLayouts[cols],
    )}
  >
    {children}
  </div>
);
