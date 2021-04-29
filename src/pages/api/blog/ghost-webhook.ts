import { PostOrPage } from '@tryghost/content-api';
import type { NextApiRequest, NextApiResponse } from 'next';

type PostPublishedGhostWebhook = {
  post: {
    current: PostOrPage;
  };
};

// This API-Endpoint gets called from a Ghost Webhook and it is important to
// immediately respond with status 200 to stay in the 2s time-limit after which Ghost fires
// the webhook again which can lead to the same post being published multiple times.
// That's why the heavy lifting is done in the `publish-blog-post` endpoint.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/publish-blog-post`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify((req.body as PostPublishedGhostWebhook).post.current),
    });

    // await a short timeout to prevent the fetch request from being cancelled before it can be sent because the lambda function is killed to fast
    await sleep(100);

    res.status(200).end();
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
}

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
