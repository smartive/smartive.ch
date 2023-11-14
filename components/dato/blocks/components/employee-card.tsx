import Image from 'next/image';
import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { EmployeeFragment } from '../../../../graphql/generated';
import closeupApricot from '../../../../public/images/closeup-fallback-apricot.svg';
import closeupCornflower from '../../../../public/images/closeup-fallback-cornflower.svg';
import closeupMint from '../../../../public/images/closeup-fallback-mint.svg';
import portraitApricot from '../../../../public/images/portrait-fallback-apricot.svg';
import portraitCornflower from '../../../../public/images/portrait-fallback-cornflower.svg';
import portraitMint from '../../../../public/images/portrait-fallback-mint.svg';
import { isTruthy } from '../../../../utils/common';
import { classNames } from '../../../../utils/css';
import { Heading3 } from '../../../nodes/heading3';
import { EmployeeContactLink } from './employee-contact-link';

type Props = {
  employee: EmployeeFragment;
  className?: string;
};

const availableColors = ['apricot', 'mint', 'cornflower'] as const;

export const EmployeeCard: FC<Props> = ({
  employee: { name, job, bio, email, closeup, image, github, linkedin },
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
    github && {
      label: 'GitHub',
      url: github,
    },
  ].filter(isTruthy);

  const colorIndex = Math.floor(Math.random() * availableColors.length);
  const alt = `Portraitfoto von ${name}`;

  return (
    <div className={classNames('flex flex-col overflow-hidden rounded bg-white-100', className)}>
      <div className="hidden w-full lg:block">
        {image?.responsiveImage ? (
          <DatoImage data={{ ...image.responsiveImage, alt }} />
        ) : (
          <Image src={{ 0: portraitMint, 1: portraitApricot, 2: portraitCornflower }[colorIndex]} alt={alt} />
        )}
      </div>
      <div className="block w-full lg:hidden">
        {closeup?.responsiveImage ? (
          <DatoImage data={{ ...closeup.responsiveImage, alt }} />
        ) : (
          <Image src={{ 0: closeupMint, 1: closeupApricot, 2: closeupCornflower }[colorIndex]} alt={alt} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-8 font-sans text-xxs font-normal lg:text-sm">
        <p className="md:mb-2 lg:mb-6">{job}</p>
        <Heading3>{name}</Heading3>
        <p>{bio}</p>
        <div className="mt-6 flex flex-1 flex-row flex-wrap content-end gap-x-4 gap-y-2">
          {links.map(({ label, url }) => (
            <EmployeeContactLink key={url} href={url}>
              {label}
            </EmployeeContactLink>
          ))}
        </div>
      </div>
    </div>
  );
};
