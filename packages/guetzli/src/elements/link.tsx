import React, { FC, LinkHTMLAttributes, ReactNode, forwardRef } from 'react';

export enum LinkVariants {
  Default = 'Default',
  Navigation = 'Navigation',
  Feature = 'Feature',
}

export type LinkProps = {
  className?: string;
  newTab?: boolean;
  variant?: LinkVariants;
  active?: boolean;
} & LinkHTMLAttributes<HTMLElement>;

const getVariantStyles = (active = false) => ({
  [LinkVariants.Default]: 'border-b-2 hover:border-apricot-500 no-underline',
  [LinkVariants.Navigation]: `no-underline border-b-2 ${
    active ? 'border-apricot-500' : 'border-transparent'
  } hover:border-black`,
  [LinkVariants.Feature]: 'no-underline border-b-4 border-apricot-500 hover:border-black',
});

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = LinkVariants.Default, className = '', newTab = false, active = false, ...props }, ref) => (
    <a
      ref={ref}
      className={`${getVariantStyles(active)[variant]} ${className} transition-colors duration-150`}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
);

export type LinkButtonProps = {
  onClick(): void;
  className?: string;
  variant?: LinkVariants;
  children: ReactNode;
};

export const LinkButton: FC<LinkButtonProps> = ({ children, onClick, variant = LinkVariants.Default, className = '' }) => (
  <button
    onClick={onClick}
    className={`${getVariantStyles()[variant]} transition-colors duration-150 focus:outline-none ${className}`}
  >
    {children}
  </button>
);
