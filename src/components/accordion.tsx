import { FC, ReactNode } from 'react';

type Props = {
  summary: ReactNode;
  children?: ReactNode;
};

export const Accordion: FC<Props> = ({ summary, children }) => {
  return (
    <details className="mb-8 font-sans text-xs font-normal md:max-w-prose lg:text-base">
      <summary>{summary}</summary>
      {children}
    </details>
  );
};
