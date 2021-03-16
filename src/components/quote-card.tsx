import React, { FC } from 'react';
import { Quote } from '../data/quotes';
import { Decoration } from '../elements/decoration';
import { Heading2 } from '../elements/heading-2';
import { Portrait, PortraitVariant } from '../elements/portrait';
import { Blob, BlobColor, PositionX, PositionY } from './blob';

type Props = {
  className?: string;
  quote: Quote;
  background?: 'bg-apricot-500' | 'bg-mint-500' | 'bg-cornflower-500';
  blobs?: { color: BlobColor; positionX: PositionX; positionY: PositionY }[];
};

export const QuoteCard: FC<Props> = ({
  quote: { text, decoration, credit, portrait },
  className = '',
  blobs = [],
  background = 'bg-apricot-500',
}) => (
  <div
    className={`relative grid grid-flow-row place-items-center text-center w-full rounded ${background} p-8 lg:p-32 font-sans font-normal text-xxs mb-4 lg:text-sm ${className}`}
  >
    <Portrait className="z-10" image={portrait} alt="" variant={PortraitVariant.Small} />
    <Heading2 as="p" className="mt-4 z-10">
      &laquo;
      {decoration && text.includes(decoration) ? (
        <>
          {text.split(decoration)[0]}
          <Decoration>{decoration}</Decoration>
          {text.split(decoration)[1]}
        </>
      ) : (
        text
      )}
      &raquo;
    </Heading2>
    <p className="z-10">{credit}</p>
    {blobs.map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
