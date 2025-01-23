import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {
const MY_URL = 'https://ivjose.com'
  if (
    request.nextUrl.origin !== MY_URL &&
    process.env.NODE_ENV !== "development"
  ) {
    return NextResponse.redirect(MY_URL);
  }
}
