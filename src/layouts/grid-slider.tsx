import React, { Children, FC } from 'react';

export const GridSlider: FC = ({ children }) => (
  <ul
    className="w-screen lg:w-full -mx-4 lg:mx-0 px-4 lg:p-0 my-8 xl:my-16 flex items-stretch overflow-x-auto lg:overflow-x-visible lg:grid lg:grid-flow-col lg:auto-cols-fr lg:gap-8 xl:gap-16"
    style={{ scrollSnapType: 'x mandatory' }}
  >
    {Children.map(children, (child) => (
      <li
        className="flex pr-8 first:pl-0 last:pr-4 lg:p-0 lg:last:pr-0 min-w-3/4 w-3/4 lg:w-full"
        style={{ scrollSnapAlign: 'center' }}
      >
        {child}
      </li>
    ))}
  </ul>
);
