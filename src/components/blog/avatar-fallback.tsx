import { SmartiveColorValues } from '@/utils/color';
import { classNames } from '@smartive/guetzli';
import { FC } from 'react';

const getRandomColor = (): string => SmartiveColorValues[Math.floor(Math.random() * SmartiveColorValues.length)];

export const AvatarFallback: FC<{ width?: number; height?: number; className?: string }> = ({
  width = 50,
  height = 50,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 92 92"
    className={classNames('rounded-full', className)}
  >
    <path fill={getRandomColor()} d="M0 0H91.6V91.6H0z"></path>
    <path
      stroke="#252525"
      strokeLinecap="round"
      strokeWidth="3.435"
      d="M61.51 52.22a19.176 19.176 0 01-24.118 6.238 19.182 19.182 0 01-6.91-5.696"
    ></path>
    <path
      fill="#252525"
      d="M28.052 44.083a4.58 4.58 0 100-9.16 4.58 4.58 0 000 9.16zM63.261 44.083a4.58 4.58 0 100-9.16 4.58 4.58 0 000 9.16z"
    ></path>
  </svg>
);
