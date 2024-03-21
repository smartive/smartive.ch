import { useId } from 'react';
import seedrandom from 'seedrandom';

export const useSSRSafeRandomNumber = (min: number, max: number) => {
  const seed = useId();

  return Math.floor(seedrandom(seed)() * (max - min + 1)) + min;
};
