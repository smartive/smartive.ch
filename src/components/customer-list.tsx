import { usePlausible } from 'next-plausible';
import Image from 'next/legacy/image';
import { FC } from 'react';
import { Customer } from '../data/customers';
import { PlausibleEvents } from '../utils/tracking';

type Props = {
  customers: Customer[];
};

export const CustomerList: FC<Props> = ({ customers }) => {
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <div className="grid grid-cols-3 gap-8 sm:gap-12 md:grid-cols-4 md:gap-16 xl:grid-cols-6">
      {customers.map(({ name, logo }) => (
        <Image
          onClick={() => {
            plausible('Customer Click', {
              props: {
                name,
                url: window?.location.toString(),
              },
            });
          }}
          key={name}
          src={logo}
          alt={name}
          height="100"
          width="170"
          objectFit="contain"
        />
      ))}
    </div>
  );
};
