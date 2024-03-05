import { classNames } from '@/utils/css';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  cols: number;
}>;

export const Grid: FC<Props> = ({ cols, children }) => (
  <div
    className={classNames(
      'my-8 grid grid-flow-row grid-cols-1 gap-4 md:auto-rows-fr md:gap-8 xl:my-16 xl:gap-16',
      (() => {
        if (cols === 2) {
          return 'md:grid-cols-2';
        } else if (cols >= 3) {
          return 'md:grid-cols-2 lg:grid-cols-3';
        }

        return undefined;
      })(),
    )}
  >
    {children}
  </div>
);
