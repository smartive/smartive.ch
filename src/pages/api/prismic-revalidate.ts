import type { NextApiRequest, NextApiResponse } from 'next';

const prismicPages = ['/'];

// Used for on demand revalidation for changes in Prismic
// https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#on-demand-revalidation-beta
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.SECRET_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await Promise.all(prismicPages.map(async (page) => await res.unstable_revalidate(page)));
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
