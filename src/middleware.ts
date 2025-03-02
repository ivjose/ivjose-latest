 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { baseUrl } from "./app/sitemap";

export function middleware(request: NextRequest) { 
  if (request.nextUrl.origin === 'http://localhost:3001' || request.nextUrl.origin === 'https://ivjose.com' ) {
    return NextResponse.next()
  }
  return NextResponse.redirect(baseUrl)

}