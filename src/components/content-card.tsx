import { ContentCard, ContentCardProps } from '@smartive/guetzli';
import NextLink from 'next/link';
import { FC } from 'react';

type Props = ContentCardProps;

export const NextContentCard: FC<Props> = (props) => (
  <NextLink href={props.link.href} passHref legacyBehavior>
    <ContentCard {...props} />
  </NextLink>
);
