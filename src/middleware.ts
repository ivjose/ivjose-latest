 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { baseUrl } from "./app/sitemap";

export function middleware(request: NextRequest) { 
  if (request.nextUrl.host === 'localhost:3000' || request.nextUrl.host === 'ivjose.com' ) {
    return NextResponse.next()
  }
  return NextResponse.redirect(baseUrl)

}