import { BrandColor, Card, Heading2, PositionX, PositionY } from '@smartive/guetzli';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

const NewsletterSubscription = dynamic(() => import('./newsletter-subscription'), { ssr: false });

type Props = {
  background?: BrandColor;
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
};

export const NewsletterCard: FC<Props> = ({ blobs = [], background = 'apricot' }) => (
  <Card background={background} blobs={blobs}>
    <div className="grid grid-flow-row place-items-center text-center lg:p-24 lg:text-sm">
      <Heading2 as="p">Wir schreiben nicht nur Code, sondern auch E-Mails. Auch dir, wenn du willst.</Heading2>
      <NewsletterSubscription label="Newsletter" className="text-left overflow-hidden sm:overflow-visible" />
    </div>
  </Card>
);
