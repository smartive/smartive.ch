import { Heading2, LinkList } from '@smartive/guetzli';
import { usePlausible } from 'next-plausible';
import React, { FC } from 'react';
import { Employee } from '../data/employees';
import { Portrait, PortraitVariant } from '../elements/portrait';
import { PlausibleEvents } from '../utils/tracking';

type Props = {
  contact: Employee;
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
  const { firstname, lastname, portrait, tel, email } = contact;
  const plausible = usePlausible<PlausibleEvents>();

  const track = (value: string) => {
    plausible('Contact Click', {
      props: {
        value,
        component: 'contact-box',
        device: typeof window?.orientation !== 'undefined' ? 'mobile' : 'desktop',
        url: window?.location.toString(),
      },
    });
  };

  return (
    <div className="grid place-content-center items-center justify-items-center text-center lg:text-left grid-flow-row lg:grid-flow-col gap-12 px-4 lg:px-14">
      <Portrait
        image={portrait}
        alt={`${firstname} ${lastname}`}
        variant={PortraitVariant.Big}
        className="h-16 w-16 lg:h-52 lg:w-52"
      />
      <div>
        <Heading2>{children}</Heading2>
        <div className="grid place-items-center lg:place-items-start">
          <LinkList
            links={[
              { label: email, href: `mailto:${email}`, onClick: () => track(email) },
              { label: tel, href: `tel:${tel}`, onClick: () => track(tel) },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
