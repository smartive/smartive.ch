import { FC, ReactNode } from 'react';

export const SlackReaction: FC<{ children: ReactNode }> = ({ children }) => (
  <kbd className="inline-block scale-100 transform-gpu rounded bg-[#424242] px-4 transition-transform hover:scale-105">
    {children}
  </kbd>
);
