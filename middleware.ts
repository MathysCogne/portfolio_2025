import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Vérifie si on est sur le sous-domaine "link"
  if (hostname.startsWith('link.')) {
    const url = request.nextUrl.clone();

    // Si on est à la racine du sous-domaine, on redirige vers /link
    if (url.pathname === '/') {
      url.pathname = '/link';
      return NextResponse.rewrite(url);
    }
  }

  // Sinon, comportement par défaut
  return NextResponse.next();
}
