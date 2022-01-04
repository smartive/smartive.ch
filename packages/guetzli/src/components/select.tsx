import React, { DetailedHTMLProps, forwardRef, SelectHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, Props>(({ className = '', ...props }, ref) => (
  <select
    ref={ref}
    className={`rounded border-2 ring-inset ring-1 ring-transparent hover:ring-black focus:outline-none focus:ring-black border-black bg-white-100 text-black p-3 ${className}`}
    {...props}
  />
));
