import { FC } from 'react';
import { QuoteBlockFragment } from '../../../graphql/generated';
import { classNames } from '../../../utils/css';
import { SingleTestimonial } from './components/single-testimonial';
import { SmallTestimonial, TestimonialColors } from './components/small-testimonial';

type Props = {
  block: QuoteBlockFragment;
};

export const QuoteBlock: FC<Props> = ({ block: { testimonial, disableMarginTop, disableMarginBottom } }) => {
  if (testimonial.length === 1) {
    const { quote, authorImage, authorName, authorDesc } = testimonial[0];

    return (
      <SingleTestimonial
        quote={quote}
        image={authorImage?.responsiveImage}
        authorName={authorName ?? undefined}
        authorDesc={authorDesc ?? undefined}
      />
    );
  }

  return (
    <div
      className={classNames(
        'grid gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-16',
        disableMarginTop ? 'mt-4 lg:mt-8 xl:mt-16' : 'mt-12 lg:mt-48',
        !disableMarginBottom && 'mb-12 lg:mb-48',
      )}
    >
      {testimonial.map(({ quote, authorImage, authorName, authorDesc }, index) => (
        <SmallTestimonial
          key={index}
          quote={quote}
          image={authorImage?.responsiveImage}
          authorName={authorName ?? undefined}
          authorDesc={authorDesc ?? undefined}
          color={TestimonialColors[index % 3]}
        />
      ))}
    </div>
  );
};
