// src/middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Optional: Add paths you want the middleware to run on
export function middleware(request: NextRequest) {
  console.log('Middleware running:', request.nextUrl.pathname)
  return NextResponse.next()
}

// Optional: Specify which paths to include/exclude
export const config = {
  matcher: ["/site/about", "/site/projects", "/site/contact"],
}
