import { NextRequest, NextResponse } from "next/server";

import { baseUrl } from "@/app/sitemap";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.origin !== baseUrl &&
    process.env.NODE_ENV !== "development"
  ) {
    return NextResponse.redirect(baseUrl);
  }
}
