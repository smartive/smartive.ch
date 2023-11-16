import { FC } from 'react';
import { QuoteBlockFragment } from '../../../graphql/generated';
import { SmartiveColors } from '../../../utils/color';
import { BlockWrapper } from '../../layouts/block-wrapper';
import { SmallTestimonial } from '../../small-testimonial';
import { Testimonial } from '../../testimonial';

type Props = {
  block: QuoteBlockFragment;
};

export const QuoteBlock: FC<Props> = ({ block: { testimonial, disableMarginTop, disableMarginBottom } }) => {
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
    <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-16">
        {testimonial.map(({ quote, authorImage, authorName, authorDesc }, index) => (
          <SmallTestimonial
            key={index}
            quote={quote}
            image={authorImage?.responsiveImage}
            authorName={authorName ?? undefined}
            authorDesc={authorDesc ?? undefined}
            color={SmartiveColors[index % 3]}
          />
        ))}
      </div>
    </BlockWrapper>
  );
};
