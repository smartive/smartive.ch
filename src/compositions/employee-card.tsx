import Image from 'next/image';
import React, { FC } from 'react';
import { Employee } from '../data/employees';
import { Copy } from '../elements/copy';
import { Heading3 } from '../elements/heading-3';
import { Link, LinkVariants } from '../elements/link';

type Props = {
  employee: Employee;
  className?: string;
};

export const EmployeeCard: FC<Props> = ({
  employee: { firstname, lastname, job, bio, image, portrait, links },
  className = '',
}) => (
  <div className={`flex flex-col bg-white-100 rounded overflow-hidden ${className}`}>
    <div className="hidden lg:block w-full">
      <Image
        className="bg-mint-200"
        src={image || '/images/portrait-fallback.svg'}
        alt=""
        layout="responsive"
        objectFit="cover"
        width="463"
        height="640"
      />
    </div>
    <div className="block lg:hidden w-full">
      <Image
        className="bg-mint-200"
        src={portrait || '/images/portrait-fallback.svg'}
        alt=""
        layout="responsive"
        objectFit="cover"
        width="343"
        height="216"
      />
    </div>
    <div className="flex flex-col flex-1 p-8">
      <Copy className="mb-6">{job}</Copy>
      <Heading3 as="p">
        {firstname} {lastname}
      </Heading3>
      <Copy>{bio}</Copy>
      <div className="flex flex-1 content-end flex-row flex-wrap mt-6">
        {links.map(({ label, url }) => (
          <Link className="mr-4 last:mr-0" key={url} href={url} variant={LinkVariants.Underline}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);
