import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

type BodyType = {
  event_type: 'create' | 'update' | 'delete' | 'publish' | 'unpublish';
  entity_slug: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const token = req.nextUrl.searchParams.get('token');

  if (token !== process.env.CACHE_INVALIDATION_SECRET_TOKEN) {
    return NextResponse.json({ status: 401, body: { error: 'Invalid Token' } });
  }

  let tags = ['datocms'];
  const { entity_slug }: BodyType = await req.json();

  if (entity_slug) {
    tags = [...tags, entity_slug];
  }

  try {
    tags.map((tag) => revalidateTag(tag));
  } catch (error) {
    return NextResponse.json({
      status: 500,
      body: { message: 'Failed to clear the cache', error },
    });
  }

  return NextResponse.json({ revalidated: true, now: Date.now(), tags });
}
