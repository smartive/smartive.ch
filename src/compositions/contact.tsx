import React, { FC } from 'react';
import { LinkList } from '../components/link-list';
import { Employee } from '../data/employees';
import { Heading2 } from '../elements/heading-2';
import { Portrait, PortraitVariant } from '../elements/portrait';

type Props = {
  contact: Employee;
};

export const Contact: FC<Props> = ({ contact }) => {
  const { firstname, lastname, portrait, tel, email } = contact;
  return (
    <div className="grid place-content-center items-center grid-flow-col gap-12 px-14">
      <Portrait image={portrait} alt={`${firstname} ${lastname}`} variant={PortraitVariant.big} />
      <div>
        <Heading2>
          Fragen oder Interesse? <br />
          {firstname} hilft dir gerne weiter.
        </Heading2>
        <LinkList
          links={[
            { label: email, href: `mailto:${email}` },
            { label: tel, href: `tel:${tel}` },
          ]}
        />
      </div>
    </div>
  );
};
