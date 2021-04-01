import NextLink, { LinkProps } from 'next/link';
import { FC, HTMLAttributes } from 'react';

export enum LinkVariants {
  Default,
  Navigation,
  Feature,
}

type Props = LinkProps & {
  className?: string;
  newTab?: boolean;
  variant?: LinkVariants;
  onClick?: () => void;
  active?: boolean;
} & HTMLAttributes<HTMLElement>;

const getVariantStyles = (active = false) => ({
  [LinkVariants.Default]: 'border-b-2 hover:border-apricot-500 no-underline',
  [LinkVariants.Navigation]: `no-underline border-b-2 ${
    active ? 'border-apricot-500' : 'border-transparent'
  } hover:border-black`,
  [LinkVariants.Feature]: 'no-underline border-b-4 border-apricot-500 hover:border-black',
});

export const Link: FC<Props> = ({
  children,
  variant = LinkVariants.Default,
  className = '',
  newTab = false,
  active = false,
  onClick,
  href,
  ...props
}) => (
  <NextLink passHref href={href}>
    <a
      className={`${getVariantStyles(active)[variant]} ${className} transition-colors duration-150`}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
      onClick={onClick}
      {...props}
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

export const LinkButton: FC<LinkButtonProps> = ({ children, onClick, variant = LinkVariants.Default, className = '' }) => (
  <button
    onClick={onClick}
    className={`${getVariantStyles()[variant]} transition-colors duration-150 focus:outline-none ${className}`}
  >
    {children}
  </button>
);
