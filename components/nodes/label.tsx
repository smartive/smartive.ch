import { FC, PropsWithChildren } from 'react';
import { classNames } from '../../utils/css';

export const LabelColors = ['apricot', 'mint', 'cornflower'] as const;

type Props = PropsWithChildren<{ color?: string }>;

export const Label: FC<Props> = ({ children, color = 'apricot' }) => (
  <span
    className={classNames(
      'peer inline-block rounded-sm px-2 py-2 text-xs text-white-100 peer-[span&]:ml-4 lg:px-4 lg:py-2 lg:text-sm',
      {
        apricot: 'bg-apricot-500',
        mint: 'bg-mint-500',
        cornflower: 'bg-cornflower-500',
      }[color],
    )}
  >
    {children}
  </span>
);
