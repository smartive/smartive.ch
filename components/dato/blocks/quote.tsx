import { FC } from 'react';
import { QuoteBlockFragment } from '../../../graphql/generated';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { SingleTestimonial } from '../../single-testimonial';
import { SmallTestimonial, TestimonialColors } from '../../small-testimonial';

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
    <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
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
    </BlockWrapper>
  );
};
