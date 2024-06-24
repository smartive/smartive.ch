import { ResponsiveImageFragment } from '@/graphql/generated';
import { SmartiveColorsType } from '@/utils/color';
import { mapColorToText } from '@smartive/guetzli';
import { FC } from 'react';
import { SRCImage as DatoSRCImage } from 'react-datocms';

type Props = {
  quote: string;
  image?: ResponsiveImageFragment;
  authorName?: string;
  authorDesc?: string;
  color?: SmartiveColorsType;
};

export const SmallTestimonial: FC<Props> = ({ image, quote, authorName, authorDesc, color = 'apricot' }) => (
  <div className="grid grid-rows-[1fr,auto] items-center rounded bg-white-100 p-6 lg:p-10">
    <p className="text-center text-sm font-bold md:text-base lg:text-lg">
      <span className={mapColorToText(color)}>&laquo;</span>
      {quote}
      <span className={mapColorToText(color)}>&raquo;</span>
    </p>
    <div className="mt-8 flex w-full items-center gap-4">
      {image && <DatoSRCImage data={{ ...image, width: 80, height: 80 }} imgClassName="rounded-full" />}
      {authorName && (
        <span className="text-xxs lg:text-sm">
          <strong>{authorName}</strong>
          {authorDesc && (
            <>
              <br />
              <span>{authorDesc}</span>
            </>
          )}
        </span>
      )}
    </div>
  </div>
);
