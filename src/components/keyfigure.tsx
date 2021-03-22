import { FC, ReactNode } from 'react';
import { BrandColor, mapColorToBG } from '../utils/colors';

export enum ImagePosition {
  before = 'col-start-1 row-start-1',
  after = 'row-start-2 col-start-1 md:row-start-1 md:col-start-3',
}

type Props = {
  image?: ReactNode;
  imagePosition?: ImagePosition;
  background?: BrandColor;
};

export const Keyfigure: FC<Props> = ({
  image,
  children,
  background = 'cornflower',
  imagePosition = ImagePosition.before,
}) => {
  const grid = image ? 'grid grid-cols-1 md:grid-cols-3' : '';
  const span = image ? 'col-span-2' : 'max-w-prose mx-auto';
  const bg = mapColorToBG(background);

  return (
    <div className={[bg, grid, 'rounded p-8 md:px-16 md:gap-12'].join(' ')}>
      {image && <div className={`mx-auto my-8 md:my-0 md:mx-0 place-self-center ${imagePosition}`}>{image}</div>}
      <div className={`${span} flex flex-col justify-center`}>{children}</div>
    </div>
  );
};
