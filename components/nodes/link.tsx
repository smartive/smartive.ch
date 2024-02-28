import NextLink from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { SmartiveColorsType } from '../../utils/color';
import { classNames } from '../../utils/css';

type Props = PropsWithChildren<{
  href: string;
  target?: string;
  rel?: string;
  title?: string;
  color?: SmartiveColorsType;
  download?: boolean;
}>;

export const Link: FC<Props> = ({ children, href, target, download, rel, title, color = 'apricot' }) => (
  <NextLink
    href={href ?? '#'}
    target={target ?? '_self'}
    download={download}
    rel={rel}
    className={classNames(
      'mr-4 mt-2 inline-block border-b-2 text-xxs font-bold no-underline transition-colors duration-150 hover:border-black md:text-sm lg:border-b-4 lg:text-base lg:peer-[a&]:ml-8',
      {
        apricot: 'border-apricot-500',
        mint: 'border-mint-500',
        cornflower: 'border-cornflower-500',
      }[color],
    )}
    title={title}
  >
    {children}
  </NextLink>
);
