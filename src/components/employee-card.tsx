import { Heading3, TextLink, useSSRSafeRandomNumber } from '@smartive/guetzli';
import { usePlausible } from 'next-plausible';
import { FC } from 'react';
import { Employee } from '../data/employees';
import { PlausibleEvents } from '../utils/tracking';
import { Image, ImageVariant } from './image';

type Props = {
  employee: Employee;
  className?: string;
};

const availableColors = ['apricot', 'mint', 'cornflower'] as const;
const getPortraitFallbackImage = (colorIndex: number) => `/images/portrait-fallback-${availableColors[colorIndex]}.svg`;
const getCloseupFallbackImage = (colorIndex: number) => `/images/closeup-fallback-${availableColors[colorIndex]}.svg`;

export const EmployeeCard: FC<Props> = ({
  employee: { name, job, bio, github, linkedin, twitter, email, image, closeup },
  className = '',
}) => {
  const links = [
    email && {
      label: email,
      url: 'mailto:' + email,
    },
    linkedin && {
      label: 'LinkedIn',
      url: linkedin,
    },
    twitter && {
      label: 'Twitter',
      url: twitter,
    },
    github && {
      label: 'GitHub',
      url: github,
    },
  ].filter(Boolean);
  const plausible = usePlausible<PlausibleEvents>();

  const colorIndex = useSSRSafeRandomNumber(0, availableColors.length - 1);
  const potraitWithFallback = image || getPortraitFallbackImage(colorIndex);
  const closeupWithFallback = closeup || getCloseupFallbackImage(colorIndex);

  return (
    <div
      id={encodeURI(name)}
      className={`flex flex-col overflow-hidden rounded bg-white-100 ${className}`}
      itemScope
      itemProp="employee"
      itemType="http://schema.org/Person"
    >
      <div className="hidden w-full lg:block">
        <Image
          src={potraitWithFallback}
          rounded="none"
          alt={`Portraitfoto von ${name}`}
          variant={ImageVariant.FillContainer}
          width="458"
          height="687"
        />
      </div>
      <div className="block w-full lg:hidden">
        <Image
          itemProp="image"
          src={closeupWithFallback}
          rounded="none"
          alt={`Portraitfoto von ${name}`}
          variant={ImageVariant.FillContainer}
          width="480"
          height="300"
        />
      </div>
      <div className="flex flex-1 flex-col p-8 font-sans text-xxs font-normal lg:text-sm">
        <p className="mb-2 lg:mb-6" itemProp="jobTitle">
          {job}
        </p>
        <Heading3 className="text-base" itemProp="name">
          {name}
        </Heading3>
        <p>{bio}</p>
        <div className="mt-6 flex flex-1 flex-row flex-wrap content-end gap-x-4 gap-y-2">
          {links.map(({ label, url }) => {
            const itemProp = url.match(/^mailto:.+$/i) ? 'email' : 'sameAs';

            return (
              <TextLink
                key={url}
                itemProp={itemProp}
                href={url}
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
              </TextLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
