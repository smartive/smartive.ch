import NextLink, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

export enum LinkVariants {
  Underline,
  NoUnderline,
  Feature,
}

type Props = PropsWithChildren<LinkProps> & { className?: string; variant?: LinkVariants; newTab?: boolean };

const VariantStyles = {
  [LinkVariants.Underline]: 'border-b hover:border-apricot-500 no-underline',
  [LinkVariants.NoUnderline]: 'no-underline border-b-2 border-transparent hover:border-black',
  [LinkVariants.Feature]: 'no-underline border-b-4 border-apricot-500 hover:border-apricot-800',
};

export const Link: FC<Props> = ({
  children,
  variant = LinkVariants.Underline,
  className = '',
  newTab = false,
  ...props
}) => (
  <NextLink passHref {...props}>
    <a
      className={`${VariantStyles[variant]} transition-colors duration-150 ${className}`}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  </NextLink>
);
