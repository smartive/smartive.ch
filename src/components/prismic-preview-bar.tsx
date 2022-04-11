import { FC } from 'react';
import { TextLink } from '@smartive/guetzli';
import NextLink from 'next/link';

export const PrismicPreviewBar: FC = () => {
  return (
    <div className="grid grid-flow-row md:grid-flow-col gap-4 p-2 plac place-items-center place-content-center w-full bg-mint-500 text-xxs">
      <p className="font-bold">Prismic Preview Modus aktiv</p>
      <NextLink href="/api/exit-prismic-preview" prefetch={false} passHref>
        <TextLink>Preview beenden</TextLink>
      </NextLink>
    </div>
  );
};
