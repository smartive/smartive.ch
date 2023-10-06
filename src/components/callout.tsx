import { FC, ReactNode } from 'react';

type Props = {
  background?: string;
  children?: ReactNode;
};

const backgroundMap: Record<string, string> = {
  default: 'bg-white-100',
  gray: 'bg-white-200 border-white-100 border-2',
  brown: 'bg-[#BAA683]',
  orange: 'bg-apricot-200',
  yellow: 'bg-[#FFEAA5]',
  green: 'bg-[#90D6AE]',
  blue: 'bg-mint-200',
  purple: 'bg-cornflower-200',
  pink: 'bg-[#FF9ECA]',
  red: 'bg-[#F56F6F]',
};

export const Callout: FC<Props> = ({ children, background = 'gray' }) => {
  return (
    <div
      className={[
        'mb-8 whitespace-pre-line break-words rounded p-8 font-sans text-xs font-normal lg:text-base',
        backgroundMap[background],
      ].join(' ')}
    >
      {children}
    </div>
  );
};
