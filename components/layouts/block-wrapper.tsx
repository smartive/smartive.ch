import { FC, PropsWithChildren } from 'react';
import { classNames } from '../../utils/css';

type Props = PropsWithChildren<{
  marginTop?: 'none' | 'small' | 'large';
  marginBottom?: 'none' | 'small' | 'large';
}>;

export const BlockWrapper: FC<Props> = ({ children, marginTop = 'large', marginBottom = 'large' }) => (
  <section
    className={classNames(
      'block-wrapper',
      {
        large: 'mt-12 lg:mt-48',
        small: 'mt-8 lg:mt-16',
      }[marginTop],
      {
        large: 'mb-12 lg:mb-48',
        small: 'mb-8 lg:mb-16',
      }[marginBottom],
    )}
  >
    {children}
  </section>
);
