import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<Props> = forwardRef(({ className = '', ...props }, ref) => (
  <input
    ref={ref}
    className={`rounded border-2 focus:ring-mint-500 focus:outline-none focus:ring-1 border-black bg-white-100 text-black p-3 ${className}`}
    {...props}
  />
));
