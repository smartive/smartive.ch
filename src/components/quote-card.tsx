import React, { FC } from 'react';
import { Quote } from '../data/quotes';
import { Copy } from '../elements/copy';
import { Decoration } from '../elements/decoration';
import { Heading2 } from '../elements/heading-2';
import { Portrait, PortraitVariant } from '../elements/portrait';

type Props = {
  className?: string;
  quote: Quote;
};

export const QuoteCard: FC<Props> = ({ quote: { text, decoration, credit, portrait }, className = '' }) => (
  <div
    className={`grid grid-flow-row place-items-center text-center w-full rounded bg-apricot-500 p-8 lg:p-32 ${className}`}
  >
    <Portrait image={portrait} alt="" variant={PortraitVariant.small} />
    <Heading2 as="p" className="mt-4">
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
    <Copy>{credit}</Copy>
  </div>
);
