import { Children, FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const OrderedList: FC<Props> = ({ children }) => (
  <ol className="mb-8 ml-8 space-y-2 marker:font-bold marker:text-mint-500">
    {Children.map(children, (child) => (
      <li className="list-decimal pl-1 font-sans text-xs font-normal lg:text-base">{child}</li>
    ))}
  </ol>
);
