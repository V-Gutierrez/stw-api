import { render, screen } from '@testing-library/react'
import { Header } from '../../../components/Header'

import React from 'react'

describe('Header Component', () => {
  it('should render properly', () => {
    render(<Header />)

    const HeaderContainer = screen.getByTestId('header-container')

    expect(HeaderContainer).toHaveTextContent('Star Wars API')
    expect(HeaderContainer).toHaveClass('header-container')
  })
})
