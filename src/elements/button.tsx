import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<Props> = ({ className = '', ...props }) => (
  <button className={`rounded bg-black text-white-100 p-3 ${className}`} {...props} />
);
