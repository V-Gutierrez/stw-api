import { render, screen, fireEvent } from '@testing-library/react'
import { Pager } from '../../../../components/PeopleList/components/Pager/Pager'

import React from 'react'

describe('Pager Component', () => {
  const Props = {
    handleNextPage: jest.fn(),
    handlePreviousPage: jest.fn(),
    pageValue: 1,
    pageCount: 8
  }

  it('should render properly based on Props', () => {
    render(<Pager {...Props} />)

    const pageValueContainer = screen.getByTestId('page-value-container')
    const pageCountContainer = screen.getByTestId('page-count-container')

    expect(pageValueContainer).toHaveTextContent(Props.pageValue.toString())
    expect(pageCountContainer).toHaveTextContent(Props.pageCount.toString())
  })

  it('should trigger handlers when prev or next is clicked', () => {
    render(<Pager {...Props} />)

    const previousPageButton = screen.getByTestId('previous-page-button')
    const nextPageButton = screen.getByTestId('next-page-button')

    fireEvent.click(previousPageButton)
    fireEvent.click(nextPageButton)

    expect(Props.handlePreviousPage).toHaveBeenCalled()
    expect(Props.handleNextPage).toHaveBeenCalled()
  })
})
