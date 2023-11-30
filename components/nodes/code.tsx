import { FC, PropsWithChildren } from 'react';

export const Code: FC<PropsWithChildren> = ({ children }) => (
  <code className="rounded-sm bg-cornflower-500 bg-opacity-20 p-1 font-mono text-[0.9em]">{children}</code>
);
