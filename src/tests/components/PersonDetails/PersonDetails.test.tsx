import { render, screen } from '@testing-library/react'
import { PersonDetails } from '../../../components/PersonDetails/PersonDetails'

import React from 'react'

describe('PersonDetails Component', () => {
  const Props = { name: 'John', height: '222', mass: '111' }

  it('should render properly based on Props', () => {
    render(<PersonDetails {...Props} />)

    const nameContainer = screen.getByTestId('name-container')
    const heightContainer = screen.getByTestId('height-container')
    const massContainer = screen.getByTestId('mass-container')

    expect(nameContainer).toHaveTextContent(Props.name)
    expect(heightContainer).toHaveTextContent(Props.height)
    expect(massContainer).toHaveTextContent(Props.mass)
  })
})
