import { TextLink } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  href: string;
  newTab?: boolean;
}>;

export const Link: FC<Props> = ({ children, href, newTab }) => {
  return (
    <NextLink legacyBehavior href={href} passHref>
      <TextLink newTab={newTab}>{children}</TextLink>
    </NextLink>
  );
};
