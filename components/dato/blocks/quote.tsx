import { FC } from 'react';
import { QuoteBlockFragment } from '../../../graphql/generated';
import { SmallTestimonial, TestimonialColors } from './components/small-testimonial';
import { Testimonial } from './components/testimonial';

type Props = {
  block: QuoteBlockFragment;
};

export const QuoteBlock: FC<Props> = ({ block: { testimonial } }) => {
  if (testimonial.length === 1) {
    const { quote, authorImage, authorName, authorDesc } = testimonial[0];

    return (
      <Testimonial
        quote={quote}
        image={authorImage?.responsiveImage}
        authorName={authorName ?? undefined}
        authorDesc={authorDesc ?? undefined}
      />
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-16">
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
