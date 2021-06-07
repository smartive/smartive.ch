import { NextApiRequest, NextApiResponse } from 'next';

const getApiUrl = (route: string) => `${process.env.HUBSPOT_API_URL}/${route}?hapikey=${process.env.HUBSPOT_API_KEY}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const path = Array.isArray(req.query.path) ? req.query.path.join('/') : req.query.path;
  const url = getApiUrl(path);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });

  return res.status(response.status).send(response.body);
}
