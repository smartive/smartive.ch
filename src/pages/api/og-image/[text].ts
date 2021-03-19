import type { NextApiRequest, NextApiResponse } from 'next';
import { getScreenshot } from '../../../utils/og-image/chromium';
import { parseRequest } from '../../../utils/og-image/parser';
import { getHtml } from '../../../utils/og-image/template';

const isDev = process.env.NODE_ENV === 'development';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const parsedReq = parseRequest(req);
    const html = getHtml(parsedReq);

    if (parsedReq.debug) {
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
      return;
    }

    const { fileType } = parsedReq;
    const file = await getScreenshot(html, fileType, isDev);
    res.statusCode = 200;
    res.setHeader('Content-Type', `image/${fileType}`);
    res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    console.error(e);
  }
}
