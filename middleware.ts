import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BOT_UA = /google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|ahrefsbot|semrushbot|petalbot/i

export function middleware(request: NextRequest) {
  // Always allow search engine crawlers through
  const ua = request.headers.get('user-agent') ?? ''
  if (BOT_UA.test(ua)) return NextResponse.next()

  // Vercel injects x-vercel-ip-country on every request in production
  const country = request.headers.get('x-vercel-ip-country')

  // No country header = localhost or Vercel preview — allow through
  if (!country) return NextResponse.next()

  if (country !== 'AU') {
    return NextResponse.redirect('https://www.google.com.au', { status: 302 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Apply to all routes except Next.js internals, API routes, and crawlable files
    '/((?!_next/static|_next/image|favicon\\.ico|api/|robots\\.txt|sitemap\\.xml).*)',
  ],
}
