import { Color } from 'three';

export const TOGGLE_BUTTONS = [
  {
    label: 'ohne Topping',
    topping: 'none',
  },
  {
    label: 'nur unten',
    topping: 'bottom',
  },
  {
    label: 'voll',
    topping: 'full',
  },
] as const;

export const CHOCOLATE_COLORS: Record<string, Color> = {
  milk: new Color('#8B4513'),
  beigeWhite: new Color('#DECEA8'),
  white: new Color('#EDD8A7'),
  dark: new Color('#4F2C1D'),
};

export const DOT_INGREDIENTS = [
  { color: 'hsla(223, 24%, 35%, 1)', index: 1 },
  { color: 'hsla(2, 62%, 52%, 1)', index: 2 },
  { color: 'hsla(18, 58%, 45%, 1)', index: 3 },
] as const;

export const desaturateColor = (color: string) => {
  const [hue, saturation, lightness] = color
    .substring(5, color.length - 1)
    .split(',')
    .map((value) => parseFloat(value.trim()));

  return new Color(`hsl(${hue}, ${Math.round((saturation / 100) * 70)}%, ${lightness}%)`);
};
