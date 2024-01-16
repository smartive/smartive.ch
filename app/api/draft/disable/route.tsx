import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const url = searchParams.get('url');

  draftMode().disable();

  if (!url) {
    return new Response('Draft mode is disabled');
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
