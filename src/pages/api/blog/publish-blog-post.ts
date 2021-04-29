import type { NextApiRequest, NextApiResponse } from 'next';
import { PostOrPage } from '@tryghost/content-api';
import { getGhostClient } from '../../../utils/ghost';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newPost = req.body as PostOrPage;
    const isLegal = await checkIfRealPost(newPost);
    if (isLegal) {
      await publishToMedium(newPost);
      res.status(200).end();
    } else {
      throw new Error('Illegal Post, will not be published.');
    }
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
}

const checkIfRealPost = async ({ slug }: PostOrPage) => {
  try {
    const post = await getGhostClient().posts.read({ slug });
    return !!post && !!post.published_at;
  } catch (error) {
    return false;
  }
};

const publishToMedium = async ({ slug, title, html, primary_author }: PostOrPage) => {
  const response = await fetch(`${process.env.MEDIUM_API_URL}/publications/${process.env.MEDIUM_PUBLICATION_ID}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        process.env[`MEDIUM_ACCESS_TOKEN_${primary_author?.slug.toUpperCase()}`] || process.env.MEDIUM_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({
      title,
      contentFormat: 'html',
      content: html,
      canonicalUrl: `https://smartive.ch/blog/${slug}`,
      publishStatus: 'draft',
      notifyFollowers: false,
    }),
  });

  if (!response.ok) {
    throw new Error('Publish to medium failed');
  }
};
