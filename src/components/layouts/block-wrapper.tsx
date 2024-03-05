import { classNames } from '@/utils/css';
import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  marginTop?: 'none' | 'small' | 'large';
  marginBottom?: 'none' | 'small' | 'large';
}>;

export const BlockWrapper: FC<Props> = ({ children, marginTop = 'large', marginBottom = 'large' }) => (
  <section
    className={classNames(
      'block-wrapper',
      {
        large: 'mt-12 md:mt-24 lg:mt-48',
        small: 'mt-8 md:mt-12 lg:mt-16',
        none: '',
      }[marginTop],
      {
        large: 'mb-12 md:mb-24 lg:mb-48',
        small: 'mb-8 md:mb-12 lg:mb-16',
        none: '',
      }[marginBottom],
    )}
  >
    {children}
  </section>
);
