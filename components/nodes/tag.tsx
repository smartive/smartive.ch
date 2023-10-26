import { FC, PropsWithChildren } from 'react';

export const TagColors = ['apricot', 'mint', 'cornflower'] as const;

const colorClassNames = {
  apricot: 'bg-apricot-500',
  mint: 'bg-mint-500',
  cornflower: 'bg-cornflower-500',
};

type Props = PropsWithChildren<{ color?: string }>;

export const Tag: FC<Props> = ({ children, color = 'apricot' }) => (
  <span className={`rounded-sm px-2 py-2 text-xs text-white-100 lg:px-4 lg:py-2 lg:text-sm ${colorClassNames[color]}`}>
    {children}
  </span>
);
