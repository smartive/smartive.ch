import { classNames } from '@smartive/guetzli';
import { Children, FC, PropsWithChildren } from 'react';

const getGridLayout = (childrenCount: number) => {
  if (childrenCount >= 4) {
    return 'lg:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(4,1fr)]';
  }

  if (childrenCount === 3) {
    return 'lg:grid-cols-[repeat(3,1fr)]';
  }

  if (childrenCount === 2) {
    return 'lg:grid-cols-[repeat(2,1fr)]';
  }

  if (childrenCount <= 1) {
    return 'lg:grid-cols-[repeat(1,1fr)]';
  }

  return '';
};

export const GridSlider: FC<PropsWithChildren> = ({ children }) => (
  <ul
    className={classNames(
      '-mx-4 my-8 flex w-screen items-stretch overflow-x-auto overflow-y-hidden px-4 lg:mx-0 lg:grid lg:w-full lg:auto-rows-fr lg:gap-8 lg:overflow-visible lg:p-0 xl:my-16 xl:gap-16',
      getGridLayout(Children.count(children)),
    )}
    style={{ scrollSnapType: 'x mandatory' }}
  >
    {Children.map(children, (child, i) => (
      <li
        key={i}
        className="min-w flex w-11/12 min-w-11/12 p-2 first:pl-0 last:pr-4 md:w-2/3 md:min-w-2/3 lg:w-full lg:p-0 lg:last:pr-2"
        style={{ scrollSnapAlign: 'center' }}
      >
        {child}
      </li>
    ))}
  </ul>
);
