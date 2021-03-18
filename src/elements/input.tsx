import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<Props> = forwardRef(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`rounded border-2 ring-inset ring-1 ring-transparent hover:ring-black border-black bg-white-100 text-black p-3 ${className}`}
    {...props}
  />
));
