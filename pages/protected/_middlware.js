import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

//protect all pages in this folder if user is not logged in
export async function middleware (req) {
  const session = await getToken({
    req,
    secret: process.env.SECRET,
    secureCookie: process.env.NEXTAUTH_URL?.startsWith('https://')
  })

  if (!session) return NextResponse.redirect('/api/auth/signin')
}