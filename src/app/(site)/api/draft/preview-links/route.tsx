import { getAllDatoRoutes } from '@/utils/get-dato-routes';
import { NextRequest, NextResponse } from 'next/server';

type generatePreviewUrlParams = {
  item: { attributes: { slug: string; parent_id: string }; meta: { status: string } };
  itemType: { attributes: { api_key: string } };
};

const generatePreviewUrl = async ({ item, itemType }: generatePreviewUrlParams) => {
  switch (itemType.attributes.api_key) {
    case 'page':
      if (item.attributes.parent_id) {
        // page is a child of another page, so let's find the full slug (e.g. /agentur/lohnrechner)
        const { pages } = await getAllDatoRoutes();
        const page = pages.find(({ path }) => path.includes(item.attributes.slug));

        return page?.path ?? null;
      }

      return `/${item.attributes.slug}`;
    case 'project':
      return `/projekte/${item.attributes.slug}`;
    case 'topic':
      return `/t/${item.attributes.slug}`;
    case 'offer':
      return `/angebot/${item.attributes.slug}`;
    case 'blogpost':
      return `/blog/${item.attributes.slug}`;
    default:
      return null;
  }
};

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

export function OPTIONS() {
  return NextResponse.json('ok', { status: 200, headers });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const token = req.nextUrl.searchParams.get('token');

  if (token !== process.env.DRAFT_SECRET_TOKEN) {
    return NextResponse.json({ error: 'Invalid Token' }, { status: 401, headers });
  }

  const parsedRequest = (await req.json()) as generatePreviewUrlParams;
  const url = await generatePreviewUrl(parsedRequest);

  if (!url) {
    return NextResponse.json({ previewLinks: [] }, { status: 200, headers });
  }

  const baseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/api/draft`;

  const previewLinks: { label: string; url: string }[] = [];

  if (parsedRequest.item.meta.status !== 'draft') {
    previewLinks.push({
      label: 'Published version',
      url: `${baseUrl}/disable?url=${url}`,
    });
  }

  if (parsedRequest.item.meta.status !== 'published') {
    previewLinks.push({
      label: 'Draft version',
      url: `${baseUrl}/enable?url=${url}&token=${token}`,
    });
  }

  return NextResponse.json({ previewLinks }, { status: 200, headers });
}
