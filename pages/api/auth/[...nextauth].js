import nodemailer from 'nodemailer'
import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import EmailProvider from 'next-auth/providers/email'
import MongoClientPromise from '../../lib/mongodb'
//maxAge - defines how long unitl the user has to reauthenicate again
//updateAge - define interval between each token refresh

const THIRTY_DAYS = 30 * 24 * 60 * 60 //represents days in amount of seconds
const THIRTY_MINUTES = 30 * 60  //represents minutes in amount of seconds

export default NextAuth({
  pages: {
    signIn: '/signin', //Sign in form
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/verify-request', // Email sent notification
  },
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: THIRTY_DAYS,
    updateAge: THIRTY_MINUTES
  },
  adapter: MongoDBAdapter(MongoClientPromise),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest ({
        identifier: email,
        url,
        provider: { server, from }
      }) {
        const { host } = new URL(url)
        const transport = nodemailer.createTransport(server)
        await transport.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          text: text({ url, host }),
          html: html({ url, host, email })
        })
      }
    })
  ]
})

function html ({ url, host, email }) {
  const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
  const escapedHost = `${host.replace(/\./g, '&#8203;.')}`
  // Your email template here
  return `
      <body>
        <h1>Your magic link! 🪄</h1>
        <h3>You requested a signin link to ${escapedEmail}</h3>
        <p>
          <a href="${url}">Sign in to ${escapedHost}</a>
      </body>
  `
}

// Fallback for non-HTML email clients
function text ({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`
}