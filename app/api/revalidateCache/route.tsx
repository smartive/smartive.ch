import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { ALL_PAGES_TAG, PAGE_STRUCTURE_TAG } from '../../../utils/const';

type BodyType = {
  event_type: 'create' | 'update' | 'delete' | 'publish' | 'unpublish';
  entity_slug: string;
  item_type: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const token = req.nextUrl.searchParams.get('token');

  if (token !== process.env.CACHE_INVALIDATION_SECRET_TOKEN) {
    return NextResponse.json({ status: 401, body: { error: 'Invalid Token' } });
  }

  const { entity_slug, event_type, item_type } = (await req.json()) as BodyType;

  const tags: string[] = [];

  // Add slug to tags, in order to invalidate the cache for the page
  if (entity_slug) {
    tags.push(entity_slug);
  }

  // If a new page is created, invalidate the cache for all pages
  if (item_type === 'page' && (event_type === 'create' || event_type === 'delete')) {
    tags.push(ALL_PAGES_TAG, PAGE_STRUCTURE_TAG);
  }

  // Revalidate overview pages
  if (item_type === 'blogpost') {
    revalidatePath('/blog');
  }

  if (item_type === 'project') {
    revalidatePath('/projekte');
  }

  if (item_type === 'offer') {
    revalidatePath('/angebot');
  }

  if (item_type === 'employee') {
    revalidatePath('/team');
  }

  try {
    tags.map((tag) => revalidateTag(tag));
  } catch (error: unknown) {
    return NextResponse.json({
      status: 500,
      body: { message: 'Failed to clear the cache', error },
    });
  }

  return NextResponse.json({ revalidated: true, now: Date.now(), tags });
}
