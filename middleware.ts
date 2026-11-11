import { NextRequest, NextResponse } from 'next/server';

function russianPath(pathname: string) {
  const rest = pathname.replace(/^\/es(?=\/|$)/, '');
  if (!rest || rest === '/') return '/ru';
  return `/ru${rest.startsWith('/') ? rest : `/${rest}`}`;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ru', req.url), 308);
  }
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    const url = req.nextUrl.clone();
    url.pathname = russianPath(pathname);
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/', '/es', '/es/:path*'] };
