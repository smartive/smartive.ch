import { FC, PropsWithChildren } from 'react';

export const TagColors = ['apricot', 'mint', 'cornflower'] as const;

type Props = PropsWithChildren<{ color?: string }>;

export const Tag: FC<Props> = ({ children, color = 'apricot' }) => (
  <span className={`bg-${color}-500 rounded-sm px-2 py-2 text-xs text-white-100 lg:px-4 lg:py-2 lg:text-sm`}>
    {children}
  </span>
);
