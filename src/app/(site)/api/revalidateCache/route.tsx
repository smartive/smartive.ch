import { ALL_PAGES_TAG, PAGE_STRUCTURE_TAG } from '@/utils/const';
import { getAllDatoRoutes } from '@/utils/get-dato-routes';
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

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
  const paths: string[] = [];
  const tags: string[] = [];

  // find the route for the slug
  const allRoutes = await getAllDatoRoutes();
  const routes = [
    ...allRoutes.pages,
    ...allRoutes.blogposts,
    ...allRoutes.offers,
    ...allRoutes.projects,
    ...allRoutes.topics,
  ].filter((route) => route.path.includes(entity_slug));

  if (routes.length) {
    paths.push(...routes.map((route) => route.path));
  }

  // If a new page is created, invalidate the cache for all pages
  if (item_type === 'page' && (event_type === 'create' || event_type === 'delete')) {
    tags.push(ALL_PAGES_TAG, PAGE_STRUCTURE_TAG);
  }

  // Revalidate overview pages
  if (item_type === 'blogpost') {
    paths.push('/blog');
  }

  if (item_type === 'project') {
    paths.push('/projekte');
  }

  if (item_type === 'offer') {
    paths.push('/angebot');
  }

  if (item_type === 'employee') {
    paths.push('/team');
  }

  if (paths.length === 0 && tags.length === 0) {
    return NextResponse.json({
      status: 400,
      body: { message: 'No paths or tags to revalidate' },
    });
  }

  try {
    paths.map((path) => revalidatePath(path));
    tags.map((tag) => revalidateTag(tag));
  } catch (error: unknown) {
    return NextResponse.json({
      status: 500,
      body: { message: 'Failed to clear the cache', error },
    });
  }

  return NextResponse.json({ revalidated: true, now: Date.now(), paths, tags });
}
