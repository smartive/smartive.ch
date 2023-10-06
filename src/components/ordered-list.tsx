import { Children, FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const OrderedList: FC<Props> = ({ children }) => {
  return (
    <ol className="mb-8 list-inside">
      {Children.map(children, (child) => (
        <li className="list-decimal font-sans text-xs font-bold text-mint-500 lg:text-base">
          <span className="font-sans text-xs font-normal text-black lg:text-base">{child}</span>
        </li>
      ))}
    </ol>
  );
};
