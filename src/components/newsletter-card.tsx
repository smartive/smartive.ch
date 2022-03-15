import { BrandColor, Card, Heading2, PositionX, PositionY } from '@smartive/guetzli';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';

const NewsletterSubscription = dynamic(
  () => import('./newsletter-subscription').then((module) => module.NewsletterSubscription),
  { ssr: false }
);

type Props = {
  background?: BrandColor;
  blobs?: { color: BrandColor; positionX: PositionX; positionY: PositionY }[];
};

export const NewsletterCard: FC<Props> = ({ blobs = [], background = 'apricot' }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <Card background={background} blobs={blobs}>
      <div ref={ref} className="grid grid-flow-row place-items-center text-center lg:p-24 lg:text-sm">
        <Heading2 as="p">Wir schreiben nicht nur Code, sondern auch E-Mails. Auch dir, wenn du willst.</Heading2>
        {inView && <NewsletterSubscription label="Newsletter" />}
      </div>
    </Card>
  );
};
