import { LogoGridBlockFragment } from '@/graphql/generated';
import { FC } from 'react';
import { BlockWrapper } from '../layouts/block-wrapper';
import { Heading2 } from '../nodes';

type Props = {
  block: LogoGridBlockFragment;
};

export const LogoGridBlock: FC<Props> = ({ block: { heading, logos, disableMarginTop, disableMarginBottom } }) => (
  <BlockWrapper marginTop={disableMarginTop ? 'none' : 'large'} marginBottom={disableMarginBottom ? 'none' : 'large'}>
    {heading && (
      <div className="mb-8 lg:mb-16">
        <Heading2>{heading}</Heading2>
      </div>
    )}
    <div className="grid grid-cols-3 gap-8 sm:gap-12 md:grid-cols-4 md:gap-16 xl:grid-cols-6">
      {logos?.map((logo) => (
        // there is no advantage in using next/image here, because the logos are SVGs
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={logo.id}
          src={logo.url}
          width={logo.width ?? undefined}
          height={logo.height ?? undefined}
          alt={logo.title}
          title={logo.title}
          loading="lazy"
          className="w-full"
        />
      ))}
    </div>
  </BlockWrapper>
);
