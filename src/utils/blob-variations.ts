import { PositionX, PositionY } from '../components/blob';
import { BrandColor } from './colors';

export type BlobType = {
  positionX: PositionX;
  positionY: PositionY;
  color: BrandColor;
};

export const BlobVariations = {
  cornflower: {
    0: [
      { positionX: PositionX.right, positionY: PositionY.top, color: 'mint' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'mint' },
    ],
    1: [
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'mint' },
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'mint' },
    ],
    2: [
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'apricot' },
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'mint' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'mint' },
    ],
    3: [
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'apricot' },
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'mint' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'mint' },
    ],
    4: [
      { positionX: PositionX.right, positionY: PositionY.top, color: 'mint' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'mint' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'mint' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'apricot' },
    ],
  },
  apricot: {
    0: [
      { positionX: PositionX.right, positionY: PositionY.top, color: 'cornflower' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'mint' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'mint' },
    ],
    1: [
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'mint' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'cornflower' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'mint' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'cornflower' },
    ],
    2: [
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'cornflower' },
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'mint' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'mint' },
    ],
  },
  mint: {
    0: [
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'cornflower' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'cornflower' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'apricot' },
    ],
    1: [
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'apricot' },
      { positionX: PositionX.right, positionY: PositionY.bottom, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'cornflower' },
    ],
    2: [
      { positionX: PositionX.right, positionY: PositionY.top, color: 'cornflower' },
      { positionX: PositionX.right, positionY: PositionY.top, color: 'apricot' },
      { positionX: PositionX.left, positionY: PositionY.top, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'cornflower' },
      { positionX: PositionX.left, positionY: PositionY.bottom, color: 'apricot' },
    ],
  },
} as Record<
  BrandColor,
  {
    [key: string]: BlobType[];
  }
>;
