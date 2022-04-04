import { FC, ReactNode } from 'react';

type Props = {
  summary: ReactNode;
};

export const Accordion: FC<Props> = ({ summary, children }) => {
  return (
    <details className="font-sans font-normal text-xs lg:text-base md:max-w-prose mb-8">
      <summary>{summary}</summary>
      {children}
    </details>
  );
};
