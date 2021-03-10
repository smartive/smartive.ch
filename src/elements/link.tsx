import NextLink, { LinkProps } from 'next/link';
import { FC, HTMLAttributes } from 'react';

export enum LinkVariants {
  Underline,
  NoUnderline,
  Feature,
}

type Props = LinkProps & {
  className?: string;
  variant?: LinkVariants;
  newTab?: boolean;
  onClick?: () => void;
} & HTMLAttributes<HTMLElement>;

export const VariantStyles = {
  [LinkVariants.Underline]: 'border-b hover:border-apricot-500 no-underline',
  [LinkVariants.NoUnderline]: 'no-underline border-b-2 border-transparent hover:border-black',
  [LinkVariants.Feature]: 'no-underline border-b-4 border-apricot-500 hover:border-apricot-800',
};

export const Link: FC<Props> = ({
  children,
  variant = LinkVariants.Underline,
  className = '',
  newTab = false,
  onClick,
  ...props
}) => (
  <NextLink passHref {...props}>
    <a
      className={`${VariantStyles[variant]} transition-colors duration-150 ${className}`}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
      onClick={onClick}
    >
      {children}
    </a>
  </NextLink>
);

type LinkButtonProps = {
  onClick(): void;
  className?: string;
  variant?: LinkVariants;
};

export const LinkButton: FC<LinkButtonProps> = ({ children, onClick, variant = LinkVariants.Underline, className = '' }) => (
  <button onClick={onClick} className={`${VariantStyles[variant]} transition-colors duration-150 ${className}`}>
    {children}
  </button>
);
