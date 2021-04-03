import React from 'react'
import { Homepage } from 'views/Homepage/Homepage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars API - by Victor Gutierrez</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Homepage />
    </>
  )
}
