import { NextApiRequest } from 'next';
import { BrandColor } from '../colors';
import { ParsedRequest } from './types';

const themes: BrandColor[] = ['apricot', 'mint', 'cornflower'];

export function parseRequest(req: NextApiRequest) {
  const { text, fontSize, widths, heights, theme, md, fileType, debug } = req.query || {};

  if (Array.isArray(text)) {
    throw new Error('Expected a single text');
  }
  if (Array.isArray(fontSize)) {
    throw new Error('Expected a single fontSize');
  }
  if (Array.isArray(theme)) {
    throw new Error('Expected a single theme');
  }

  const validatedTheme =
    theme && (themes as string[]).includes(theme)
      ? (theme as BrandColor)
      : (themes[Math.floor(Math.random() * 3)] as BrandColor);

  const parsedRequest: ParsedRequest = {
    debug: debug === 'true',
    fileType: fileType === 'jpeg' ? fileType : 'png',
    text: decodeURIComponent(text),
    theme: validatedTheme,
    md: md === '1' || md === 'true',
    fontSize: fontSize || '96px',
    widths: getArray(widths),
    heights: getArray(heights),
  };

  return parsedRequest;
}

function getArray(stringOrArray: string[] | string | undefined): string[] {
  if (typeof stringOrArray === 'undefined') {
    return [];
  } else if (Array.isArray(stringOrArray)) {
    return stringOrArray;
  } else {
    return [stringOrArray];
  }
}
