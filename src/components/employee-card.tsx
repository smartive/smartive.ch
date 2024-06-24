import { EmployeeFragment } from '@/graphql/generated';
import { SmartiveColors } from '@/utils/color';
import { isTruthy } from '@/utils/common';
import { classNames, Heading3 } from '@smartive/guetzli';
import NextImage from 'next/image';
import { FC } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';
import portraitApricot from '../../public/images/portrait-fallback-apricot.svg';
import portraitCornflower from '../../public/images/portrait-fallback-cornflower.svg';
import portraitMint from '../../public/images/portrait-fallback-mint.svg';
import { EmployeeContactLink } from './employee-contact-link';

type Props = {
  employee: EmployeeFragment;
  className?: string;
};

export const EmployeeCard: FC<Props> = ({
  employee: { name, job, bio, email, image, github, linkedin },
  className = '',
}) => {
  const links = [
    email && {
      label: email,
      url: `mailto:${email}`,
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

  const colorIndex = Math.floor(Math.random() * SmartiveColors.length) as 0 | 1 | 2;
  const alt = `Portraitfoto von ${name}`;

  return (
    <div className={classNames('flex flex-col overflow-hidden rounded bg-white-100', className)} id={name}>
      <div className="w-full">
        {image?.responsiveImage ? (
          <DatoSRCImage data={{ ...image.responsiveImage, alt }} imgStyle={{ width: '100%', maxWidth: '100%' }} />
        ) : (
          <NextImage src={{ 0: portraitMint, 1: portraitApricot, 2: portraitCornflower }[colorIndex]} alt={alt} />
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
