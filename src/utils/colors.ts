export type BrandColor = 'apricot' | 'mint' | 'cornflower';

type Options = {
  bg: string;
  hex: string;
};

const colorMap: Record<BrandColor, Options> = {
  apricot: {
    bg: 'bg-apricot-500',
    hex: '#F8935A',
  },
  mint: {
    bg: 'bg-mint-500',
    hex: '#7DDDD1',
  },
  cornflower: {
    bg: 'bg-cornflower-500',
    hex: '#6986E8',
  },
};

export const getContrastColor = (background: BrandColor) => {
  const possibleColors = ['apricot', 'mint', 'cornflower'].filter((color) => color !== background);
  return possibleColors[Math.round(Math.random())];
};

export const mapColorToBG = (brand: BrandColor) => colorMap[brand].bg;

export const mapColorToHex = (brand: BrandColor) => colorMap[brand].hex;
