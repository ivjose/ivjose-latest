 
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) { 
    // console.log(request, "DDD");
    
  if (request.nextUrl.host === 'localhost:3000' || request.nextUrl.host === 'ivjose.com' ) {
    return NextResponse.next()
  }
  return NextResponse.redirect('/home')

}