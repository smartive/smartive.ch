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

export const EmployeeCard: FC<Props> = ({ employee: { firstname, lastname, job, bio, image, links }, className = '' }) => (
  <div className={`bg-white-100 rounded overflow-hidden ${className}`}>
    {image ? (
      <Image src={image} alt="" layout="fixed" objectFit="cover" width="463" height="640" />
    ) : (
      <div className="bg-mint-200" style={{ height: '640px', width: '463px' }} />
    )}
    <div className="p-8">
      <Copy className="mb-6">{job}</Copy>
      <Heading3 as="p">
        {firstname} {lastname}
      </Heading3>
      <Copy>{bio}</Copy>
      <div className="flex flex-row flex-wrap gap-4 mt-6">
        {links.map(({ label, url }) => (
          <Link key={url} href={url} variant={LinkVariants.Underline}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);
