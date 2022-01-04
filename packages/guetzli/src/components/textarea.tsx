import React, { DetailedHTMLProps, forwardRef, TextareaHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className = '', ...props }, ref) => (
  <textarea
    ref={ref}
    className={`rounded border-2 ring-inset ring-1 ring-transparent hover:ring-black focus:outline-none focus:ring-black border-black bg-white-100 text-black p-3 ${className}`}
    {...props}
  />
));
