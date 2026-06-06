import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  // proxy.ts is for routing concerns only in Next.js 16
  // Authentication is handled in layouts
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
