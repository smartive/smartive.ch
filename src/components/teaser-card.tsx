import { SmartiveColorsType } from '@/utils/color';
import { classNames, Heading3 } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';
import { SRCImage as DatoSRCImage, ResponsiveImageType } from 'react-datocms';

type Props = {
  title: string;
  eyebrow?: string | null;
  description?: string | null;
  link: string;
  linkLabel?: string | null;
  color?: SmartiveColorsType | 'white';
  image?: ResponsiveImageType;
  newTab?: boolean;
};

export const TeaserCard: FC<Props> = ({
  eyebrow,
  title,
  description,
  link,
  linkLabel,
  color = 'apricot',
  image,
  newTab,
}) => (
  <NextLink
    href={link}
    className={classNames(
      'grid w-full grid-rows-[auto,1fr,auto] overflow-hidden rounded text-black transition-transform active:scale-[.99]',
      {
        apricot: 'card-shadow-cornflower bg-apricot-500',
        mint: 'card-shadow-apricot bg-mint-500',
        cornflower: 'card-shadow-mint bg-cornflower-500',
        white: 'card-shadow-cornflower bg-white-100',
      }[color],
    )}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : undefined}
  >
    {image && <DatoSRCImage data={image} imgStyle={{ width: '100%', maxWidth: '100%' }} />}
    <div className="grid grid-rows-[auto,1fr,auto] p-5 font-sans text-xxs font-normal md:p-6 lg:p-8 lg:text-sm">
      {eyebrow && <p>{eyebrow}</p>}
      <div>
        <Heading3>{title}</Heading3>
        {description && <p>{description}</p>}
      </div>
      <div className="lg:mt-4">
        <span className="border-b-2">{linkLabel ? linkLabel : 'Angebot anschauen'}</span>
      </div>
    </div>
  </NextLink>
);
