import { NextRequest, NextResponse } from 'next/server';
export async function middleware(request: NextRequest) {
  // remove home from pathname, because its prettier to have / instead of /home for the home page
  if (request.nextUrl.pathname === '/home') {
    return NextResponse.redirect(new URL(`/`, request.url));
  }
}

export const config = {
  matcher: ['/((?!.*\\.|_next|api\\/).*)'],
};
