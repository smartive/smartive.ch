import { SmartiveColorsType } from '@/utils/color';
import { classNames } from '@/utils/css';
import { Clock, Copy, Heading1 } from '@smartive/guetzli';
import { FC } from 'react';
import { Blobs } from './blobs';

type Props = {
  title: string;
  timespan?: string | null;
  description?: string | null;
  color?: SmartiveColorsType;
};

export const OfferHeader: FC<Props> = ({ title, timespan, description, color = 'apricot' }) => (
  <div
    className={classNames(
      'relative mb-12 mt-8 grid w-full grid-flow-row place-items-center overflow-hidden rounded p-8 text-center font-sans text-xxs font-normal lg:mb-48 lg:p-32 lg:text-sm',
      {
        apricot: 'bg-apricot-500',
        mint: 'bg-mint-500',
        cornflower: 'bg-cornflower-500',
      }[color],
    )}
  >
    <div className="z-10">
      <Heading1>{title}</Heading1>
    </div>
    {timespan && (
      <div className="z-10 inline-flex flex-row items-center font-sans text-sm font-bold lg:text-base">
        <Clock className="mr-2 inline h-6 w-6" /> {timespan}
      </div>
    )}
    {description && <Copy className="z-10">{description}</Copy>}
    <Blobs color={color} />
  </div>
);
