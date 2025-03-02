 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { baseUrl } from "./app/sitemap";

export function middleware(request: NextRequest) { 
  if (request.nextUrl.origin === 'http://localhost:3000' || request.nextUrl.origin === 'https://ivjose.com' ||  request.nextUrl.origin === "http://139.59.223.102:3000") {
    return NextResponse.next()
  }
  return NextResponse.redirect(baseUrl)

}