// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function myMiddleware(request: NextRequest) {
    const MY_URL = 'https://ivjose.com'
    if (
      request.nextUrl.origin !== MY_URL &&
      process.env.NODE_ENV !== "development"
    ) {
      return NextResponse.redirect(new URL('/home', request.url))
    } 
  
  return NextResponse.next(); // Pass control to the next Middleware or route handler
}