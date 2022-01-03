import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, LinkHTMLAttributes } from 'react';
import { ChevronRight } from '../identity';

export enum ButtonVariants {
  Default = 'Default',
  Arrow = 'Arrow',
}

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: ButtonVariants;
};

const getButtonStyles = (variant: ButtonVariants) => {
  const sharedStyles = 'rounded focus:outline-none focus:ring-1 focus:ring-mint-200';

  return variant === ButtonVariants.Default
    ? `${sharedStyles} bg-black border-2 border-black text-white-100 p-3 transform transition-transform duration-150 hover:scale-[1.02] active:scale-[.99]`
    : `${sharedStyles} flex items-center gap-4 rounded bg-white-100 p-4 hover:bg-mint-500 transition-colors`;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', variant = ButtonVariants.Default, ...props }, ref) => (
    <button ref={ref} className={`${getButtonStyles(variant)} ${className}`} {...props}>
      {children}
      {variant === ButtonVariants.Arrow && <ChevronRight className="w-4 h-4" />}
    </button>
  )
);

export type ButtonLinkProps = LinkHTMLAttributes<HTMLElement> & {
  newTab?: boolean;
  className?: string;
  variant?: ButtonVariants;
};

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className = '', variant = ButtonVariants.Default, newTab = false, ...props }, ref) => (
    <a
      ref={ref}
      className={`block cursor-pointer ${getButtonStyles(variant)} ${className}`}
      {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
      {variant === ButtonVariants.Arrow && <ChevronRight className="w-4 h-4" />}
    </a>
  )
);
