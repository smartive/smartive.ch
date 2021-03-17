import React, { Children, FC, ReactNode } from 'react';

type Props = { children: ReactNode };

export const GridSlider: FC<Props> = ({ children }) => (
  <ul
    className="w-screen lg:w-full -mx-4 lg:mx-0 px-4 lg:p-0 my-8 xl:my-16 flex items-stretch overflow-x-auto overflow-y-hidden lg:overflow-visible lg:grid lg:grid-flow-col lg:auto-cols-fr lg:gap-8 xl:gap-16"
    style={{ scrollSnapType: 'x mandatory' }}
  >
    {Children.map(children, (child, i) => (
      <li
        key={i}
        className="flex p-2 first:pl-0 last:pr-4 lg:p-0 lg:last:pr-2 min-w-11/12 w-11/12 md:w-2/3 md:min-w-2/3 min-w lg:w-full"
        style={{ scrollSnapAlign: 'center' }}
      >
        {child}
      </li>
    ))}
  </ul>
);
