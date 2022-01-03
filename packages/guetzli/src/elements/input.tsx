import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`rounded border-2 ring-inset ring-1 ring-transparent hover:ring-black focus:outline-none focus:ring-black border-black bg-white-100 text-black p-3 ${className}`}
    {...props}
  />
));
