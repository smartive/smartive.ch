import { Blob, BlobType, BrandColor, Heading2, highlight, mapColorToBG } from '@smartive/guetzli';
import { FC } from 'react';
import { Quote } from '../data/quotes';
import { Image, ImageVariant } from './image';

type Props = {
  className?: string;
  quote: Quote;
  background?: BrandColor;
  blobs?: BlobType[];
};

export const Testimonial: FC<Props> = ({
  quote: { text, excerpt, credit, portrait },
  className = '',
  blobs = [],
  background = 'apricot',
}) => (
  <div
    className={`relative grid w-full grid-flow-row place-items-center overflow-hidden rounded text-center ${mapColorToBG(
      background,
    )} mb-4 p-8 font-sans text-xxs font-normal lg:p-32 lg:text-sm ${className}`}
  >
    <div className="z-10">
      <Image src={portrait} alt={credit} variant={ImageVariant.PortraitSmall} />
    </div>
    <Heading2 as="p" className="z-10 mt-4 overflow-hidden sm:overflow-visible">
      &laquo;
      {excerpt ? highlight(excerpt) : highlight(text)}
      &raquo;
    </Heading2>
    {excerpt && <p className="z-10 mb-8 text-sm font-bold lg:text-base">{text}</p>}
    <p className="z-10">{credit}</p>
    {blobs.map(({ color, positionX, positionY }, index) => (
      <Blob key={index} positionX={positionX} positionY={positionY} color={color} />
    ))}
  </div>
);
