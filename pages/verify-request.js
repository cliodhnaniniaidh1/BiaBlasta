import Link from 'next/link'
import React from 'react'

export default function VerifyRequest(){
    return(
        <div>
            <h1>Check your email</h1>
            <h2>A sign in link has been sent to your email address</h2>
            <Link href='/'>
                <p>Go back to homepage</p>
            </Link>
        </div>
    )
}