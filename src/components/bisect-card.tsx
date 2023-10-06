import { BrandColor, Card, Heading3 } from '@smartive/guetzli';
import { FC, ReactNode } from 'react';
import { Link } from '../elements/link';

type Props = {
  background?: BrandColor;
  title: ReactNode;
  labelTitle?: ReactNode;
  labelHeader?: ReactNode;
  link?: { label?: string; href?: string };
  header: ReactNode;
  content: ReactNode;
  interactive: boolean;
  environmentalImpact?: boolean;
};

export const NextBisectCard: FC<Props> = ({
  background,
  labelHeader,
  title,
  link,
  labelTitle,
  content,
  header,
  interactive,
  environmentalImpact = true,
}) => {
  const card = (
    <Card background={background} interactive={interactive}>
      <div className={`grid grid-rows-[160px,auto] ${environmentalImpact ? '' : 'text-black text-opacity-40'}`}>
        <div className={`flex flex-col p-4 font-sans text-xxs font-normal lg:text-sm`}>
          <Heading3 as="p" className="self-center">
            <span className="text-base">{header}</span>
          </Heading3>
          <p className="-mt-2 self-center">{labelHeader}</p>
        </div>

        <div className="-mx-8 -mb-8 flex flex-1 flex-col bg-white-100 p-8 font-sans text-xxs font-normal lg:min-h-[22rem] lg:text-sm">
          <p className="mb-4 text-xs"> {labelTitle}</p>
          <div className="break-words-clean">
            <Heading3 as="p">
              <span>{title}</span>
            </Heading3>
          </div>
          <span className="text-sans text-sm">{content}</span>
          {link !== undefined ? (
            <div className="mt-6 flex flex-1 cursor-pointer flex-row flex-wrap content-end text-xs">
              <span className="border-b-2 hover:border-apricot-500">{link.label}</span>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
  return link === undefined ? (
    card
  ) : (
    <span className="border-b-0">
      <Link href={link.href}>{card}</Link>
    </span>
  );
};
