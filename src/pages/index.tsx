import React from 'react'
import { Homepage } from 'views/Homepage/Homepage'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars API - by Victor Gutierrez</title>
      </Head>
      <Homepage />
    </>
  )
}
