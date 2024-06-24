import { ContactBlockFragment } from '@/graphql/generated';
import { LinkList } from '@smartive/guetzli';
import { FC } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';
import { BlockWrapper } from '../layouts/block-wrapper';

type Props = {
  block: ContactBlockFragment;
};

export const ContactBlock: FC<Props> = ({ block: { text, contact } }) => {
  const { email, tel, name, booking, imagePortrait } = contact;
  const firstName = name.split(' ')[0];

  const links = [
    { label: email, href: `mailto:${email}`, title: `E-Mail an ${firstName} schreiben` },
    { label: tel, href: `tel:${tel}`, title: `Anrufen bei ${firstName}` },
  ];

  if (booking) {
    links.unshift({ label: 'Termin buchen', href: booking, title: `Termin bei ${firstName} buchen` });
  }

  return (
    <BlockWrapper>
      <div className="grid grid-flow-row place-content-center items-center justify-items-center gap-6 px-4 text-center lg:grid-flow-col lg:gap-12 lg:px-14 lg:text-left">
        {imagePortrait?.responsiveImage && (
          <div className="h-36 w-36 lg:h-52 lg:w-52">
            <DatoSRCImage data={{ ...imagePortrait.responsiveImage, alt: name }} imgClassName="rounded-full" />
          </div>
        )}
        <div>
          <p className="mb-4 whitespace-pre-line font-sans text-base font-bold lg:mb-8 lg:text-xl">{text}</p>
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start lg:gap-4">
            <LinkList links={links.map(({ label, href, title }) => ({ label: label ?? title, href }))} />
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
};
