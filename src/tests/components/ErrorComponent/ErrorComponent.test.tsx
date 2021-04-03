import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorComponent } from '../../../components/ErrorComponent/ErrorComponent'

import React from 'react'

describe('ErrorComponent Component', () => {
  const Props = {
    retry: jest.fn()
  }

  it('should render properly based on Props', () => {
    render(<ErrorComponent {...Props} />)

    const retryButton = screen.getByTestId('retry-button')

    fireEvent.click(retryButton)

    expect(Props.retry).toHaveBeenCalled()
  })
})
