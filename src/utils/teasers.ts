import Teasers from '../data/teasers.json';

export function getRandomTeasers(amount: number, ignore?: string) {
  const teasers = Object.values(Teasers).filter(({ title }) => title !== ignore);
  const result = new Array(amount);

  let length = teasers.length;
  const taken = new Array(length);

  if (amount > length) {
    return teasers;
  }

  while (amount--) {
    const index = Math.floor(Math.random() * length);
    result[amount] = teasers[index in taken ? taken[index] : index];
    taken[index] = --length in taken ? taken[length] : length;
  }

  return result;
}
