import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header data-testid='header-container' className='header-container'>
      <Link href='/'>
        <h1>Star Wars API</h1>
      </Link>
    </header>
  )
}
