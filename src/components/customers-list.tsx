import { usePlausible } from 'next-plausible';
import Image from 'next/image';
import { FC } from 'react';
import { Customer } from '../data/customers';

type Props = {
  customers: Customer[];
};

export const CustomersList: FC<Props> = ({ customers }) => {
  const plausible = usePlausible();

  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-24">
      {customers.map(({ name, logo }) => (
        <Image
          onClick={() => {
            plausible('Customer Click', {
              props: {
                name,
                url: window?.location,
              },
            });
          }}
          key={name}
          src={logo}
          alt={name}
          height="60"
          width="170"
          objectFit="contain"
        />
      ))}
    </div>
  );
};
