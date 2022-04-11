import { setPreviewData } from '@prismicio/next';
import type { NextApiRequest, NextApiResponse } from 'next';

// Preview prismic drafts with Prismic Preview and https://nextjs.org/docs/advanced-features/preview-mode
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.SECRET_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (req.query.token) {
    await setPreviewData({ req, res });
  }

  res.redirect('/');
}
