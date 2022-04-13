import { Children, FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export const UnorderedList: FC<Props> = ({ children }) => {
  return (
    <ul className="list-inside list-none mb-8">
      {Children.map(children, (child) => (
        <li className="grid grid-cols-[auto,1fr] mb-2">
          <svg
            className={`mr-4 text-apricot-500`}
            width="36"
            height="36"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10.5" y="10" width="12" height="12" rx="6" fill="currentColor" />
          </svg>
          <div className="font-sans font-normal text-base md:max-w-prose">{child}</div>
        </li>
      ))}
    </ul>
  );
};
