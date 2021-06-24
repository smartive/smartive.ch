import { getPlaceholder, ImageWithPlaceholder } from '../utils/image-placeholders';
import Quotes from './quotes.json';

export type Quote = {
  excerpt?: string;
  text: string;
  portrait: ImageWithPlaceholder;
  credit: string;
};

export const transformQuote = async (quote: typeof Quotes['thilo-newwork']): Promise<Quote> => ({
  ...quote,
  portrait: await getPlaceholder(quote.portrait),
});
