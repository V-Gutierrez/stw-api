import { render, screen, fireEvent } from '@testing-library/react'
import Error from '../../../components/ErrorComponent/ErrorComponent'

import React from 'react'

describe('ErrorComponent Component', () => {
  const Props = {
    retry: jest.fn()
  }

  it('should render properly based on Props', () => {
    render(<Error {...Props} />)

    const retryButton = screen.getByTestId('retry-button')

    fireEvent.click(retryButton)

    expect(Props.retry).toHaveBeenCalled()
  })
})
