import NextImage from 'next/image';
import { FC } from 'react';
import { Customer } from '../src/data/customers';

type Props = {
  customers: Customer[];
};

export const CustomerLogos: FC<Props> = ({ customers }) => (
  <div className="grid grid-cols-3 gap-8 sm:gap-12 md:grid-cols-4 md:gap-16 xl:grid-cols-6">
    {customers.map(({ name, logo }) => (
      <NextImage key={name} src={logo} alt={name} height="100" width="170" className="w-full" />
    ))}
  </div>
);
