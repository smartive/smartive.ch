import { FC, ReactNode } from 'react';
import { BrandColor, mapColorToBG } from '../utils/colors';

type Props = {
  image?: ReactNode;
  background?: BrandColor;
};

export const Keyfigure: FC<Props> = ({ image, children, background = 'cornflower' }) => {
  const grid = image ? 'grid grid-cols-1 md:grid-cols-3' : '';
  const span = image ? 'col-span-2' : 'max-w-prose mx-auto';
  const bg = mapColorToBG(background);

  return (
    <div className={[bg, grid, 'rounded p-8 md:px-16 md:gap-6'].join(' ')}>
      {image && <div className="mx-auto mb-8 md:mb-0 md:mx-0">{image}</div>}
      <div className={`${span} flex flex-col justify-center`}>{children}</div>
    </div>
  );
};
