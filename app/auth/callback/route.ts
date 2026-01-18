import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Auth callback disabled for guest mode deployment
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)

  // Force custom domain if we are in production
  let origin = requestUrl.origin;

  // Check headers for forwarded host
  const forwardedHost = request.headers.get('x-forwarded-host');
  const forwardedProto = request.headers.get('x-forwarded-proto');

  if (forwardedHost && forwardedProto) {
    origin = `${forwardedProto}://${forwardedHost}`;
  }

  // Guest mode - skip auth exchange, just redirect
  console.log('[Guest Mode] Auth callback - redirecting without session exchange');

  return NextResponse.redirect(`${origin}/auth/redirect`)
}
