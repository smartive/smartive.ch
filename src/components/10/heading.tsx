import { FC, ReactNode } from 'react';

const HEADING_STYLES = {
  '1': 'font-sans font-bold text-lg break-words inline-block md:text-xl lg:text-xxl mb-8 break-words',
  '2': 'font-sans font-bold text-base md:text-lg lg:text-xl mb-6 break-words',
  '3': 'leading-relaxed font-sans font-bold text-base md:text-lg mb-4 break-words',
} as const;

export const Heading: FC<{
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  level: keyof typeof HEADING_STYLES;
}> = ({ children, level, as }) => {
  const Tag = as || `h${level}`;
  return <Tag className={HEADING_STYLES[level]}>{children}</Tag>;
};
