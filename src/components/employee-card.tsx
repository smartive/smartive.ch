import { Heading3, Link, LinkVariants } from '@smartive/guetzli';
import { usePlausible } from 'next-plausible';
import React, { FC } from 'react';
import { Employee } from '../data/employees';
import { PlaceholderImage } from '../elements/placeholder-image';
import { PlausibleEvents } from '../utils/tracking';

type Props = {
  employee: Employee;
  className?: string;
};

export const EmployeeCard: FC<Props> = ({
  employee: { firstname, lastname, job, bio, links, image, closeup },
  className = '',
}) => {
  const plausible = usePlausible<PlausibleEvents>();

  return (
    <div
      className={`flex flex-col bg-white-100 rounded overflow-hidden ${className}`}
      itemScope
      itemProp="employee"
      itemType="http://schema.org/Person"
    >
      <div className="hidden lg:block w-full">
        <PlaceholderImage
          itemProp="PlaceholderImage"
          image={image}
          rounded="none"
          alt=""
          objectFit="cover"
          width="463"
          height="640"
        />
      </div>
      <div className="block lg:hidden w-full">
        <PlaceholderImage
          itemProp="image"
          image={closeup}
          rounded="none"
          alt=""
          objectFit="cover"
          width="480"
          height="300"
        />
      </div>
      <div className="flex flex-col flex-1 p-8 font-sans font-normal text-xxs lg:text-sm">
        <p className="mb-6" itemProp="jobTitle">
          {job}
        </p>
        <Heading3 itemProp="name">
          {firstname} {lastname}
        </Heading3>
        <p>{bio}</p>
        <div className="flex flex-1 content-end flex-row flex-wrap mt-6">
          {links.map(({ label, url }) => {
            const itemProp = url.match(/^mailto:.+$/i) ? 'email' : 'sameAs';

            return (
              <Link
                itemProp={itemProp}
                className="mr-4 last:mr-0"
                key={url}
                href={url}
                variant={LinkVariants.Default}
                onClick={() => {
                  plausible('Contact Click', {
                    props: {
                      value: url,
                      component: 'employee-card',
                      device: typeof window?.orientation !== 'undefined' ? 'mobile' : 'desktop',
                      url: window?.location.toString(),
                    },
                  });
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
