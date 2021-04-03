import '../styles/main.scss'
import type { AppProps } from 'next/app'
import React from 'react'
import { Header } from 'components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Star Wars API - by Victor Gutierrez</title>
        <meta
          httpEquiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
