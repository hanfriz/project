import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect(new URL('/login', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  return response;
}
