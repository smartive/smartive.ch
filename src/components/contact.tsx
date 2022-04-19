import { Heading2, LinkList } from '@smartive/guetzli';
import { usePlausible } from 'next-plausible';
import { FC, ReactNode } from 'react';
import { Employee } from '../data/employees';
import { PlausibleEvents } from '../utils/tracking';
import { Image, ImageVariant } from './image';

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
      <Image src={portrait} alt={`${firstname} ${lastname}`} variant={ImageVariant.PortraitBig} />
      <div>
        <Heading2>{children}</Heading2>
        <div className="grid place-items-center lg:place-items-start">
          <LinkList
            links={[
              booking && { label: 'Termin buchen', href: `${booking}`, onClick: () => track(booking) },
              { label: email, href: `mailto:${email}`, onClick: () => track(email) },
              { label: tel, href: `tel:${tel}`, onClick: () => track(tel) },
            ].filter(Boolean)}
          />
        </div>
      </div>
    </div>
  );
};
