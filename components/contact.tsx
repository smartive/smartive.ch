import NextImage from 'next/image';
import { FC, ReactNode } from 'react';
import { Employee } from '../src/data/employees';
import { Link, LinkColors } from './nodes';

type Props = {
  contact: Employee;
  children?: ReactNode;
};

export const Contact: FC<Props> = ({
  contact,
  children = (
    <>
      Fragen oder Interesse? <br />
      {contact.firstname} hilft dir gern weiter.
    </>
  ),
}) => {
  const { firstname, lastname, portrait, tel, email, booking } = contact;

  const links = [
    { label: email, href: `mailto:${email}` },
    { label: tel, href: `tel:${tel}` },
  ];

  if (booking) links.unshift({ label: 'Termin buchen', href: booking });

  return (
    <div className="grid grid-flow-row place-content-center items-center justify-items-center gap-12 px-4 text-center lg:grid-flow-col lg:px-14 lg:text-left">
      <NextImage src={portrait} width={208} height={208} alt={`${firstname} ${lastname}`} className="rounded-full" />
      <div>
        <p className="mb-4 whitespace-pre-line font-sans text-base font-bold lg:mb-8 lg:text-xl">{children}</p>
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-8">
          {links.map(({ label, href }, index) => (
            <Link key={href} href={href} color={LinkColors[index % 3]}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
