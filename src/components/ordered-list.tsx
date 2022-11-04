import { Children, FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const OrderedList: FC<Props> = ({ children }) => {
  return (
    <ol className="list-inside mb-8">
      {Children.map(children, (child) => (
        <li className="list-decimal font-sans font-bold text-xs lg:text-base text-mint-500">
          <span className="font-sans font-normal text-xs lg:text-base text-black">{child}</span>
        </li>
      ))}
    </ol>
  );
};
