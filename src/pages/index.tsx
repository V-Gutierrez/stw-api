import React from 'react'
import { Homepage } from 'views/Homepage/Homepage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars API - by Victor Gutierrez</title>
        <meta
          http-equiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
      </Head>
      <Homepage />
    </>
  )
}
