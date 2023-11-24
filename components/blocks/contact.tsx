import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { ContactBlockFragment } from '../../graphql/generated';
import { SmartiveColors } from '../../utils/color';
import { BlockWrapper } from '../layouts/block-wrapper';
import { Link } from '../nodes';

type Props = {
  block: ContactBlockFragment;
};

export const ContactBlock: FC<Props> = async ({ block: { text, contact } }) => {
  const { email, tel, name, booking, portrait } = contact;
  const firstName = name.split(' ')[0];

  const links = [
    { label: email, href: `mailto:${email}`, title: `E-Mail an ${firstName} schreiben` },
    { label: tel, href: `tel:${tel}`, title: `Anrufen bei ${firstName}` },
  ];

  if (booking) links.unshift({ label: 'Termin buchen', href: booking, title: `Termin bei ${firstName} buchen` });

  return (
    <BlockWrapper>
      <div className="grid grid-flow-row place-content-center items-center justify-items-center gap-12 px-4 text-center lg:grid-flow-col lg:px-14 lg:text-left">
        {portrait?.responsiveImage && (
          <DatoImage data={{ ...portrait.responsiveImage, alt: name }} className="rounded-full" />
        )}
        <div>
          <p className="mb-4 whitespace-pre-line font-sans text-base font-bold lg:mb-8 lg:text-xl">{text}</p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start lg:gap-8">
            {links.map(({ label, href, title }, index) => (
              <Link key={href} href={href} title={title} target="_blank" color={SmartiveColors[index % 3]}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
};
