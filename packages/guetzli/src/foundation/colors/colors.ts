export type BrandColor = 'apricot' | 'mint' | 'cornflower';

type Options = {
  text: string;
  bg: string;
  lightBG: string;
  hex: string;
};

const colorMap: Record<BrandColor, Options> = {
  apricot: {
    text: 'text-apricot-500',
    bg: 'bg-apricot-500',
    lightBG: 'bg-apricot-200',
    hex: '#F8935A',
  },
  mint: {
    text: 'text-mint-500',
    bg: 'bg-mint-500',
    lightBG: 'bg-mint-200',
    hex: '#7DDDD1',
  },
  cornflower: {
    text: 'text-cornflower-500',
    bg: 'bg-cornflower-500',
    lightBG: 'bg-cornflower-200',
    hex: '#6986E8',
  },
};

export const getContrastColor = (background: BrandColor): BrandColor => {
  const possibleColors = (['apricot', 'mint', 'cornflower'] as const).filter((color) => color !== background);
  return possibleColors[Math.round(Math.random())];
};

export const mapColorToText = (brand: BrandColor) => colorMap[brand].text;

export const mapColorToBG = (brand: BrandColor) => colorMap[brand].bg;

export const mapColorToLightBG = (brand: BrandColor) => colorMap[brand].lightBG;

export const mapColorToHex = (brand: BrandColor) => colorMap[brand].hex;
