import Link, { LinkProps } from 'next/link';
import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const buttonStyle =
  'rounded bg-black focus:outline-none focus:ring-mint-500 focus:ring-1 text-white-100 p-3 transform transition-transform duration-150 hover:scale-105';

export const Button: FC<Props> = ({ className = '', ...props }) => (
  <button className={`${buttonStyle} ${className}`} {...props} />
);

type ButtonLinkProps = LinkProps & HTMLAttributes<HTMLElement> & { newTab?: boolean; className?: string };

export const ButtonLink: FC<ButtonLinkProps> = ({ children, className = '', newTab = false, ...props }) => (
  <Link passHref {...props}>
    <a className={`block ${buttonStyle} ${className}`} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  </Link>
);
