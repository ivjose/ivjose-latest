// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function myMiddleware(request: NextRequest) {
  // Your Middleware logic here
  console.log(request);
  
  return NextResponse.next(); // Pass control to the next Middleware or route handler
}