import { exitPreview } from '@prismicio/next';
import type { NextApiRequest, NextApiResponse } from 'next';

// Clear preview cookies, etc. to end prismic preview session
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await exitPreview({ res, req });
}
