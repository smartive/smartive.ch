import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<Props> = ({ className = '', ...props }) => (
  <input className={`rounded bg-white-100 text-black p-3 ${className}`} {...props} />
);
