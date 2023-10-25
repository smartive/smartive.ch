import { Children, FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const UnorderedList: FC<Props> = ({ children }) => (
  <ul className="mb-8 ml-8 space-y-2 marker:text-lg marker:leading-[0.5] marker:text-apricot-500">
    {Children.map(children, (child) => (
      <li className="list-disc pl-1 font-sans text-xs font-normal lg:text-base">{child}</li>
    ))}
  </ul>
);
