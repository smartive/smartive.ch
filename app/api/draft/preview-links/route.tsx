import { NextRequest, NextResponse } from 'next/server';

type generatePreviewUrlParams = {
  item: { attributes: { slug: string } };
  itemType: { attributes: { api_key: string } };
};

const generatePreviewUrl = ({ item, itemType }: generatePreviewUrlParams) => {
  switch (itemType.attributes.api_key) {
    case 'project':
      return `/projekte/${item.attributes.slug}`;
  }
};

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

export async function OPTIONS() {
  return NextResponse.json('ok', { status: 200, headers });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const token = req.nextUrl.searchParams.get('token');

  if (token !== process.env.DRAFT_SECRET_TOKEN) {
    return NextResponse.json({ error: 'Invalid Token' }, { status: 401, headers });
  }

  const parsedRequest = await req.json();
  const url = generatePreviewUrl(parsedRequest);

  if (!url) {
    return NextResponse.json({ previewLinks: JSON.stringify([]) }, { status: 200, headers });
  }

  // Vercel autopopulates the VERCEL_URL env variable with the deployment URL
  const baseUrl = `https://${process.env.VERCEL_URL}`;

  const previewLinks: { label: string; url: string }[] = [];

  if (parsedRequest.item.meta.status !== 'draft')
    previewLinks.push({
      label: 'Published version',
      url: `${baseUrl}/api/draft/disable?url=${url}`,
    });

  if (parsedRequest.item.meta.status !== 'published')
    previewLinks.push({
      label: 'Draft version',
      url: `${baseUrl}/api/draft/enable?url=${url}&token=${token}`,
    });

  return NextResponse.json({ previewLinks }, { status: 200, headers });
}
