import React, { FC, ReactNode } from 'react';
import { Card } from '../components';
import { Tag, Tags } from '../components/tags';
import { Heading1 } from '../identity/heading-1';
import { BlobType } from '../utils/blob-variations';
import { BrandColor } from '../utils/colors';
import { highlight, purify } from '../utils/markdown';

export enum PageHeaderVariants {
  Simple = 'Simple',
  Card = 'Card',
}

const HeaderSpacing = {
  [PageHeaderVariants.Simple]: 'my-12 lg:my-48',
  [PageHeaderVariants.Card]: 'my-4 lg:my-8',
} as const;

export type PageHeaderProps = {
  markdownTitle: string;
  tags?: Tag[];
  variant?: PageHeaderVariants;
  background?: BrandColor;
  blobs?: BlobType[];
  children?: ReactNode;
};

type SimplePageHeaderProps = {
  display?: string;
  tags?: Tag[];
};

type CardPageHeaderProps = {
  display?: string;
  background?: BrandColor;
  blobs?: BlobType[];
};

const SimplePageHeader: FC<SimplePageHeaderProps> = ({ display, tags, children }) => (
  <>
    {tags && tags.length > 0 && (
      <div className="grid grid-flow-col gap-4 mb-3">
        <Tags tags={tags} />
      </div>
    )}
    {display && <Heading1>{display.includes('_') ? highlight(display) : display}</Heading1>}
    {children}
  </>
);

const CardPageHeader: FC<CardPageHeaderProps> = ({ display, children, background = 'cornflower', blobs = [] }) => (
  <Card blobs={blobs} background={background}>
    <div className="grid grid-flow-row justify-items-center p-4 md:p-12 lg:p-24">
      <div className="text-center">
        {display && <Heading1>{display.includes('_') ? highlight(display) : display}</Heading1>}
        {children}
      </div>
    </div>
  </Card>
);

export const PageHeader: FC<PageHeaderProps> = ({
  markdownTitle,
  children,
  tags,
  variant = PageHeaderVariants.Simple,
  background = 'cornflower',
  blobs = [],
}) => {
  /**
   * Count how many asterisk (*) there are in the string.
   */
  const asteriskCount = (markdownTitle.match(/\*/g) || []).length;
  /**
   * Always remove the backtick (`) as it can lead to issues.
   * If there is only one asterisk, let's assume that it's a gender-* (Projektleiter*in), so keep it.
   * If there are more than one, it's probably markdown so get the f*ck rid of it!
   */
  const regex = asteriskCount > 1 ? /[*`]/g : /[`]/g;
  const display = purify(markdownTitle, regex);

  return (
    <header className={`${HeaderSpacing[variant]}`}>
      {variant === PageHeaderVariants.Simple && (
        <SimplePageHeader display={display} tags={tags}>
          {children}
        </SimplePageHeader>
      )}
      {variant === PageHeaderVariants.Card && (
        <CardPageHeader display={display} background={background} blobs={blobs}>
          {children}
        </CardPageHeader>
      )}
    </header>
  );
};
