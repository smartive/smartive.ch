import { FC } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { ResponsiveImageFragment } from '../graphql/generated';

export const TestimonialColors = ['apricot', 'mint', 'cornflower'] as const;

const colorClassNames = {
  apricot: 'text-apricot-500',
  mint: 'text-mint-500',
  cornflower: 'text-cornflower-500',
};

type Props = {
  quote: string;
  image?: ResponsiveImageFragment;
  authorName?: string;
  authorDesc?: string;
  color?: string;
};

export const SmallTestimonial: FC<Props> = ({ image, quote, authorName, authorDesc, color = 'apricot' }) => (
  <div className="grid grid-rows-[1fr,auto] items-center rounded bg-white-100 p-6 lg:p-10">
    <p className="text-center text-sm font-bold md:text-base lg:text-lg">
      <span className={`${colorClassNames[color]}`}>&laquo;</span>
      {quote}
      <span className={`${colorClassNames[color]}`}>&raquo;</span>
    </p>
    <div className="mt-8 flex w-full items-center gap-4">
      {image && <DatoImage data={{ ...image, width: 80, height: 80 }} className="rounded-full" />}
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
