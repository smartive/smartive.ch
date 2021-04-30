import { BrandColor } from '@smartive/guetzli';
import { NextApiRequest } from 'next';
import { ParsedRequest } from './types';

const themes: BrandColor[] = ['apricot', 'mint', 'cornflower'];

export function parseRequest(req: NextApiRequest) {
  const { text, fontSize, width, height, theme, md, fileType, debug } = req.query || {};

  if (Array.isArray(text)) {
    throw new Error('Expected a single text');
  }
  if (Array.isArray(fontSize)) {
    throw new Error('Expected a single fontSize');
  }
  if (Array.isArray(theme)) {
    throw new Error('Expected a single theme');
  }
  if (Array.isArray(width)) {
    throw new Error('Expected a single width');
  }
  if (Array.isArray(height)) {
    throw new Error('Expected a single height');
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
    width: parseInt(width) || 2048,
    height: parseInt(height) || 1170,
  };

  return parsedRequest;
}
