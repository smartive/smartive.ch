import { BrandColor, Card, Heading3, TextLink } from '@smartive/guetzli';
import React, { FC, ReactNode } from 'react';

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
        <div className={`flex flex-col p-4 font-sans font-normal text-xxs lg:text-sm`}>
          <Heading3 as="p" className="self-center">
            <span className="text-base">{header}</span>
          </Heading3>
          <p className="self-center -mt-2">{labelHeader}</p>
        </div>

        <div className="lg:min-h-[22rem] -mx-8 -mb-8 bg-white-100 flex flex-col flex-1 p-8 font-sans font-normal text-xxs lg:text-sm">
          <p className="mb-4 text-xs"> {labelTitle}</p>
          <div className="break-words-clean">
            <Heading3 as="p">
              <span>{title}</span>
            </Heading3>
          </div>
          <span className="text-sm text-sans">{content}</span>
          {link !== undefined ? (
            <div className="flex flex-1 content-end flex-row flex-wrap mt-6 cursor-pointer text-xs">
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
      <TextLink href={link.href}>{card}</TextLink>
    </span>
  );
};
