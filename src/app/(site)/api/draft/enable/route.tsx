import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const token = searchParams.get('token');
  const url = searchParams.get('url');

  if (token !== process.env.DRAFT_SECRET_TOKEN) {
    return new Response('Invalid token', { status: 401 });
  }

  draftMode().enable();

  if (!url) {
    return new Response('Draft mode is enabled');
  }

  // to avoid losing the cookie on redirect in the iFrame
  const cookieStore = cookies();
  const cookie = cookieStore.get('__prerender_bypass')!;
  cookies().set({
    name: '__prerender_bypass',
    value: cookie?.value,
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
  });

  redirect(url);
}
