import { Children, FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const UnorderedList: FC<Props> = ({ children }) => {
  return (
    <ul className="mb-8 list-inside list-none">
      {Children.map(children, (child) => (
        <li className="mb-2 grid grid-cols-[auto,1fr]">
          <svg
            className="mr-2 mt-0.5 h-5 w-5 text-apricot-500 lg:mr-4 lg:mt-0 lg:h-9 lg:w-9"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10.5" y="10" width="12" height="12" rx="6" fill="currentColor" />
          </svg>
          <div className="font-sans text-xs font-normal lg:text-base">{child}</div>
        </li>
      ))}
    </ul>
  );
};
